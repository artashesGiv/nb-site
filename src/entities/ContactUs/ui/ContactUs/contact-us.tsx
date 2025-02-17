'use client';

import { memo, type ReactNode, useMemo } from 'react';
import Image from 'next/image';
import { Title } from '@/shared';
import './contact-us.scss';

export type ContactUsProps = DefaultProps<{
  form: ReactNode;
}>;

export const ContactUs = memo<ContactUsProps>(props => {
  const { form } = props;
  const classes = useContactUsClasses(props);

  return (
    <div className={classes}>
      <Image
        alt='decor'
        src='/images/decorators/contact-us.png'
        className='contact-us__decor'
        width={200}
        height={200}
      />
      <div className='contact-us__header'>
        <Title text='Оставьте заявку' type='h2' className='contact-us__title' />
        <p className='contact-us__description'>
          Наши специалисты свяжутся с вами для консультации
        </p>
      </div>
      {form}
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
