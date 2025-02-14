import { memo, useMemo } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { createPortal } from 'react-dom';
import {
  HeaderMobileMenu,
  type HeaderMobileMenuProps,
} from '../HeaderMobileMenu';
import './header-menu-modal.scss';

export type HeaderMenuModalProps = DefaultProps<{
  links: HeaderMobileMenuProps['links'];
  isOpen: boolean;
}>;

const animationVariants: Variants = {
  hidden: { opacity: 0, y: -500 },
  visible: { opacity: 1, y: 0 },
};

export const HeaderMenuModal = memo<HeaderMenuModalProps>(props => {
  const { links, isOpen, ref } = props;
  const classes = useHeaderMenuModalClasses(props);

  return createPortal(
    <AnimatePresence initial={isOpen}>
      {isOpen && (
        <motion.div
          initial='hidden'
          exit='hidden'
          animate='visible'
          variants={animationVariants}
          className={classes}
        >
          <HeaderMobileMenu links={links} ref={ref} />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
});

HeaderMenuModal.displayName = 'HeaderMenuModal';

const useHeaderMenuModalClasses = ({ className }: HeaderMenuModalProps) =>
  useMemo(() => {
    const classes = [className || '', 'header-menu-modal'];

    return classes.join(' ');
  }, [className]);
