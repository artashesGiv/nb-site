'use client';

import { memo, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ContactUs, ContactUsForm } from '@/entities';
import { TransitionBase } from '@/shared';
import './contact-us-modal.scss';

export type ContactUsModalProps = DefaultProps<{
  isShow: boolean;
}>;

export const ContactUsModal = memo<ContactUsModalProps>(props => {
  const { isShow, ref } = props;
  const classes = useContactUsModalClasses(props);

  return (
    <TransitionBase isVisible={isShow}>
      {createPortal(
        <>
          <div className='contact-us-modal__overlay' />
          <div ref={ref} className={classes}>
            <ContactUs form={<ContactUsForm />} />
          </div>
        </>,
        document.body,
      )}
    </TransitionBase>
  );
});

ContactUsModal.displayName = 'ContactUsModal';

const useContactUsModalClasses = ({ className }: ContactUsModalProps) =>
  useMemo(() => {
    const classes = [className || '', 'contact-us-modal'];

    return classes.join(' ');
  }, [className]);
