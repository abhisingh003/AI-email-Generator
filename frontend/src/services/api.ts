/// <reference types="vite/client" />

import axios from 'axios';

const API_URL =
  import.meta.env.VITE_API_URL ||
  'http://localhost:8000';

export interface GenerateEmailPayload {
  purpose: string;
  recipient_type: string;
  tone: string;
  length: string;
  key_points: string;
  language?: string;
}

export interface GenerateEmailResponse {
  email: string;
  tokens_used: number;
  status: string;
}

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateEmail = async (
  payload: GenerateEmailPayload
): Promise<string> => {
  try {
    const response =
      await client.post<GenerateEmailResponse>(
        '/generate-email',
        payload
      );

    return response.data.email;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.detail ||
          'Failed to generate email'
      );
    }
    throw error;
  }
};

export const getSupportedTones = async (): Promise<string[]> => {
  try {
    const response = await client.get('/supported-tones');
    return response.data.tones;
  } catch {
    return [];
  }
};

export const getSupportedLengths = async (): Promise<string[]> => {
  try {
    const response = await client.get('/supported-lengths');
    return response.data.lengths;
  } catch {
    return [];
  }
};

export const healthCheck = async (): Promise<boolean> => {
  try {
    const response = await client.get('/health');
    return response.data.status === 'healthy';
  } catch {
    return false;
  }
};

export default client;