import { memo, useMemo } from 'react';
import Image from 'next/image';
import { SectionContainer, Title } from '@/shared';
import './description.scss';

export type DescriptionProps = DefaultProps;

export const Description = memo<DescriptionProps>(props => {
  const classes = useDescriptionClasses(props);

  return (
    <SectionContainer id='description' className={classes}>
      <div className='description__text-wrapper'>
        <Title text='Команда NEW BRAND' type='h2' />
        <p className='description__text-first'>
          Это 50+ высококлассных специалистов, имеющих более 17 лет опыта в
          разработке программных продуктов «под ключ».
        </p>
        <p className='description__text-second'>
          New Brand входит в динамично развивающуюся группу компаний «ONA»,
          обладающей экспертностью в различных отраслях — от информационных
          технологий до сельского хозяйства.
        </p>
      </div>
      <div className='description__img-wrapper'>
        <Image
          className='description__img'
          src='/images/description/main.png'
          alt='Description'
          height={410}
          width={880}
        />
      </div>
    </SectionContainer>
  );
});

Description.displayName = 'Description';

const useDescriptionClasses = ({ className }: DescriptionProps) =>
  useMemo(() => {
    const classes = [className || '', 'description'];

    return classes.join(' ');
  }, [className]);
