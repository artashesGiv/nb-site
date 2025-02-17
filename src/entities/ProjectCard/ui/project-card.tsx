import { memo, useMemo } from 'react';
import Image from 'next/image';
import { CardBase } from '@/shared/ui/CardBase';
import './project-card.scss';

export type ProjectCardProps = DefaultProps<{
  src: string;
  title: string;
  href?: string;
}>;

export const ProjectCard = memo<ProjectCardProps>(
  ({ className = '', href, title, src }) => {
    const classes = useProjectCardClasses(className);

    return (
      <CardBase className={classes} size='s' href={href}>
        <Image
          className='project-card__image'
          src={src}
          alt={title}
          width={0}
          height={0}
          layout='responsive'
        />
        <span className='project-card__title'>{title}</span>
      </CardBase>
    );
  },
);

ProjectCard.displayName = 'ProjectCard';

const useProjectCardClasses = (className: ProjectCardProps['className']) =>
  useMemo(() => {
    const classes = [className, 'project-card'];

    return classes.join(' ');
  }, [className]);
