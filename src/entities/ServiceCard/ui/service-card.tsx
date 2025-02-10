import { memo, useMemo } from 'react';
import { CardCollapse } from '@/shared';

import './service-card.scss';

export type ServiceCardProps = DefaultProps<{
  src: string;
  title: string;
  content: string;
}>;

export const ServiceCard = memo<ServiceCardProps>(
  ({ className = '', title, src, content }) => {
    const classes = useServiceCardClasses(className);

    return (
      <CardCollapse
        className={classes}
        title={title}
        imageSrc={src}
        cardProps={{ size: 'm' }}
      >
        <div className={'service-card__content'}>{content}</div>
      </CardCollapse>
    );
  },
);

ServiceCard.displayName = 'ServiceCard';

const useServiceCardClasses = (className: ServiceCardProps['className']) =>
  useMemo(() => {
    const classes = [className, 'service-card'];

    return classes.join(' ');
  }, [className]);
