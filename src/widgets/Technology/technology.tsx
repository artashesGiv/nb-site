import { memo, useMemo } from 'react';
import { Badge, Button, Divider, SectionContainer, Title } from '@/shared';
import './technology.scss';

export type TechnologyProps = DefaultProps;

export const Technology = memo<TechnologyProps>(props => {
  const classes = useTechnologyClasses(props);
  const technologyList = [
    [
      {
        name: 'Back-end',
        items: [
          'Java/PHP',
          'Laravel',
          'Symfony',
          'Spring Framework',
          'Hibernate',
          'PostgreSQL',
          'Mongo',
          'Docker',
          'Jenkins',
          'Ansible',
          'RTSP',
          'WebRTC',
        ],
      },
    ],
    [
      {
        name: 'Front-end',
        items: [
          'Angular/React/Vue',
          'Typescript',
          'Jade',
          'Webpack/Angular CLI',
          'Nodejs',
          'Freemarker',
          'Single Page application',
          'Server side rendering',
          'SCSS',
          'JavaFX',
          'Windows apps',
        ],
      },
    ],
    [
      {
        name: 'Mobile - разработка',
        items: [],
      },
      {
        name: 'Cross platform: Flutter iOS: Swift',
        items: ['Alamofire', 'PromiseKit', 'CoreData'],
      },
      {
        name: 'Android: Android (Java/Kotlin)',
        items: [
          'JavaRx',
          'Robolectric',
          'Crashlitycs Beta',
          'Firebase Analytics',
          'Realm, Dagger',
          'Alexа Voice Assistant',
          'PocketSphinx',
          'Root',
          'Voice call',
        ],
      },
    ],
    [
      {
        name: 'Design',
        items: ['UX', 'UI', 'CJM', 'Figma', 'Sketch'],
      },
    ],
    [
      {
        name: 'И другие',
        items: [],
      },
    ],
  ];

  return (
    <SectionContainer id='technology' className={classes}>
      <Title text='Стек технологий' type='h2' className='technology__title' />
      {technologyList.map((categories, idx) => (
        <div key={`categories-${idx}`}>
          <div>
            {categories.map(category => (
              <div className='technology__item' key={category.name}>
                <div className='technology__item-title'>{category.name}</div>
                <div className='technology__badges'>
                  {category.items.map(item => (
                    <Badge key={item} text={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Divider view='dark' />
        </div>
      ))}
      <Button className='technology__btn' text='Связаться с нами' size='xl' />
    </SectionContainer>
  );
});

Technology.displayName = 'Technology';

const useTechnologyClasses = ({ className }: TechnologyProps) =>
  useMemo(() => {
    const classes = [className || '', 'technology'];

    return classes.join(' ');
  }, [className]);
