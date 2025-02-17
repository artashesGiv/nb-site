'use client';

import { memo, useMemo } from 'react';
import Image from 'next/image';
import { ContactUsForm } from '@/features';
import { Title } from '@/shared';
import './contact-us.scss';

export type ContactUsProps = DefaultProps;

export const ContactUs = memo<ContactUsProps>(props => {
  const classes = useContactUsClasses(props);

  return (
    <div className={classes}>
      <Image
        alt='decor'
        src='/images/decorators/contact-us.png'
        className='contact-us__decor'
        width={300}
        height={300}
      />
      <div className='contact-us__header'>
        <Title text='Оставьте заявку' type='h2' className='contact-us__title' />
        <p className='contact-us__description'>
          Наши специалисты свяжутся с вами для консультации
        </p>
      </div>
      <ContactUsForm className='contact-us__content' />
      <div className='contact-us__footer'>
        Нажимая «Отправить» Вы соглашаетесь на обработку персональных данных
      </div>
    </div>
  );
});

ContactUs.displayName = 'ContactUs';

const useContactUsClasses = ({ className }: ContactUsProps) =>
  useMemo(() => {
    const classes = [className || '', 'contact-us'];

    return classes.join(' ');
  }, [className]);
