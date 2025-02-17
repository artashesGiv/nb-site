'use client';

import {
  type Dispatch,
  memo,
  type SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Button, Input, useScreenSize } from '@/shared';
import './contact-us-form.scss';
import { contactFormData, type ContactUsFormData } from './helpers';

export type ContactUsFormProps = DefaultProps;

export const ContactUsForm = memo<ContactUsFormProps>(props => {
  const classes = useContactUsFormClasses(props);
  const { breakpoints } = useScreenSize();
  const { formData, setFormData, handleFormChange } = useHandleForm();

  return (
    <div role='from' className={classes}>
      {Object.entries(formData).map(([key, value]) => (
        <Input
          key={key}
          {...value.bind}
          onChange={(value: string) => handleFormChange(key, value)}
          className={`contact-us-form__input contact-us-form__input--${key}`}
          size={breakpoints.tablet ? 'l' : 'm'}
        />
      ))}
      <Button
        text='Отправить'
        size={breakpoints.tablet ? 'l' : 'm'}
        className='contact-us-form__button'
        onClick={() => onSendData(formData, setFormData)}
      />
    </div>
  );
});

ContactUsForm.displayName = 'ContactUsForm';

const useContactUsFormClasses = ({ className }: ContactUsFormProps) =>
  useMemo(() => {
    const classes = [className || '', 'contact-us-form'];

    return classes.join(' ');
  }, [className]);

const useHandleForm = () => {
  const [formData, setFormData] = useState(contactFormData);
  const handleFormChange = useCallback(
    (key: keyof typeof formData, value: string) => {
      setFormData(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          bind: {
            ...prev[key].bind,
            value,
          },
        },
      }));
    },
    [setFormData],
  );

  return { formData, setFormData, handleFormChange };
};

const onFormValidate = (
  formData: typeof contactFormData,
  setFormData: Dispatch<SetStateAction<ContactUsFormData>>,
) => {
  let isValid = true;

  Object.entries(formData).forEach(([key, value]) => {
    if (
      value.bind.value &&
      value.regex &&
      !value.regex.test(value.bind.value)
    ) {
      isValid = false;

      setFormData(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          isError: true,
        },
      }));
    }
  });

  return isValid;
};

const onSendData = (
  formData: typeof contactFormData,
  setFormData: Dispatch<SetStateAction<ContactUsFormData>>,
) => {
  if (onFormValidate(formData, setFormData)) {
    console.log(formData);
  }
};
