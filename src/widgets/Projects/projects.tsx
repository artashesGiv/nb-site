'use client';

import { memo, useMemo } from 'react';
import { ProjectCard, type ProjectCardProps } from '@/entities';
import { SectionContainer, Title } from '@/shared';
import './projects.scss';

export type ProjectsProps = DefaultProps;

const projects: ProjectCardProps[] = [
  {
    title:
      'Разработка и внедрение информационной системы «Агрополия» (ГИС АПК МСХиП РТ)',
    src: '/images/projects/agropolia.jpg',
  },
  {
    title:
      'Разработка комплексной цифровой платформы для цифровизации федерального ВУЗа',
    src: '/images/projects/university.jpg',
  },
  {
    title: 'Бизнес-анализ процессов МСХ РФ',
    src: '/images/projects/MSH.jpg',
  },
  {
    title: 'Бизнес-анализ процессов в рамках создания ГИС НБГИ',
    src: '/images/projects/NBGI.jpg',
  },
];

export const Projects = memo<ProjectsProps>(props => {
  const classes = useProjectsClasses(props);

  return (
    <SectionContainer className={classes}>
      <Title text='Наши проекты' type='h2' className='projects__title' />
      <div className='projects__content'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} className='projects__card' />
        ))}
      </div>
    </SectionContainer>
  );
});

Projects.displayName = 'Projects';

const useProjectsClasses = ({ className }: ProjectsProps) =>
  useMemo(() => {
    const classes = [className || '', 'projects'];

    return classes.join(' ');
  }, [className]);
