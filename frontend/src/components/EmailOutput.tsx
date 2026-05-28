import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, RotateCcw } from 'lucide-react';

interface EmailOutputProps {
  email: string;
  loading: boolean;
  copied: boolean;
  onCopy: () => void;
  onDownload: () => void;
  onRegenerate: () => void;
}

export const EmailOutput: React.FC<EmailOutputProps> = ({
  email,
  loading,
  copied,
  onCopy,
  onDownload,
  onRegenerate,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-700/30">
        <h3 className="text-lg font-semibold text-slate-100">Generated Email</h3>
        {email && !loading && (
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
            Ready to use
          </span>
        )}
      </div>

      {/* Email Content */}
      <div className="flex-1 overflow-y-auto mb-4">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center h-48"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="inline-block mb-3"
              >
                <div className="w-8 h-8 border-3 border-slate-600 border-t-blue-500 rounded-full" />
              </motion.div>
              <p className="text-sm text-slate-400">Crafting your email...</p>
            </div>
          </motion.div>
        ) : email ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert max-w-none"
          >
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-300 bg-slate-800/30 p-4 rounded-lg border border-slate-700/20">
              {email}
            </div>
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-48 text-slate-500">
            <p className="text-center">
              Your generated email will appear here.
              <br />
              <span className="text-xs">Fill in the form and click Generate to get started.</span>
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {email && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex gap-2 pt-4 border-t border-slate-700/30"
        >
          <button
            onClick={onCopy}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
              copied
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400'
            }`}
          >
            <Copy size={16} />
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={onDownload}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 rounded-lg font-medium transition-all duration-200"
          >
            <Download size={16} />
            Download
          </button>
          <button
            onClick={onRegenerate}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 rounded-lg font-medium transition-all duration-200"
          >
            <RotateCcw size={16} />
            Regenerate
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};
