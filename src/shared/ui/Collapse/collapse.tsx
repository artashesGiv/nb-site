import './collapse.scss';
import { memo, ReactNode, useEffect, useMemo, useRef, useState } from 'react';

export type CollapseProps = DefaultProps<{
  title: ReactNode;
  collapsed: ReactNode;
}>;

export const Collapse = memo<CollapseProps>(
  ({ title, collapsed, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const classes = useProjectCardClasses(className, isOpen);

    useEffect(() => {
      if (contentRef.current) {
        contentRef.current.style.maxHeight = isOpen
          ? `${contentRef.current.scrollHeight}px`
          : '0px';
      }
    }, [isOpen]);

    return (
      <div className={classes}>
        <div
          className={'collapse__title'}
          onClick={() => setIsOpen(prev => !prev)}
        >
          {title}
        </div>
        <div className='collapse__content' ref={contentRef}>
          {collapsed}
        </div>
      </div>
    );
  },
);

Collapse.displayName = 'Collapse';

const useProjectCardClasses = (
  className: CollapseProps['className'],
  isOpen: boolean,
) =>
  useMemo(() => {
    const classes = [
      className,
      'collapse',
      isOpen ? 'collapse--open' : 'collapse--closed',
    ];

    return classes.join(' ');
  }, [className, isOpen]);
