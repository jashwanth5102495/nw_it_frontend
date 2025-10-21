import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { useEffect, useState, type ReactNode } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import ClickSpark from './components/ClickSpark';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TradingSection from './components/TradingSection';
import TechnologiesCarousel from './components/TechnologiesCarousel';
import IntroductionPage from './pages/IntroductionPage.jsx';
import ModuleComingSoon from './pages/ModuleComingSoon.jsx';

import Footer from './components/Footer';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import Courses from './components/Courses';
import StudentRegistration from './components/StudentRegistration';
import StudentLogin from './components/StudentLogin';
import StudentPortal from './components/StudentPortal';
import CreatorPortal from './components/CreatorPortal';
import SecureAdminPanel from './components/SecureAdminPanel';
import ProjectTracking from './components/ProjectTracking';
import CourseLearning from './components/CourseLearning';
import CourseLearningDevOpsBeginner from './components/CourseLearningDevOpsBeginner';
import CourseLearningDevOpsAdvanced from './components/CourseLearningDevOpsAdvanced';
import CourseEnrollment from './components/CourseEnrollment';
import AssignmentPage from './components/AssignmentPage';
import AIStudyMaterial from './components/AIStudyMaterial';
import AIToolsProjectPage from './components/AIToolsProjectPage';
import DevOpsProjectPage from './components/DevOpsProjectPage';
import htmlpart1 from '../video-explanations/topics/html/htmlpart1.mp4';
import htmlpart2 from '../video-explanations/topics/html/htmlpart2.mp4';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

// Helper to create URL-safe slugs from names/usernames
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Protect by login only
function ProtectedLoginRoute({ children }: { children: ReactNode }) {
  const currentUserRaw = localStorage.getItem('currentUser');
  if (!currentUserRaw) return <Navigate to="/student-login" replace />;
  const currentUser = JSON.parse(currentUserRaw);
  if (!currentUser?.isAuthenticated || !currentUser?.token) return <Navigate to="/student-login" replace />;
  return children;
}

// Gate that verifies purchase/access for a specific course via backend
function ProtectedCourseGate({ courseId, children }: { courseId: string; children: ReactNode }) {
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const currentUserRaw = localStorage.getItem('currentUser');
    if (!currentUserRaw) {
      setAllowed(false);
      return;
    }
    const currentUser = JSON.parse(currentUserRaw);
    if (!currentUser?.isAuthenticated || !currentUser?.token) {
      setAllowed(false);
      return;
    }
    const checkAccess = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/courses/access/${courseId}`, {
          headers: { Authorization: `Bearer ${currentUser.token}` }
        });
        const data = await res.json();
        if (res.ok && data?.success) {
          setAllowed(Boolean(data.allowed));
        } else {
          setAllowed(false);
          setError(data?.message || 'Access denied');
        }
      } catch (e: any) {
        setAllowed(false);
        setError(e?.message || 'Network error');
      }
    };
    checkAccess();
  }, [courseId]);

  if (allowed === null) {
    return (<>
      <Header />
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Checking course access...</p>
      </div>
    </>);
  }
  if (!allowed) {
    return (<>
      <Header />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold">Access denied</h2>
        <p className="text-gray-300">{error || 'You must purchase this course to view the study material.'}</p>
        <a href={`/course-enrollment/${courseId}`} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700">Purchase Course</a>
      </div>
    </>);
  }
  return children;
}

// Wrapper components for routes
function CourseLearningProtected() {
  const params = useParams();
  const cid = params.courseId as string;
  if (!cid) return <Navigate to="/courses" replace />;
  return (
    <ProtectedCourseGate courseId={cid}>
      <CourseLearning />
    </ProtectedCourseGate>
  );
}

// Protect by both login and matching student slug, then verify course purchase
function ProtectedStudentCourseGate({ requiredCourseId, children }: { requiredCourseId: string; children: ReactNode }) {
  const { studentSlug } = useParams();
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const currentUserRaw = localStorage.getItem('currentUser');
    if (!currentUserRaw) {
      setAllowed(false);
      setError('Please login to access this content.');
      return;
    }
    const currentUser = JSON.parse(currentUserRaw);
    if (!currentUser?.isAuthenticated || !currentUser?.token) {
      setAllowed(false);
      setError('Please login to access this content.');
      return;
    }

    const expectedSlug = slugify(currentUser.username || `${currentUser.firstName || ''} ${currentUser.lastName || ''}`);
    if (!studentSlug || slugify(studentSlug) !== expectedSlug) {
      setAllowed(false);
      setError('This URL does not match your account.');
      return;
    }

    const checkAccess = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/courses/access/${requiredCourseId}`, {
          headers: { Authorization: `Bearer ${currentUser.token}` }
        });
        const data = await res.json();
        if (res.ok && data?.success) {
          setAllowed(Boolean(data.allowed));
        } else {
          setAllowed(false);
          setError(data?.message || 'Access denied');
        }
      } catch (e: any) {
        setAllowed(false);
        setError(e?.message || 'Network error');
      }
    };

    checkAccess();
  }, [studentSlug, requiredCourseId]);

  if (allowed === null) {
    return (<>
      <Header />
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Checking your access...</p>
      </div>
    </>);
  }
  if (!allowed) {
    return (<>
      <Header />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold">Access denied</h2>
        <p className="text-gray-300">{error || 'You must purchase this course to view the content.'}</p>
        <a href={`/course-enrollment/frontend-beginner`} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700">Purchase Course</a>
      </div>
    </>);
  }
  return children;
}

function AIStudyMaterialProtected() {
  // Primary course id for AI study material
  const requiredCourseId = 'AI-TOOLS-MASTERY';
  return (
    <ProtectedCourseGate courseId={requiredCourseId}>
      <AIStudyMaterial />
    </ProtectedCourseGate>
  );
}

// Unique per-student URL for Frontend Beginner: plays Introduction to HTML videos
function IntroHtmlProtected() {
  const content = (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Introduction to HTML</h1>
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold mb-3">Part 1</h2>
              <video className="w-full max-w-3xl rounded-lg border border-gray-700" controls src={htmlpart1}></video>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Part 2</h2>
              <video className="w-full max-w-3xl rounded-lg border border-gray-700" controls src={htmlpart2}></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <ProtectedStudentCourseGate requiredCourseId="frontend-beginner">
      {content}
    </ProtectedStudentCourseGate>
  );
}

function AppInner() {
  const location = useLocation();
  return (
      <ClickSpark 
        sparkColor="#60a5fa" 
        sparkCount={8} 
        sparkRadius={80} 
        duration={800}
        className="min-h-screen bg-black text-white font-sans relative"
      >
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <section id="home">
                <Hero />
              </section>
              <section id="services">
                <ServicesSection />
              </section>
              <section id="career">
                <TradingSection />
              </section>

              <section id="contact">
                <TechnologiesCarousel />
              </section>
              <Footer />
            </>
          } />
          <Route path="/about" element={<><Header /><About /></>} />
          <Route path="/career" element={<><Header /><Career /></>} />
          <Route path="/contact" element={<><Header /><Contact /></>} />

          <Route path="/courses" element={<><Header /><Courses /></>} />
          <Route path="/frontend-development-intermediate" element={<><Header hideDock={true} /><IntroductionPage /></>} />
          <Route path="/frontend-development-intermediate/module/:slug" element={<><Header hideDock={true} /><ModuleComingSoon /></>} />
          <Route path="/course-enrollment/:courseId" element={<CourseEnrollment />} />
          <Route path="/student-registration" element={<StudentRegistration />} />
          <Route path="/student-login" element={<><Header /><StudentLogin /></>} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/creator-portal" element={<><Header /><CreatorPortal /></>} />
          <Route path="/AJRV8328" element={<SecureAdminPanel />} />
          <Route path="/project-tracking" element={<><Header /><ProjectTracking /></>} />
          <Route path="/course-learning/:courseId/:moduleId/:lessonId" element={<CourseLearningProtected />} />
          <Route path="/course-learning" element={<ProtectedLoginRoute><CourseLearning /></ProtectedLoginRoute>} />
          <Route path="/course-learning-devops-beginner/:courseId/:moduleId/:lessonId" element={<CourseLearningDevOpsBeginner />} />
          <Route path="/course-learning-devops-beginner/*" element={<CourseLearningDevOpsBeginner />} />
          <Route path="/course-learning-devops-advanced/:courseId/:moduleId/:lessonId" element={<CourseLearningDevOpsAdvanced />} />
          <Route path="/course-learning-devops-advanced/*" element={<CourseLearningDevOpsAdvanced />} />
          <Route path="/ai-study-material" element={<AIStudyMaterialProtected />} />
          {/* Unique, protected per-student URL for Frontend Beginner HTML intro */}
          <Route path="/learn/:studentSlug/frontend-development-beginner" element={<IntroHtmlProtected />} />
          <Route path="/assignment/:assignmentId" element={<AssignmentPage />} />
          <Route path="/ai-tools-project/:projectId" element={<AIToolsProjectPage />} />
          <Route path="/devops-project/:projectId" element={<DevOpsProjectPage />} />
          {/* Plasma/Dither demo routes removed */}

        </Routes>
      </ClickSpark>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppInner />
      </Router>
    </ThemeProvider>
  );
}

export default App;