import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

export default function IntroductionPage() {
  const navigate = useNavigate();

  const modules = [
    {
      slug: 'module-1',
      title: 'Module 1 — Advanced HTML, CSS & Responsive Design',
      desc:
        'Create fully responsive layouts using HTML5, CSS3, and Tailwind CSS. Master structure, layout, and modern design patterns with clean, scalable UI.',
      bgImage: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
    },
    {
      slug: 'module-2',
      title: 'Module 2 — JavaScript & React.js Essentials',
      desc:
        'Build dynamic frontend logic using JavaScript (ES6+) and React components. Work with state, user input, and interactive UI patterns.',
      bgImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      slug: 'module-3',
      title: 'Module 3 — Backend Integration with Django & MongoDB',
      desc:
        'Connect your frontend to real backends. Design and consume REST APIs, handle tokens, and work with live data using Django and MongoDB.',
      bgImage: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg'
    },
    {
      slug: 'module-4',
      title: 'Module 4 — Full-Stack Application & Deployment',
      desc:
        'Combine everything into a working full‑stack app. Implement authentication, environment configuration, and deploy your application securely.',
      bgImage: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg'
    }
  ];

  const SafeImage = ({ srcs = [], alt = '', className = '' }) => {
    const [idx, setIdx] = useState(0);
    const current = srcs[idx] || 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';
    return (
      <img
        src={current}
        alt={alt}
        className={className}
        onError={() => setIdx((i) => i + 1)}
        loading="lazy"
      />
    );
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-16">
        {/* Top bar: Back + Theme toggle */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/student-portal')} className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">
            Back to Portal
          </button>

        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Frontend Development – Intermediate
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              Build modern, responsive UIs and connect them to real backends.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm text-gray-800">Intermediate level</span>
              <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm text-gray-800">4 modules</span>
              <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-sm text-gray-800">Hands-on projects</span>
            </div>
            <div className="mt-8 flex gap-4"> 
              <button
                onClick={() => navigate('/frontend-development-intermediate/module/module-1')}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition"
              >
                Start Learning
              </button>
              <button
                onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 transition"
              >
                View Syllabus
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="Frontend development introduction"
              className="w-full rounded-xl border border-gray-200 shadow-sm"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <h2 className="text-2xl font-semibold">What you'll learn</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-4 text-gray-700">
            <li className="p-4 rounded-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm">Craft responsive layouts using HTML5, CSS3, and Tailwind CSS.</li>
            <li className="p-4 rounded-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm">Build interactive UIs with modern JavaScript and React components.</li>
            <li className="p-4 rounded-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm">Integrate backends using Django, REST APIs, and MongoDB.</li>
            <li className="p-4 rounded-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm">Deliver end-to-end features and deploy production-ready applications.</li>
          </ul>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="max-w-6xl mx-auto px-6 md:px-10 py-14">
        <h2 className="text-2xl font-semibold">Course syllabus</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {modules.map((m) => (
            <button
              key={m.title}
              onClick={() => navigate(`/frontend-development-intermediate/module/${m.slug}`)}
              className="text-left rounded-xl bg-white border border-gray-200 shadow-sm p-6 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Open ${m.title}`}
            >
              <div className="flex items-start gap-4">
                <img src={m.bgImage} alt="" className="w-24 h-24 rounded-lg border border-gray-200 object-contain bg-white" />
                <div>
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="mt-2 text-gray-700">{m.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section className="bg-gray-50 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold">Meet your instructor</h2>
              <p className="mt-3 text-gray-700">Learn from a practitioner who builds and ships real products, with a focus on clarity, best practices, and hands-on learning.</p>
            </div>
            <div className="md:col-span-1">
              <SafeImage
                srcs={[
                  'https://upload.wikimedia.org/wikipedia/commons/3/3c/Teacher.svg',
                  'https://upload.wikimedia.org/wikipedia/commons/a/a4/Graduation_cap_icon.svg'
                ]}
                alt="Instructor"
                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 p-4"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}