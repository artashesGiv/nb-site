import { memo, useMemo } from 'react';
import './section-container.scss';

export type SectionContainerProps = DefaultPropsWithChildren<{
  id?: string;
}>;

export const SectionContainer = memo<SectionContainerProps>(props => {
  const { children, id } = props;
  const classes = useSectionContainerClasses(props);

  return (
    <section id={id} className={classes}>
      {' '}
      {children}{' '}
    </section>
  );
});

SectionContainer.displayName = 'SectionContainer';

const useSectionContainerClasses = ({ className }: SectionContainerProps) =>
  useMemo(() => {
    const classes = [className || '', 'section-container'];

    return classes.join(' ');
  }, [className]);
