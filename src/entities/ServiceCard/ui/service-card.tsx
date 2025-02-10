import './service-card.scss';
import { memo, useMemo, useState } from 'react';
import { CardBase } from '@/shared/ui/CardBase';
import Image from 'next/image';
import { Collapse } from '@/shared/ui/Collapse';
import { IconBase } from '@/shared';

export type ServiceCardProps = DefaultProps<{
  src: string;
  title: string;
  content: string;
}>;

export const ServiceCard = memo<ServiceCardProps>(
  ({ className = '', title, src, content }) => {
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    const classes = useServiceCardClasses(className, isCollapseOpen);

    return (
      <CardBase className={classes} size={'m'}>
        <Collapse onToggle={setIsCollapseOpen}>
          <div className={'service-card__title'}>
            <Image
              className={'service-card__image'}
              src={src}
              alt={title}
              width={80}
              height={80}
            />
            <span className={'service-card__text'}>{title}</span>
            <IconBase
              className={'service-card__icon'}
              name={'trash'}
            ></IconBase>
          </div>
          <div className={'service-card__content'}>{content}</div>
        </Collapse>
      </CardBase>
    );
  },
);

ServiceCard.displayName = 'ServiceCard';

const useServiceCardClasses = (
  className: ServiceCardProps['className'],
  isCollapseOpen: boolean,
) =>
  useMemo(() => {
    const classes = [
      className,
      'service-card',
      isCollapseOpen ? 'service-card--open' : 'service-card--closed',
    ];

    return classes.join(' ');
  }, [className, isCollapseOpen]);
