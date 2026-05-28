import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FormField } from '../components/FormField';
import { EmailOutput } from '../components/EmailOutput';
import { useEmailGenerator } from '../hooks/useEmailGenerator';
import type { GenerateEmailPayload } from '../services/api';

const tones = [
  'Formal',
  'Professional',
  'Friendly',
  'Persuasive',
  'Apology',
  'Follow-up',
];

const lengths = ['Short', 'Medium', 'Detailed'];

const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Portuguese',
  'Japanese',
  'Chinese',
];

const initialState: GenerateEmailPayload = {
  purpose: 'Request new partnership details from a vendor',
  recipient_type: 'Vendor representative',
  tone: 'Professional',
  length: 'Medium',
  key_points: 'Need timelines, pricing, and onboarding details',
  language: 'English',
};

function GeneratorPage() {
  const [form, setForm] = useState(initialState);

  const {
    email,
    loading,
    error,
    copied,
    generate,
    clear,
    copy,
    download,
  } = useEmailGenerator();

  const progressText = useMemo(() => {
    if (loading) return 'Writing your message...';
    if (email) return 'Your email is ready.';
    return 'Fill the form and generate.';
  }, [loading, email]);

  const handleChange = (
    key: keyof GenerateEmailPayload,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleGenerate = () => {
    generate(form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
          >
            <ArrowLeft className="h-5 w-5" />
            Back Home
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-full border border-slate-700/30 bg-slate-800/50 px-5 py-3 text-slate-300 shadow-lg backdrop-blur-sm"
          >
            Professional Email Generator
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">
                  Input
                </p>

                <h2 className="mt-3 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent">
                  Email Details
                </h2>
              </div>

              <div className="space-y-6">
                <FormField
                  label="Email purpose"
                  id="purpose"
                  required
                >
                  <textarea
                    id="purpose"
                    value={form.purpose}
                    onChange={(e) =>
                      handleChange('purpose', e.target.value)
                    }
                    className="min-h-[100px] w-full resize-none bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                    placeholder="Explain the purpose..."
                  />
                </FormField>

                <div className="grid gap-5 lg:grid-cols-2">
                  <FormField
                    label="Recipient type"
                    id="recipient_type"
                    required
                  >
                    <input
                      id="recipient_type"
                      value={form.recipient_type}
                      onChange={(e) =>
                        handleChange(
                          'recipient_type',
                          e.target.value
                        )
                      }
                      className="w-full bg-transparent text-sm text-slate-100 outline-none"
                      placeholder="Hiring Manager"
                    />
                  </FormField>

                  <FormField label="Tone" id="tone" required>
                    <select
                      id="tone"
                      value={form.tone}
                      onChange={(e) =>
                        handleChange('tone', e.target.value)
                      }
                      className="w-full bg-transparent text-sm text-slate-100 outline-none"
                    >
                      {tones.map((tone) => (
                        <option
                          key={tone}
                          value={tone}
                          className="bg-slate-900"
                        >
                          {tone}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <FormField label="Length" id="length">
                    <select
                      id="length"
                      value={form.length}
                      onChange={(e) =>
                        handleChange('length', e.target.value)
                      }
                      className="w-full bg-transparent text-sm text-slate-100 outline-none"
                    >
                      {lengths.map((length) => (
                        <option
                          key={length}
                          value={length}
                          className="bg-slate-900"
                        >
                          {length}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Language" id="language">
                    <select
                      id="language"
                      value={form.language}
                      onChange={(e) =>
                        handleChange('language', e.target.value)
                      }
                      className="w-full bg-transparent text-sm text-slate-100 outline-none"
                    >
                      {languages.map((language) => (
                        <option
                          key={language}
                          value={language}
                          className="bg-slate-900"
                        >
                          {language}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                <FormField
                  label="Key points"
                  id="key_points"
                  hint="Main topics to include"
                >
                  <textarea
                    id="key_points"
                    value={form.key_points}
                    onChange={(e) =>
                      handleChange(
                        'key_points',
                        e.target.value
                      )
                    }
                    className="min-h-[120px] w-full resize-none bg-transparent text-sm text-slate-100 outline-none"
                    placeholder="Mention important details..."
                  />
                </FormField>

                {error && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                    {error}
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="flex-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-50"
                  >
                    {loading
                      ? 'Generating...'
                      : 'Generate Email'}
                  </button>

                  <button
                    onClick={clear}
                    className="flex-1 rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-300 hover:bg-slate-800/50"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-purple-300/80">
                  Output
                </p>

                <h2 className="mt-2 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-3xl font-bold text-transparent">
                  Generated Email
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/30 bg-slate-800/50 px-4 py-2 text-xs text-slate-300">
                <Sparkles className="h-4 w-4 text-purple-400" />
                {progressText}
              </div>
            </div>

            <EmailOutput
              email={email}
              loading={loading}
              copied={copied}
              onCopy={copy}
              onDownload={download}
              onRegenerate={handleGenerate}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default GeneratorPage;