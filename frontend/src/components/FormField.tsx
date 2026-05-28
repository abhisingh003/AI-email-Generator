import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FormFieldProps {
  label: string;
  id: string;
  children: ReactNode;
  hint?: string;
  required?: boolean;
}

export function FormField({ label, id, children, hint, required = false }: FormFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <label htmlFor={id} className="block">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-sm font-medium text-slate-200">
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </span>
          {hint && <span className="text-xs text-slate-500">{hint}</span>}
        </div>
      </label>
      <div className="relative">
        <div className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm p-3 hover:border-slate-600/50 transition-all duration-200 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
