'use client';

import { memo, useMemo } from 'react';
import { SectionContainer, Title } from '@/shared';
import './partners.scss';

export type PartnersProps = DefaultProps;

export const Partners = memo<PartnersProps>(props => {
  const classes = usePartnersClasses(props);

  return (
    <section id='partners' className={classes}>
      <SectionContainer>
        <Title text='Partners' type='h2' />
      </SectionContainer>
    </section>
  );
});

Partners.displayName = 'Partners';

const usePartnersClasses = ({ className }: PartnersProps) =>
  useMemo(() => {
    const classes = [className || '', 'partners'];

    return classes.join(' ');
  }, [className]);
