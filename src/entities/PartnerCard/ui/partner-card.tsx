import { memo, useMemo } from 'react';

import Image from 'next/image';

import { CardBase } from '@/shared/ui/CardBase';

import './partner-card.scss';

export type PartnerCardProps = DefaultProps<{
  src: string;
  href: string;
}>;

export const PartnerCard = memo<PartnerCardProps>(
  ({ className = '', href, src }) => {
    const classes = usePartnerCardClasses(className);

    return (
      <CardBase className={classes} size="s" href={href} view='fill'>
        <Image
          className="partner-card__image"
          src={src}
          alt={src}
          width={0}
          height={0}
        />
      </CardBase>
    );
  },
);

PartnerCard.displayName = 'PartnerCard';

const usePartnerCardClasses = (className: PartnerCardProps['className']) =>
  useMemo(() => {
    const classes = [className, 'partner-card'];

    return classes.join(' ');
  }, [className]);
