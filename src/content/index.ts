import assignment1Foundations from './assignment1Foundations';

export const CONTENT_REGISTRY: Record<string, { title: string; topics: Array<{ topicId: string; title: string; content: string; syntax?: string; examples?: string[] }> }> = {
  [assignment1Foundations.id]: {
    title: assignment1Foundations.title,
    topics: assignment1Foundations.topics,
  },
};

export type ContentEntry = typeof CONTENT_REGISTRY[keyof typeof CONTENT_REGISTRY];