'use client';

import { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './transition-base.scss';

export type TransitionBaseProps = DefaultPropsWithChildren<{
  isVisible: boolean;
  duration?: number;
}>;

export const TransitionBase = memo<TransitionBaseProps>(props => {
  const { isVisible, duration = 0.3, children } = props;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          className='transition-base'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

TransitionBase.displayName = 'TransitionBase';
