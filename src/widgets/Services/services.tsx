import { memo, useMemo } from 'react';
import Image from 'next/image';
import { CardCollapse, SectionContainer, Title } from '@/shared';
import './services.scss';

export type ServicesProps = DefaultProps;

export const Services = memo<ServicesProps>(props => {
  const classes = useServicesClasses(props);
  const servicesList = [
    {
      src: '/images/services/airplay-video.svg',
      title: 'Государственные информационные системы',
      description: [
        '— Разработка проектной документации ',
        '— Разработка системы и поиск продуктов, отвечающих требованиям ',
        '— Внедрение системы с вовлечением пользователей ',
        '— Техническая поддержка системы и ее обновление',
      ],
    },
    {
      src: '/images/services/computing.svg',
      title: 'BI-аналитика',
      description: [
        '— Разработка и внедрение систем бизнес-аналитики ',
        '— Оптимизация бизнес-процессов компании ',
        '— Выявление «узких мест» и предсказание событий ',
        '— Визуализация аналитики для всех процессов вашего предприятия',
      ],
    },
    {
      src: '/images/services/airplay-audio.svg',
      title: 'Стратегия цифровой трансформации',
      description: [
        '— Анализ текущего состояния компании ',
        '— Разработка дорожной карты развития ',
        '— Разработка концепции ',
        '— Проведение стратегических сессий ',
        '— Подбор IT-решений, удовлетворяющих потребности заказчика ',
        '— Консультационная и техническая поддержка на протяжении всех этапов реализации ',
        '— Обучение ТОП-менеджмента и сотрудников',
      ],
    },
    {
      src: '/images/services/command.svg',
      title: 'Консультационные услуги по внедрению IT-стратегии',
      description: [
        '— ИТ-аудит ',
        '— Внедрение технологий для оптимизации бизнеса ',
        '— Решение бизнес-задач и оптимизация бизнес-процессов ',
        '— Разработка плана масштабирования',
      ],
    },
    {
      src: '/images/services/copy.svg',
      title: 'Портальные решения для государства и бизнеса',
      description: [
        '— Анализ потребностей ',
        '— Разработка и внедрение ',
        '— Индивидуальный подход',
      ],
    },
    {
      src: '/images/services/newspaper.svg',
      title: 'Бизнес-анализ компании',
      description: [
        '— Анализ текущего состояния компании ',
        '— Разработка стратегии развития ',
        '— Модернизация бизнес-процессов',
      ],
    },
    {
      src: '/images/services/devices.svg',
      title: 'Разработка программных продуктов и мобильных приложений',
      description: [
        '— Разработка документации ',
        '— Анализ потребностей ',
        '— Поддержка на всех этапах реализации ',
        '— Индивидуальный подход = эксклюзивный продукт',
      ],
    },
  ];

  return (
    <SectionContainer id='services' className={classes}>
      <Title text='Наши услуги' type='h2' className='services__title' />
      <div className='services__content'>
        {servicesList.map(service => (
          <CardCollapse
            key={service.title}
            imageSrc={service.src}
            title={service.title}
            className='services__card'
          >
            <div className='services__card-description'>
              {service.description.map((elem, idx) => (
                <div key={`elem-${idx}`}>{elem}</div>
              ))}
            </div>
          </CardCollapse>
        ))}
      </div>
      <Image
        className='services__bg-img'
        src='/images/decorators/main-decor.png'
        alt='декорация'
        width={1500}
        height={1000}
      />
    </SectionContainer>
  );
});

Services.displayName = 'Services';

const useServicesClasses = ({ className }: ServicesProps) =>
  useMemo(() => {
    const classes = [className || '', 'services'];

    return classes.join(' ');
  }, [className]);
