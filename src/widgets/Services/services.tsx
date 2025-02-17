import { memo, useMemo } from 'react';
import { CardCollapse, SectionContainer, Title } from '@/shared';
import './services.scss';

export type ServicesProps = DefaultProps;

export const Services = memo<ServicesProps>(props => {
  const classes = useServicesClasses(props);
  const servicesList = [
    {
      src: '',
      title: 'Государственные информационные системы',
      description: [
        '— Разработка проектной документации ',
        '— Разработка системы и поиск продуктов, отвечающих требованиям ',
        '— Внедрение системы с вовлечением пользователей ',
        '— Техническая поддержка системы и ее обновление',
      ],
    },
    {
      src: '',
      title: 'BI-аналитика',
      description: [
        '— Разработка и внедрение систем бизнес-аналитики ',
        '— Оптимизация бизнес-процессов компании ',
        '— Выявление «узких мест» и предсказание событий ',
        '— Визуализация аналитики для всех процессов вашего предприятия',
      ],
    },
    {
      src: '',
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
      src: '',
      title: 'Консультационные услуги по внедрению IT-стратегии',
      description: [
        '— ИТ-аудит ',
        '— Внедрение технологий для оптимизации бизнеса ',
        '— Решение бизнес-задач и оптимизация бизнес-процессов ',
        '— Разработка плана масштабирования',
      ],
    },
    {
      src: '',
      title: 'Портальные решения для государства и бизнеса',
      description: [
        '— Анализ потребностей ',
        '— Разработка и внедрение ',
        '— Индивидуальный подход',
      ],
    },
    {
      src: '',
      title: 'Бизнес-анализ компании',
      description: [
        '— Анализ текущего состояния компании ',
        '— Разработка стратегии развития ',
        '— Модернизация бизнес-процессов',
      ],
    },
    {
      src: '',
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
    <section id='services' className={classes}>
      <SectionContainer>
        <Title text='Наши услуги' type='h2' className='services__title' />
        <div>
          {servicesList.map(service => (
            <CardCollapse
              key={service.title}
              imageSrc={service.src}
              title={service.title}
            >
              <div>
                {service.description.map((elem, idx) => (
                  <div key={`elem-${idx}`}>{elem}</div>
                ))}
              </div>
            </CardCollapse>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
});

Services.displayName = 'Services';

const useServicesClasses = ({ className }: ServicesProps) =>
  useMemo(() => {
    const classes = [className || '', 'services'];

    return classes.join(' ');
  }, [className]);
