import './yandex-map.scss';
import { memo, useMemo } from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { CardBase } from '@/shared/ui/CardBase';

export type YandexMapProps = DefaultProps<{
  center: [number, number];
}>;

export const YandexMap = memo<YandexMapProps>(({ className = '', center }) => {
  const classes = useYandexMapClasses(className);
  const defaultState = {
    center,
    zoom: 10,
    controls: [],
  };

  const mapOptions = {
    suppressMapOpenBlock: true,
    yandexMapDisablePoiInteractivity: true,
  };

  return (
    <CardBase size={'s'} className={classes}>
      <YMaps>
        <Map
          defaultState={defaultState}
          width={'100%'}
          height={'400px'}
          options={mapOptions}
          state={defaultState}
        >
          <Placemark geometry={defaultState.center} />
        </Map>
      </YMaps>
    </CardBase>
  );
});

YandexMap.displayName = 'YandexMap';

const useYandexMapClasses = (className: YandexMapProps['className']) =>
  useMemo(() => {
    const classes = [className, 'yandex-map'];

    return classes.join(' ');
  }, [className]);
