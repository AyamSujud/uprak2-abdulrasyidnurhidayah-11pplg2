import React from "react";
import { Link } from 'react-router-dom';

function Hero() {
    return (
    <div className="bg-slate-800 text-white text-center justify-between p-8 items-center  flex">
      <div className="py-12 text-start">
        <h1 className="text-6xl font-bold mb-4">Petani Kode</h1>
        <p className="text-lg text-white-700 italic">Belajar budidaya kode (coding) dengan tutorial yang mudah</p>
        <p className="text-lg text-white-700 italic">dipahami. Mostly pakai Linux.</p>
        <div className="flex items-center gap-5">
          <Link to="/MaintenancePage" className="text-center text-white py-3 px-4 rounded-md bg-teal-600 hover:bg-teal-800">
            Mulai Belajar
          </Link>
          <Link to="/MaintenancePage" className="text-center text-white py-3 px-4 rounded-md bg-teal-800 hover:bg-teal-600">
            Join Newsletter
          </Link>
        </div>
      </div>
      <div className="">
        <img src="Gambar.png" className="" alt="" /> 
      </div>
  </div>
    );
}

export default Hero