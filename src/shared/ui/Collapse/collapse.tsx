import './collapse.scss';
import { memo, ReactNode, useEffect, useMemo, useRef, useState } from 'react';

export type CollapseProps = DefaultProps<{
  children: [ReactNode, ReactNode];
  onToggle?: (isOPen: boolean) => void;
}>;

export const Collapse = memo<CollapseProps>(
  ({ children, className = '', onToggle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const classes = useProjectCardClasses(className, isOpen);

    useEffect(() => {
      if (contentRef.current) {
        contentRef.current.style.maxHeight = isOpen
          ? `${contentRef.current.scrollHeight}px`
          : '0px';
      }
    }, [isOpen]);

    useEffect(() => {
      if (onToggle) {
        onToggle(isOpen);
      }
    }, [isOpen, onToggle]);

    const [title, content] = children;
    return (
      <div className={classes}>
        <div
          className={'collapse__title'}
          onClick={() => setIsOpen(prev => !prev)}
        >
          {title}
        </div>
        <div className='collapse__content' ref={contentRef}>
          {content}
        </div>
      </div>
    );
  },
);

Collapse.displayName = 'Collapse';

const useProjectCardClasses = (
  className: CollapseProps['className'],
  isOpen: boolean,
) =>
  useMemo(() => {
    const classes = [
      className,
      'collapse',
      isOpen ? 'collapse--open' : 'collapse--closed',
    ];

    return classes.join(' ');
  }, [className, isOpen]);
