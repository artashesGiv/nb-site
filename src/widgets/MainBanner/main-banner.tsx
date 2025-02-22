import { memo, useMemo } from 'react';
import Image from 'next/image';
import { Button, IconBase } from '@/shared';
import './main-banner.scss';

export type MainBannerProps = DefaultProps<{
  onClickContactUs?: () => void;
}>;

export const MainBanner = memo<MainBannerProps>(props => {
  const { onClickContactUs } = props;
  const classes = useMainBannerClasses(props);

  return (
    <section id='main' className={classes}>
      <div className='main-banner__content'>
        <div className='main-banner__text'>
          <div className='main-banner__title-wrapper'>
            {['Анализируем', 'Масштабируем', 'Создаем'].map(title => (
              <div className='main-banner__title' key={title}>
                <IconBase
                  className='main-banner__title-icon'
                  name='chevron-down'
                />
                <h1>{title}</h1>
              </div>
            ))}
          </div>
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
            onClick={onClickContactUs}
          />
        </div>
      </div>
      <Image
        className='main-banner__bg'
        src='/images/main-banner/main-bg.jpg'
        alt='bg'
        fill
      />
    </section>
  );
});

MainBanner.displayName = 'MainBanner';

const useMainBannerClasses = ({ className }: MainBannerProps) =>
  useMemo(() => {
    const classes = [className || '', 'main-banner'];

    return classes.join(' ');
  }, [className]);
