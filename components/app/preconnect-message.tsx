'use client';

import { AnimatePresence, motion } from 'motion/react';
import { type ReceivedChatMessage } from '@livekit/components-react';
import { ShimmerText } from '@/components/livekit/shimmer-text';
import { cn } from '@/lib/utils';

const MotionMessage = motion.create('p');

// Inline motion props in the component to avoid strict typing issues with literal easing strings

interface PreConnectMessageProps {
  messages?: ReceivedChatMessage[];
  className?: string;
}

export function PreConnectMessage({ className, messages = [] }: PreConnectMessageProps) {
  return (
    <AnimatePresence>
      {messages.length === 0 && (
        <MotionMessage
          variants={{
            visible: {
              opacity: 1,
              transition: {
                ease: [0.4, 0, 0.2, 1],
                duration: 0.5,
                delay: 0.8,
              },
            },
            hidden: {
              opacity: 0,
              transition: {
                ease: [0.4, 0, 0.2, 1],
                duration: 0.5,
                delay: 0,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          aria-hidden={messages.length > 0}
          className={cn('pointer-events-none text-center', className)}
        >
          <ShimmerText className="text-sm font-semibold">
            Agent is listening, ask it a question
          </ShimmerText>
        </MotionMessage>
      )}
    </AnimatePresence>
  );
}
