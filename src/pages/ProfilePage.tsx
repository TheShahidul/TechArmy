import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { login } from '../store/slices/authSlice';

const ProfilePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    username: user?.username || '',
    email: user?.email || '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.username || !form.email) {
      setError('Username and Email are required.');
      setSuccess('');
      return;
    }
    dispatch(login(form));
    setEditMode(false);
    setSuccess('Profile updated successfully!');
    setError('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Account Settings</h2>
        <div className="mb-6 flex flex-col items-center">
          <img
            src={'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80'}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 mb-2"
          />
          {!editMode && (
            <button
              className="text-sm text-blue-600 hover:underline mb-2"
              onClick={() => setEditMode(true)}
            >Edit Profile</button>
          )}
        </div>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        {success && <div className="text-green-500 mb-4 text-center">{success}</div>}
        {editMode ? (
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full mb-4 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-4 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            {/* Avatar field removed for now, as not supported in user type */}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors mb-2">Save Changes</button>
            <button type="button" className="w-full bg-gray-300 text-gray-700 py-2 rounded font-semibold hover:bg-gray-400 transition-colors" onClick={() => setEditMode(false)}>Cancel</button>
          </form>
        ) : (
          <div className="w-full flex flex-col items-center">
            <div className="w-full mb-2 text-lg font-semibold">Username: <span className="font-normal">{form.username}</span></div>
            <div className="w-full mb-2 text-lg font-semibold">Email: <span className="font-normal">{form.email}</span></div>
            {/* Avatar URL display removed for now, as not supported in user type */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
