export type StudyTopic = {
  topicId: string;
  title: string;
  content: string;
  syntax?: string;
  examples?: string[];
};

export type AssignmentContent = {
  id: string;
  title: string;
  topics: StudyTopic[];
};

export const assignment1Foundations: AssignmentContent = {
  id: 'frontend-intermediate-1',
  title: 'Assignment 1: Foundations of Modern Web Development',
  topics: [
    {
      topicId: 'es-modules',
      title: 'ES Modules',
      content:
        'Use ES Modules to clearly structure code with explicit imports/exports and live bindings. Prefer named exports for clearer APIs; default export only when a module has a single primary value. Keep side effects top‑level and avoid circular imports. Tree‑shaking works best with pure modules.',
      syntax:
        "// math.ts\nexport const add = (a: number, b: number) => a + b;\nexport const sub = (a: number, b: number) => a - b;\n\n// usage.ts\nimport { add } from './math.js';\nconsole.log(add(2, 3));",
      examples: [
        "// index.ts\nexport { Button } from './ui/Button.js';\nexport { Modal } from './ui/Modal.js';\n// consumer\nimport { Button, Modal } from './index.js';",
      ],
    },
    {
      topicId: 'async-await',
      title: 'Async/Await Basics',
      content:
        'Async/await makes asynchronous code read like synchronous code. Always wrap awaits in try/catch to handle errors. Run independent work in parallel with Promise.all, not sequential awaits. Prefer fetch with proper status checks.',
      syntax:
        "async function getUser(id) {\n  const res = await fetch(`/api/users/${id}`);\n  if (!res.ok) throw new Error('Failed');\n  return res.json();\n}\n\nasync function load() {\n  try {\n    const [user, posts] = await Promise.all([\n      getUser('42'),\n      fetch('/api/posts').then(r => r.json())\n    ]);\n    console.log(user, posts);\n  } catch (e) {\n    console.error(e);\n  }\n}",
      examples: [
        "const safeJson = async (res) => res.ok ? res.json() : Promise.reject(new Error(res.statusText));",
      ],
    },
    {
      topicId: 'error-handling',
      title: 'Error Handling Patterns',
      content:
        'Centralize error handling and use Result-like patterns for predictable flows. Never swallow errors; surface actionable messages to users. Add retry with backoff for flaky networks and ensure finally blocks release resources.',
      syntax:
        "type Result<T> = { ok: true; value: T } | { ok: false; error: Error };\n\nasync function wrap<T>(p: Promise<T>): Promise<Result<T>> {\n  try { return { ok: true, value: await p }; }\n  catch (e) { return { ok: false, error: e as Error }; }\n}",
      examples: [
        "async function getData() {\n  const r = await wrap(fetch('/api/data').then(r => r.json()));\n  if (!r.ok) return alert(r.error.message);\n  render(r.value);\n}",
      ],
    },
    {
      topicId: 'typescript-types',
      title: 'TypeScript: Types & Interfaces',
      content:
        'Use types for unions and utility transforms; interfaces for object contracts. Keep types local to modules; export only stable contracts. Prefer readonly where appropriate and narrow unknown safely.',
      syntax:
        "type Id = string;\ninterface User { id: Id; name: string; readonly email?: string }\n\nfunction greet(user: User) {\n  return `Hello ${user.name}`;\n}",
      examples: [
        "type ApiResponse<T> = { success: true; data: T } | { success: false; message: string };",
      ],
    },
    {
      topicId: 'react-hooks',
      title: 'React Hooks Essentials',
      content:
        'Understand state vs refs, effects vs events. Memoize expensive computations and stabilize object identities to avoid re-renders. Keep effects minimal; derive state when possible.',
      syntax:
        "import { useEffect, useMemo, useRef, useState } from 'react';\n\nfunction List({ items }) {\n  const [filter, setFilter] = useState('');\n  const filtered = useMemo(() => items.filter(i => i.includes(filter)), [items, filter]);\n  const mounted = useRef(false);\n  useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);\n  return <ul>{filtered.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
      examples: [
        "// Optimize callback\nconst onSelect = useCallback((id) => { /* ... */ }, []);",
      ],
    },
  ],
};

export default assignment1Foundations;