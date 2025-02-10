import './project-card.scss';
import { memo, useMemo } from 'react';
import { CardBase } from '@/shared/ui/CardBase';
import Image from 'next/image';

export type ProjectCardProps = DefaultPropsWithChildren<{
  url: string;
  title: string;
  href: string;
}>;

export const ProjectCard = memo<ProjectCardProps>(
  ({ className = '', href, title, url }) => {
    const classes = UseProjectCardClasses(className);

    return (
      <CardBase className={classes} size={'l'}>
        <Image
          className={'project-card__image'}
          src={url}
          alt={title}
          width={800}
          height={400}
        />
        <span className={'project-card__title'}>
          {title}
          <a href={href} className={'project-card__href'}></a>
        </span>
      </CardBase>
    );
  },
);

ProjectCard.displayName = 'ProjectCard';

const UseProjectCardClasses = (className: ProjectCardProps['className']) =>
  useMemo(() => {
    const classes = [className, 'project-card'];

    return classes.join(' ');
  }, [className]);
