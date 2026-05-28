import { motion } from 'framer-motion';

interface LoadingDotsProps {
  label?: string;
}

const dotVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export function LoadingDots({ label = 'Generating' }: LoadingDotsProps) {
  return (
    <div className="inline-flex items-center gap-2 text-slate-300">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-1.5 ml-1">
        {[0, 0.2, 0.4].map((delay) => (
          <motion.span
            key={delay}
            variants={dotVariants}
            animate="animate"
            transition={{ delay }}
            className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
          />
        ))}
      </div>
    </div>
  );
}
