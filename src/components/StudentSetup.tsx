import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const StudentSetup: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    phone: '',
    address: '',
    education: '',
    dateOfBirth: ''
  });
  const [error, setError] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('currentUser');
    if (!stored) {
      navigate('/student-login');
      return;
    }
    try {
      const user = JSON.parse(stored);
      // Pre-fill if existing
      setForm(f => ({
        ...f,
        phone: user?.phone || '',
        address: user?.address || '',
        education: user?.education || '',
        dateOfBirth: user?.dateOfBirth || ''
      }));
    } catch {}
  }, [navigate]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError('');

    const stored = localStorage.getItem('currentUser');
    const token = localStorage.getItem('authToken');
    if (!stored || !token) {
      setError('Not authenticated. Please login again.');
      setIsSaving(false);
      return;
    }

    let user: any;
    try { user = JSON.parse(stored); } catch {}
    const id = user?._id || user?.id;
    if (!id) {
      setError('Missing student id.');
      setIsSaving(false);
      return;
    }

    try {
      const resp = await fetch(`${BASE_URL}/api/students/profile/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });
      const data = await resp.json().catch(async () => ({ raw: await resp.text() }));
      if (!resp.ok || !data?.success) {
        const msg = data?.message || data?.error || 'Could not save setup details.';
        setError(msg);
        setIsSaving(false);
        return;
      }

      const { student, setupRequired } = data.data;
      const updatedUser = { ...user, ...student };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));

      if (setupRequired) {
        // Should not happen if backend marks completion, but keep guard.
        navigate('/student-setup');
      } else {
        navigate('/student-portal');
      }
    } catch (err) {
      console.error('Setup save error:', err);
      setError('Unable to save. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        <div className="bg-white text-gray-900 max-w-xl mx-auto p-6 rounded-md">
          <h1 className="text-xl font-semibold">Complete your account setup</h1>
          <p className="text-sm text-gray-500 mt-1">Provide the details below to finish setting up your account.</p>

          <form onSubmit={onSubmit} className="mt-4 space-y-3">
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Phone"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md"
            />
            <input
              name="address"
              value={form.address}
              onChange={onChange}
              placeholder="Address"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md"
            />
            <input
              name="education"
              value={form.education}
              onChange={onChange}
              placeholder="Education"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md"
            />
            <input
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={onChange}
              placeholder="Date of Birth (YYYY-MM-DD)"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md"
            />

            {error && (
              <div className="mt-2 p-3 bg-red-100 border border-red-200 text-red-600 text-sm rounded-md">{error}</div>
            )}

            <button
              type="submit"
              disabled={isSaving}
              className="w-full mt-2 bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 disabled:opacity-60"
            >
              {isSaving ? 'Saving…' : 'Finish setup'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentSetup;