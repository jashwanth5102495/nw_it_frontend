import React, { useCallback, useRef, useState } from 'react';
import {
  Cursor,
  CursorContainer,
  CursorFollow,
  CursorProvider,
} from './animate-ui/primitives/animate/cursor';

type AcceptedFile = File & { preview?: string };

const allowedTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const maxSizeMB = 5;

const ResumeUpload: React.FC = () => {
  const [file, setFile] = useState<AcceptedFile | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (f: File) => {
    if (!allowedTypes.includes(f.type)) {
      return 'Please upload a PDF or Word document (.pdf, .doc, .docx).';
    }
    if (f.size > maxSizeMB * 1024 * 1024) {
      return `File must be under ${maxSizeMB}MB.`;
    }
    return null;
  };

  const onFiles = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;
    const f = files[0];
    const err = validateFile(f);
    if (err) {
      setError(err);
      setFile(null);
      return;
    }
    setError(null);
    setFile(f as AcceptedFile);
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    onFiles(e.dataTransfer.files);
  }, [onFiles]);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }, []);

  const handleSubmit = async () => {
    const name = nameRef.current?.value?.trim();
    const email = emailRef.current?.value?.trim();
    const role = roleRef.current?.value?.trim();

    if (!name || !email || !role) {
      setError('Please fill in your name, email, and desired role.');
      return;
    }
    if (!file) {
      setError('Please attach your resume file.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      await new Promise((res) => setTimeout(res, 1200));
      alert('Application submitted successfully!');
      if (fileInputRef.current) fileInputRef.current.value = '';
      setFile(null);
      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (roleRef.current) roleRef.current.value = '';
    } catch (e) {
      setError('Failed to submit. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <CursorProvider>
          <CursorContainer className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 md:p-16">
            {/* Cursor visuals */}
            <Cursor>
              <svg className="w-6 h-6 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                <path fill="currentColor" d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z" />
              </svg>
            </Cursor>
            <CursorFollow side="bottom" sideOffset={15} align="end" alignOffset={5}>
              <div className="bg-white text-black px-2 py-1 text-sm rounded-md shadow">
-                Designer
+                Intern
              </div>
            </CursorFollow>

            <div className="text-center mb-10">
              <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-4">
                <span className="text-sm text-blue-300">Internship Application</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Drop your resume to apply</h2>
              <p className="text-white/70 mt-2">PDF or Word, max 5MB. We’ll get back to you soon.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div
                  className={`relative rounded-xl border-2 ${dragActive ? 'border-blue-400/60' : 'border-white/10'} bg-white/5 text-white p-10 min-h-[280px] flex flex-col items-center justify-center transition-colors`}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                >
                  <svg className="w-12 h-12 text-blue-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7 16V8a5 5 0 0110 0v8m-6 4h2a4 4 0 004-4H7a4 4 0 004 4z" />
                  </svg>
                  <p className="text-white/90 font-medium">Drag & drop your resume here</p>
                  <p className="text-white/60 text-sm mt-1">or</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-3 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white"
                  >
                    Browse Files
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="hidden"
                    onChange={(e) => onFiles(e.target.files)}
                  />

                  {file && (
                    <div className="mt-6 w-full">
                      <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                        <div>
                          <p className="text-white font-medium">{file.name}</p>
                          <p className="text-white/60 text-xs">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                        <button
                          className="text-white/60 hover:text-white text-sm"
                          onClick={() => setFile(null)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
              </div>

              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-1">Full Name</label>
                    <input ref={nameRef} type="text" className="w-full rounded-lg bg-white/5 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-1">Email</label>
                    <input ref={emailRef} type="email" className="w-full rounded-lg bg-white/5 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-1">Desired Role</label>
                    <input ref={roleRef} type="text" className="w-full rounded-lg bg-white/5 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Frontend Intern" />
                  </div>
                  <button
                    disabled={submitting}
                    onClick={handleSubmit}
                    className="w-full mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors text-white font-semibold disabled:opacity-60"
                  >
                    {submitting ? 'Submitting…' : 'Apply for Internship'}
                  </button>
                  <p className="text-xs text-white/50 mt-2">By applying, you consent to us contacting you about opportunities.</p>
                </div>
              </div>
            </div>
          </CursorContainer>
        </CursorProvider>
      </div>
    </section>
  );
};

export default ResumeUpload;