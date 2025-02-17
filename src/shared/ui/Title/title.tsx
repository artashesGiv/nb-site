import { type JSX, memo, useMemo } from 'react';
import './title.scss';

export type TitleProps = DefaultProps<{
  text: string;
  type?: 'h1' | 'h2';
}>;

export const Title = memo<TitleProps>(props => {
  const normalizedProps: TitleProps = {
    ...props,
    type: props.type ?? 'h1',
  };

  const { text, type } = normalizedProps;
  const classes = useTitleClasses(normalizedProps);

  const Tag = type as keyof JSX.IntrinsicElements;

  return <Tag className={classes}>{text}</Tag>;
});

Title.displayName = 'Title';

const useTitleClasses = ({ className, type }: TitleProps) =>
  useMemo(() => {
    const classes = [className || '', 'title', `title--type--${type}`];

    return classes.join(' ');
  }, [className, type]);
