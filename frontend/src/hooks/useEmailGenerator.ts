import { useMemo, useState } from 'react';
import { generateEmail, GenerateEmailPayload } from '../services/api';

export const useEmailGenerator = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = async (payload: GenerateEmailPayload) => {
    setError('');
    setLoading(true);
    setEmail('');
    try {
      const result = await generateEmail(payload);
      setEmail(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unable to generate email. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setEmail('');
    setError('');
    setCopied(false);
  };

  const copy = async () => {
    if (!email) return;
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const download = () => {
    if (!email) return;
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(email)}`);
    element.setAttribute('download', 'email.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const preview = useMemo(() => {
    if (!email) return [];
    return email.split('\n').filter(Boolean);
  }, [email]);

  return {
    email,
    preview,
    loading,
    error,
    copied,
    generate,
    clear,
    copy,
    download,
  };
};
