import type { InputProps } from '@/shared';

export type ContactUsFormData = Record<
  string,
  { bind: Omit<InputProps, 'onChange'>; regex?: RegExp }
>;

export const contactFormData: ContactUsFormData = {
  name: {
    bind: {
      value: '',
      icon: 'person',
      placeholder: 'Имя',
    },
    regex: /^[A-Za-zА-Яа-яЁё\s-]{2,50}$/, // Только буквы, пробелы и дефисы, от 2 до 50 символов
  },
  ['second-name']: {
    bind: {
      value: '',
      icon: 'person',
      placeholder: 'Фамилия',
    },
    regex: /^[A-Za-zА-Яа-яЁё\s-]{2,50}$/, // Аналогично имени
  },
  phone: {
    bind: {
      value: '',
      icon: 'phone',
      placeholder: 'Телефон',
    },
    regex: /^\+?[0-9]{10,15}$/, // Номера телефонов (10-15 цифр, опционально с + в начале)
  },
  mail: {
    bind: {
      value: '',
      icon: 'mention',
      placeholder: 'Почта',
    },
    regex: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, // Email в формате example@domain.com
  },
  comment: {
    bind: {
      value: '',
      icon: 'comment',
      placeholder: 'Сообщение',
    },
    regex: /^[\s\S]{1,500}$/, // Разрешает любые символы, длина от 1 до 500
  },
};
