'use client';

import { memo, useMemo, useState } from 'react';
import { Button, Input, type InputProps, useScreenSize } from '@/shared';
import './contact-us-form.scss';

export type ContactUsFormProps = DefaultProps;

const contactFormData: Record<string, Omit<InputProps, 'onChange'>> = {
  name: {
    value: '',
    icon: 'person',
    placeholder: 'Имя',
  },
  ['second-name']: {
    value: '',
    icon: 'person',
    placeholder: 'Фамилия',
  },
  phone: {
    value: '',
    icon: 'phone',
    placeholder: 'Телефон',
  },
  mail: {
    value: '',
    icon: 'mention',
    placeholder: 'Почта',
  },
  comment: {
    value: '',
    icon: 'comment',
    placeholder: 'Сообщение',
  },
};

export const ContactUsForm = memo<ContactUsFormProps>(props => {
  const classes = useContactUsFormClasses(props);
  const [formData, setFormData] = useState(contactFormData);
  const { breakpoints } = useScreenSize();

  const handleFormChange = (key: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        value,
      },
    }));
  };

  return (
    <form className={classes}>
      {Object.entries(formData).map(([key, value]) => (
        <Input
          key={key}
          {...value}
          onChange={(value: string) => handleFormChange(key, value)}
          className={`contact-us-form__input contact-us-form__input--${key}`}
          size={breakpoints.tablet ? 'l' : 'm'}
        />
      ))}
      <Button
        text='Отправить'
        size={breakpoints.tablet ? 'l' : 'm'}
        className='contact-us-form__button'
      />
    </form>
  );
});

ContactUsForm.displayName = 'ContactUsForm';

const useContactUsFormClasses = ({ className }: ContactUsFormProps) =>
  useMemo(() => {
    const classes = [className || '', 'contact-us-form'];

    return classes.join(' ');
  }, [className]);
