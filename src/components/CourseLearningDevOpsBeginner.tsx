import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sun, Moon, Book } from 'lucide-react';

const CourseLearningDevOpsBeginner: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('devops-fundamentals');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('intro-devops');

  const modules = [
    {
      id: 'devops-fundamentals',
      title: 'Introduction to DevOps',
      description: 'Culture, collaboration, and automation basics',
      progress: 0,
      icon: '📘',
      lessons: [
        {
          id: 'intro-devops',
          title: 'What is DevOps?',
          duration: '45 min',
          difficulty: 'beginner',
          completed: false,
          content: `
            <h2>What is DevOps?</h2>
            <p>DevOps is a culture and set of practices that brings development and operations together to deliver reliable software faster, focusing on collaboration, automation, and continuous delivery.</p>
            <h3>Key Ideas</h3>
            <ul>
              <li>Collaboration across Dev, QA, and Ops</li>
              <li>Automation of build, test, and deploy</li>
              <li>Continuous Integration and Continuous Delivery (CI/CD)</li>
            </ul>
          `,
        },
        {
          id: 'traditional-vs-devops',
          title: 'Traditional vs DevOps',
          duration: '45 min',
          difficulty: 'beginner',
          completed: false,
          content: `
            <h2>Traditional vs DevOps</h2>
            <p>Traditional development relies on siloed teams and manual steps, while DevOps embraces automation, shared ownership, and rapid feedback.</p>
            <table>
              <tbody>
                <tr><td>Deployment</td><td>Manual, infrequent</td><td>Automated, frequent</td></tr>
                <tr><td>Collaboration</td><td>Separated roles</td><td>Cross-functional teams</td></tr>
                <tr><td>Feedback</td><td>Delayed</td><td>Continuous</td></tr>
              </tbody>
            </table>
          `,
        },
      ],
    },
  ];

  const selectedModule = modules.find(m => m.id === selectedModuleId) || modules[0];
  const selectedLesson = selectedModule.lessons.find(l => l.id === selectedLessonId) || selectedModule.lessons[0];

  const navigateToLesson = (moduleId: string, lessonId: string) => {
    setSelectedModuleId(moduleId);
    setSelectedLessonId(lessonId);
  };

  const goToPreviousLesson = () => {
    const moduleIndex = modules.findIndex(m => m.id === selectedModuleId);
    if (moduleIndex < 0) return;
    const lessons = modules[moduleIndex].lessons;
    const lessonIndex = lessons.findIndex(l => l.id === selectedLessonId);
    if (lessonIndex > 0) {
      setSelectedLessonId(lessons[lessonIndex - 1].id);
    }
  };

  const goToNextModule = () => {
    const moduleIndex = modules.findIndex(m => m.id === selectedModuleId);
    if (moduleIndex >= 0 && moduleIndex < modules.length - 1) {
      const nextModule = modules[moduleIndex + 1];
      setSelectedModuleId(nextModule.id);
      setSelectedLessonId(nextModule.lessons[0].id);
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 border-b ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button onClick={() => window.history.back()} className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}>
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Courses</span>
            </button>
            <div className="h-6 w-px bg-gray-600" />
            <h1 className="text-xl font-bold">DevOps Beginner</h1>
          </div>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="pt-20 flex h-screen">
        {/* Sidebar */}
        <div className={`w-80 border-r ${theme === 'dark' ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'}`}>
          <div className="p-6 border-b border-gray-700/50">
            <h2 className="text-lg font-bold mb-2">Module</h2>
            <div className="text-sm">{selectedModule.title}</div>
          </div>
          <div className="p-4 space-y-2">
            {selectedModule.lessons.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => navigateToLesson(selectedModule.id, lesson.id)}
                className={`w-full text-left p-3 rounded-lg border ${selectedLessonId === lesson.id ? (theme === 'dark' ? 'bg-blue-900/50 border-blue-500/50' : 'bg-blue-50 border-blue-200') : (theme === 'dark' ? 'bg-gray-800/20 border-gray-700/30 hover:bg-gray-800/40' : 'bg-gray-50/20 border-gray-200/30 hover:bg-gray-100/40')}`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${selectedLessonId === lesson.id ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : (theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600')}`}>{idx + 1}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{lesson.title}</span>
                      <span className={`px-2 py-1 rounded-full text-xs border ${theme === 'dark' ? 'text-green-400 bg-green-900/20 border-green-500/30' : 'text-green-600 bg-green-50 border-green-200'}`}>{lesson.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>{lesson.duration}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <div className={`border-b ${theme === 'dark' ? 'border-gray-800 bg-gray-900/95' : 'border-gray-200 bg-white/95'}`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold">{selectedLesson.title}</h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className={`flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{selectedLesson.duration}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${theme === 'dark' ? 'text-green-400 bg-green-900/20 border-green-500/30' : 'text-green-600 bg-green-50 border-green-200'}`}>{selectedLesson.difficulty}</span>
                  </div>
                </div>
                <div className={`px-3 py-2 rounded-lg text-sm ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                  <Book className="w-4 h-4 inline mr-2" /> Theory
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className={`prose prose-lg max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`} dangerouslySetInnerHTML={{ __html: selectedLesson.content }} />
          </div>

          <div className={`border-t ${theme === 'dark' ? 'border-gray-800 bg-gray-900/95' : 'border-gray-200 bg-white/95'}`}>
            <div className="flex items-center justify-between px-6 py-4">
              <button onClick={goToPreviousLesson} className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Lesson</span>
              </button>
              <button onClick={goToNextModule} className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
                <span>Next Module</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearningDevOpsBeginner;