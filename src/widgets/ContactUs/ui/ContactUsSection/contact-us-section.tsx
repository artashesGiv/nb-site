'use client';

import { memo, useMemo } from 'react';
import { ContactUs, ContactUsForm } from '@/entities';
import { SectionContainer } from '@/shared';
import './contact-us-section.scss';

export type ContactUsProps = DefaultProps;

export const ContactUsSection = memo<ContactUsProps>(props => {
  const classes = useContactUsClasses(props);

  return (
    <SectionContainer className={classes}>
      <ContactUs form={<ContactUsForm />} />
    </SectionContainer>
  );
});

ContactUsSection.displayName = 'ContactUs';

const useContactUsClasses = ({ className }: ContactUsProps) =>
  useMemo(() => {
    const classes = [className || '', 'contact-us-section'];

    return classes.join(' ');
  }, [className]);
