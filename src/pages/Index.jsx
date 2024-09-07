import React from 'react';
import { FacebookIcon } from 'lucide-react';
import EmailSignup from '../components/EmailSignup';
import tallGreenImage from '../assets/tall_green.png';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <img src={tallGreenImage} alt="CuteMomo.com Logo" className="mx-auto h-48 w-auto object-cover" />
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">CuteMomo.com</h1>
          <p className="mt-2 text-sm text-gray-600">Adorable Baby Clothing</p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
            <p className="mt-2 text-gray-600">Exclusive premium designs for your little ones.</p>
          </div>
          <EmailSignup />
          <div className="text-center">
            <a
              href="http://fb.com/cutemomo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <FacebookIcon className="h-5 w-5 mr-2" />
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;