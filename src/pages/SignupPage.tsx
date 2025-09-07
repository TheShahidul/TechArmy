import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkPasswordStrength = (pwd: string) => {
    let score = 0;
    let feedback = '';
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (pwd.length < 8) feedback = 'At least 8 characters.';
    else if (!/[A-Z]/.test(pwd)) feedback = 'Include an uppercase letter.';
    else if (!/[0-9]/.test(pwd)) feedback = 'Include a number.';
    else if (!/[^A-Za-z0-9]/.test(pwd)) feedback = 'Include a special character.';
    else feedback = 'Strong password!';
    setPasswordStrength(score);
    setPasswordFeedback(feedback);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    checkPasswordStrength(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }
    if (passwordStrength < 4) {
      setError('Password does not meet minimum requirements.');
      return;
    }
    dispatch(signup({ username, email }));
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
        <div className="md:w-1/2 hidden md:block">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Signup" className="h-full w-full object-cover" />
        </div>
        <form onSubmit={handleSubmit} className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Create Your Account</h2>
          {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full mb-2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <div className="mb-4">
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className={`h-2 rounded ${
                  passwordStrength === 0 ? 'bg-gray-200' :
                  passwordStrength === 1 ? 'bg-red-500' :
                  passwordStrength === 2 ? 'bg-yellow-500' :
                  passwordStrength === 3 ? 'bg-blue-500' :
                  'bg-green-500'
                }`}
                style={{ width: `${(passwordStrength / 4) * 100}%` }}
              ></div>
            </div>
            <div className={`text-xs mt-1 ${passwordStrength < 4 ? 'text-red-500' : 'text-green-600'}`}>{passwordFeedback}</div>
            <div className="text-xs text-gray-500 mt-1">Password must be at least 8 characters, include an uppercase letter, a number, and a special character.</div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors mb-2">Sign Up</button>
          <div className="text-center text-sm mt-2">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-semibold">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
