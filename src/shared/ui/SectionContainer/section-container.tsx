import { memo, useMemo } from 'react';
import './section-container.scss';

export type SectionContainerProps = DefaultPropsWithChildren;

export const SectionContainer = memo<SectionContainerProps>(props => {
  const { children } = props;
  const classes = useSectionContainerClasses(props);

  return <div className={classes}> {children} </div>;
});

SectionContainer.displayName = 'SectionContainer';

const useSectionContainerClasses = ({ className }: SectionContainerProps) =>
  useMemo(() => {
    const classes = [className || '', 'section-container'];

    return classes.join(' ');
  }, [className]);
