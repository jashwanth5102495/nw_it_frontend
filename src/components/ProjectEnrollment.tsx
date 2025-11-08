import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from './Header';

const QR_PATH = '/img/qr.png'; // expected in public/img/qr.png

const ProjectEnrollment: React.FC = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const projectSlug = params.get('project') || '';
  const category = params.get('cat') || '';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [institution, setInstitution] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [qrError, setQrError] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const fee = useMemo(() => 450, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Persist minimal info locally for demo purposes
    const payload = {
      projectSlug,
      category,
      fullName,
      email,
      education,
      institution,
      graduationYear,
      resumeFileName: resumeFile?.name || null,
      createdAt: new Date().toISOString()
    };
    try {
      const key = `enrollment:${projectSlug}`;
      localStorage.setItem(key, JSON.stringify(payload));
    } catch {}
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold mb-2">Project Enrollment</h1>
              <p className="text-white/70 mb-6 text-sm">You are enrolling for: <span className="text-white">{projectSlug || 'Selected Project'}</span> {category ? `(Category: ${category})` : ''}</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Full Name</label>
                    <input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" value={fullName} onChange={(e)=>setFullName(e.target.value)} placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Email</label>
                    <input type="email" className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Education Details</label>
                    <input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" value={education} onChange={(e)=>setEducation(e.target.value)} placeholder="e.g., B.Tech in CSE, M.Sc AI" required />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Institution</label>
                    <input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" value={institution} onChange={(e)=>setInstitution(e.target.value)} placeholder="College / University" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Graduation Year</label>
                    <input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" value={graduationYear} onChange={(e)=>setGraduationYear(e.target.value)} placeholder="e.g., 2025" />
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Upload Resume (optional)</label>
                    <input type="file" className="mt-1 w-full text-sm" onChange={(e)=>setResumeFile(e.target.files?.[0] || null)} />
                    <p className="text-white/50 text-xs mt-1">You can upload later if not ready.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Submit Application</button>
                  <button type="button" onClick={()=>navigate('/projects')} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20">Back to Projects</button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">Enrollment Submitted</h2>
              <p className="text-white/70 mb-4">Please complete the enrollment fee to finalize your registration.</p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/70">Amount</p>
                    <p className="text-2xl font-bold">₹ {fee}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Method</p>
                    <p className="text-white">Scan QR to Pay</p>
                  </div>
                </div>
                <div className="mt-4">
                  {!qrError ? (
                    <img src={QR_PATH} alt="QR Code" className="w-64 h-64 object-contain rounded-lg border border-white/10" onError={()=>setQrError(true)} />
                  ) : (
                    <div className="w-64 h-64 flex items-center justify-center rounded-lg border border-dashed border-white/20 text-white/50">
                      QR image not found at {QR_PATH}. Place your QR at public/img/qr.png.
                    </div>
                  )}
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70">Transaction ID</label>
                    <input
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter payment transaction/reference ID"
                      value={transactionId}
                      onChange={(e)=>setTransactionId(e.target.value)}
                    />
                    {paymentError && (
                      <p className="text-red-400 text-xs mt-1">{paymentError}</p>
                    )}
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        const tid = transactionId.trim();
                        if (!tid) { setPaymentError('Please enter a valid Transaction ID'); return; }
                        setPaymentError('');
                        try {
                          const key = `enrollment:${projectSlug}`;
                          const existing = localStorage.getItem(key);
                          const base = existing ? JSON.parse(existing) : {};
                          localStorage.setItem(key, JSON.stringify({ ...base, transactionId: tid, paymentStatus: 'submitted' }));
                        } catch {}
                        setShowPopup(true);
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                    >Complete Enrollment</button>
                  </div>
                </div>
                <div className="mt-4 text-white/70 text-sm space-y-2">
                  <p>After payment, you will receive all necessary documentation and hints on how the project needs to be done.</p>
                  <p>Please share your payment reference via the portal or support if asked.</p>
                </div>
                <div className="mt-6 grid lg:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-base font-semibold mb-2">Next Steps</h3>
                    <ul className="text-white/80 text-sm space-y-2">
                      <li>Watch for a confirmation email with documents</li>
                      <li>Join the support thread if invited</li>
                      <li>Start implementing per provided guidelines</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-base font-semibold mb-2">Recent Updates</h3>
                    <ul className="text-white/80 text-sm space-y-2">
                      <li className="flex justify-between"><span>Payment submitted</span><span>Just now</span></li>
                      <li className="flex justify-between"><span>Application received</span><span>Today</span></li>
                      <li className="flex justify-between"><span>Awaiting review</span><span>Pending</span></li>
                    </ul>
                  </div>
                </div>
                {/* Popup */}
                {showPopup && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-white/10 border border-white/20 rounded-xl p-6 max-w-md w-full mx-4">
                      <h3 className="text-lg font-semibold mb-2">Enrollment Completed</h3>
                      <p className="text-white/80 text-sm mb-4">All related documents will be shared via mail. Please keep your Transaction ID for future reference.</p>
                      <div className="flex justify-end gap-2">
                        <button onClick={()=>setShowPopup(false)} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20">Close</button>
                        <button onClick={()=>{ setShowPopup(false); navigate('/projects'); }} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Back to Projects</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectEnrollment;