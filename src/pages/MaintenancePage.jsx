import React from 'react';
import { Link } from 'react-router-dom';

function MaintenancePage() {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Halaman Sedang Diperbaiki</h1>
        <p className="text-lg text-white mb-6 italic">Kami sedang memperbarui halaman ini. Silakan kembali Lagi nanti.</p>

        <Link to="/">
          <button className="bg-teal-600 text-white py-2 px-4 rounded-md">
            Back
          </button>
        </Link>
      </div>
    </div>
    
  );
}

export default MaintenancePage;