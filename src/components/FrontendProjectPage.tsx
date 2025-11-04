import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  LinkIcon,
  ShoppingCartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import MagnetLines from './MagnetLines';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  technologies: string[];
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  steps: { title: string; detail: string }[];
  deliverables: string[];
  submissionInstructions: string[];
}

const FrontendProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();

  // Project data for Frontend Beginner projects
  const getProjectData = (id: string): ProjectData | null => {
    const projects: { [key: string]: ProjectData } = {
      'project-1': {
        id: 'project-1',
        title: 'Personal Portfolio Website',
        description:
          'Build a responsive personal portfolio showcasing your skills, projects, and contact information using semantic HTML and modern CSS.',
        requirements: [
          'Mobile-first responsive layout',
          'Semantic HTML5 structure',
          'Reusable CSS components (buttons, cards, grids)',
          'About, Projects, and Contact sections',
          'Basic accessibility (alt text, labels)'
        ],
        technologies: ['HTML5', 'CSS3', 'Flexbox/Grid'],
        estimatedTime: '3–5 days',
        difficulty: 'beginner',
        steps: [
          { title: 'Plan Content', detail: 'Sketch sections and decide project cards and images.' },
          { title: 'Structure HTML', detail: 'Use semantic tags: header, nav, main, section, footer.' },
          { title: 'Style Layout', detail: 'Apply CSS Grid/Flexbox. Define a color palette and typography.' },
          { title: 'Add Responsiveness', detail: 'Use media queries and fluid units to adapt to any screen.' },
          { title: 'Polish & Deploy', detail: 'Optimize images, validate HTML, and deploy to GitHub Pages or Netlify.' }
        ],
        deliverables: [
          'Deployed live URL and GitHub repo',
          'README with screenshots and features',
          'Accessible markup and responsive styles'
        ],
        submissionInstructions: [
          'Push the code to GitHub (public repository)',
          'Add a README with setup steps and screenshots',
          'Deploy to Netlify/Vercel/GitHub Pages and include the live link'
        ]
      },
      'project-2': {
        id: 'project-2',
        title: 'Interactive To‑Do Application',
        description:
          'Create a dynamic to‑do app with add, edit, delete, filter, and persist tasks in localStorage.',
        requirements: [
          'Add/Edit/Delete tasks',
          'Filter by status (All/Active/Completed)',
          'Persist tasks to localStorage',
          'Reusable UI components',
          'Keyboard accessibility'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript'],
        estimatedTime: '4–6 days',
        difficulty: 'beginner',
        steps: [
          { title: 'Design State', detail: 'Define task shape and localStorage schema.' },
          { title: 'Build UI', detail: 'Create list, form, and filter controls.' },
          { title: 'Wire Events', detail: 'Hook up add/edit/delete and filter handlers.' },
          { title: 'Persist Data', detail: 'Save and load tasks from localStorage.' },
          { title: 'Polish UX', detail: 'Add empty‑state, animations, and keyboard support.' }
        ],
        deliverables: [
          'Clean componentized JS & CSS',
          'Working filters and persistence',
          'Live demo and repo link'
        ],
        submissionInstructions: [
          'Push to GitHub with clear commit messages',
          'Add usage docs and screenshots to README',
          'Deploy and provide the live URL'
        ]
      },
      'project-3': {
        id: 'project-3',
        title: 'Weather Dashboard',
        description:
          'Build a weather dashboard using a public API. Show current conditions, 5‑day forecast, and search by city with graceful error handling.',
        requirements: [
          'City search with debounced input',
          'Current weather and 5‑day forecast',
          'Loading and error states',
          'Responsive cards and charts',
          'API key management'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
        estimatedTime: '5–7 days',
        difficulty: 'beginner',
        steps: [
          { title: 'Choose API', detail: 'Use OpenWeatherMap or WeatherAPI. Read docs first.' },
          { title: 'Set Up Fetch', detail: 'Create functions for current weather and forecast endpoints.' },
          { title: 'Design UI', detail: 'Cards for current and forecast; include icons and units.' },
          { title: 'Handle Errors', detail: 'Show friendly messages for network/API errors.' },
          { title: 'Deploy', detail: 'Hide API key with build‑time var or proxy; deploy.' }
        ],
        deliverables: [
          'Robust error handling and loaders',
          'Accessible UI and responsive layout',
          'Live demo and repository link'
        ],
        submissionInstructions: [
          'Commit code to GitHub with README',
          'Document API usage and limits',
          'Deploy and provide the live URL'
        ]
      },
      'project-4': {
        id: 'project-4',
        title: 'E‑commerce Product Catalog',
        description:
          'Build a feature‑complete product catalog with browsing, filtering, and cart preview. Focus on clean UI, state management, and accessibility.',
        requirements: [
          'Product list with grid and list views',
          'Filters: category, price range, rating, availability',
          'Sort: price, popularity, newest',
          'Product detail modal/page with images and specs',
          'Cart preview with add/remove and quantity management',
          'Persist cart in localStorage',
          'Responsive design and accessible interactions'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript'],
        estimatedTime: '7–10 days',
        difficulty: 'beginner',
        steps: [
          { title: 'Model Data', detail: 'Define product shape: id, title, price, rating, category, stock, images.' },
          { title: 'Render Catalog', detail: 'Build grid with cards; implement pagination or lazy load.' },
          { title: 'Filter & Sort', detail: 'Create filter state and derive a visibleProducts array. Add sort options.' },
          { title: 'Product Details', detail: 'Modal/page with gallery, specs, and CTA. Keyboard trap in modal.' },
          { title: 'Cart State', detail: 'Add to cart, remove, update qty, totals; save to localStorage.' },
          { title: 'Polish & QA', detail: 'Empty state, loading skeletons, accessible labels, focus outline, and ARIA.' }
        ],
        deliverables: [
          'Clean UI for product listing and detail',
          'Functional filters, sort, and cart interactions',
          'Persisted cart and responsive layout',
          'README with screenshots and feature list'
        ],
        submissionInstructions: [
          'Create a public GitHub repository',
          'Include a thorough README: setup, run, features, screenshots',
          'Deploy to Netlify/Vercel/GitHub Pages and include live URL'
        ]
      }
    };

    return projects[id] || null;
  };

  const projectData = projectId ? getProjectData(projectId) : null;

  if (!projectData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">The requested project could not be found.</p>
          <button
            onClick={() => navigate('/student-portal')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
          >
            Back to Student Portal
          </button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Magnet Lines Background */}
      <MagnetLines
        rows={12}
        columns={20}
        containerSize={{ width: '100vw', height: '100vh' }}
        lineColor="#38bdf8"
        lineWidth={1}
        lineHeight={40}
        baseAngle={0}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.3,
          pointerEvents: 'none'
        }}
      />

      {/* Header */}
      <div className="relative z-10 bg-gray-800/90 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/student-portal')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>Back to Student Portal</span>
            </button>
            <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getDifficultyColor(projectData.difficulty)}`}>
              {projectData.difficulty.charAt(0).toUpperCase() + projectData.difficulty.slice(1)}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Project Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-2">
              <ShoppingCartIcon className="h-8 w-8 text-blue-400" />
              {projectData.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">{projectData.description}</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span>⏱️ {projectData.estimatedTime}</span>
              <span>🛠️ {projectData.technologies.join(', ')}</span>
            </div>
          </div>

          {/* Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <h2 className="text-lg font-semibold">Core Requirements</h2>
              </div>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                {projectData.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <CodeBracketIcon className="h-5 w-5 text-cyan-400" />
                <h2 className="text-lg font-semibold">Project Steps</h2>
              </div>
              <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                {projectData.steps.map((step, idx) => (
                  <li key={idx}>
                    <span className="font-medium text-white">{step.title}:</span> {step.detail}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <DocumentTextIcon className="h-5 w-5 text-yellow-400" />
              <h2 className="text-lg font-semibold">Deliverables</h2>
            </div>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              {projectData.deliverables.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>

          {/* Submission Instructions */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <LinkIcon className="h-5 w-5 text-blue-400" />
              <h2 className="text-lg font-semibold">Submission Instructions</h2>
            </div>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              {projectData.submissionInstructions.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
            <div className="mt-4 text-gray-400 text-sm flex items-center gap-2">
              <SparklesIcon className="h-4 w-4 text-purple-400" />
              <span>Submit your link in the Student Portal project card.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FrontendProjectPage;