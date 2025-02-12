import { memo, useMemo } from 'react';

import Image from 'next/image';

import { Button } from '@/shared';

import './main-banner.scss';

export type MainBannerProps = DefaultProps;

export const MainBanner = memo<MainBannerProps>(props => {
  const classes = useMainBannerClasses(props);

  return (
    <div className={classes}>
      <div className='main-banner__content'>
        <div className='main-banner__text'>
          <h1 className='main-banner__title'>Анализируем</h1>
          <h1 className='main-banner__title'>Создаем</h1>
          <h1 className='main-banner__title'>Масштабируем</h1>
          <p className='main-banner__description'>
            New Brand предлагает широкий спектр услуг в области ИТ по
            трансформации вашего бизнеса и перехода на цифровой уровень
          </p>
        </div>
        <div className='main-banner__btn-wrapper'>
          <Button
            className='main-banner__btn'
            size='l'
            view='base'
            text='Связаться с нами'
          />
        </div>
      </div>
      <Image
        className='main-banner__bg'
        src='/images/main-banner/main-bg.jpg'
        alt='bg'
        fill
      />
    </div>
  );
});

MainBanner.displayName = 'MainBanner';

const useMainBannerClasses = ({ className }: MainBannerProps) =>
  useMemo(() => {
    const classes = [className || '', 'main-banner'];

    return classes.join(' ');
  }, [className]);
