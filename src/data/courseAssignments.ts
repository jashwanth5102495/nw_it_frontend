// Minimal shared assignment definitions per course for AdminPanel summaries.
// Expand as needed to cover all courses.

export interface AssignmentDef {
  id: string;
  title: string;
}

export function getAssignmentDefinitions(courseKey: string): AssignmentDef[] {
  switch (courseKey) {
    case 'frontend-beginner':
      return [
        { id: 'html-part-1', title: 'HTML Part 1' },
        { id: 'html-part-2', title: 'HTML Part 2' },
        { id: 'css-part-1', title: 'CSS Part 1' },
        { id: 'css-part-2', title: 'CSS Part 2' },
        { id: 'javascript-part-1', title: 'JavaScript Part 1' },
        { id: 'javascript-part-2', title: 'JavaScript Part 2' }
      ];
    case 'ai-tools-mastery':
      return [
        { id: 'ai-fundamentals', title: 'AI Fundamentals' },
        { id: 'language-models', title: 'ChatGPT & Language Models' },
        { id: 'ai-images', title: 'AI Image Tools' },
        { id: 'ai-video', title: 'AI Video Tools' },
        { id: 'ai-automation', title: 'AI Automation & Workflows' },
        { id: 'ai-capstone', title: 'AI Capstone Project' }
      ];
    default:
      return [];
  }
}

// Helper to normalize possible course identifiers to known keys
export function normalizeCourseKey(input: any): string | null {
  if (!input) return null;
  const str = typeof input === 'string' ? input : (input.courseId || input._id || input.id || '').toString();
  if (!str) return null;
  const s = str.toLowerCase();
  if (s.includes('frontend') && s.includes('beginner')) return 'frontend-beginner';
  if (s.includes('ai') && s.includes('tools')) return 'ai-tools-mastery';
  // Allow exact keys
  if (s === 'frontend-beginner' || s === 'ai-tools-mastery') return s;
  return null;
}