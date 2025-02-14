'use client';

import { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export type TransitionExpandProps = DefaultPropsWithChildren<{
  duration?: number;
  isVisible: boolean;
}>;

export const TransitionExpand = memo<TransitionExpandProps>(props => {
  const { children, duration = 0.3, isVisible } = props;

  return (
    <AnimatePresence initial={isVisible}>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          style={{ overflow: 'hidden' }}
          transition={{ duration }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

TransitionExpand.displayName = 'TransitionExpand';
