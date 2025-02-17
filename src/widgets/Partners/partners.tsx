'use client';

import { memo, useMemo } from 'react';
import { PartnerCard, type PartnerCardProps } from '@/entities';
import { SectionContainer, Title } from '@/shared';
import './partners.scss';

export type PartnersProps = DefaultProps;

const partners: PartnerCardProps[] = [
  {
    href: 'https://google.com',
    src: '/images/partners/digital.png',
  },
  {
    href: 'https://google.com',
    src: '/images/partners/rivc.png',
  },
  {
    href: 'https://google.com',
    src: '/images/partners/techno-prom.png',
  },
  {
    href: 'https://google.com',
    src: '/images/partners/rostelecom.png',
  },
];

export const Partners = memo<PartnersProps>(props => {
  const classes = usePartnersClasses(props);

  return (
    <SectionContainer id='partners' className={classes}>
      <div className='partners__header'>
        <Title text='Наши партнёры' type='h2' className='partners__title' />
        <p className='partners__description'>
          Мы стремимся не только к профессиональному совершенству, но и к
          созданию прочных и долгосрочных бизнес-отношений с нашими партнёрами
        </p>
      </div>
      <div className='partners__content'>
        {partners.map((partner, index) => (
          <PartnerCard key={index} {...partner} className='partners__card' />
        ))}
      </div>
    </SectionContainer>
  );
});

Partners.displayName = 'Partners';

const usePartnersClasses = ({ className }: PartnersProps) =>
  useMemo(() => {
    const classes = [className || '', 'partners'];

    return classes.join(' ');
  }, [className]);
