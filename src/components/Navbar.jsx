import React from "react";

function Navbar() {
    return (
<nav className="bg-teal-600 text-white p-4">
    <div className="flex items-center gap-5 font-semibold">
    <img src="Petani.png" className="w-10" alt="" />
    <img src="Home.png" className='w-6' alt="" />
    <a href="">Home</a>
    <a href="">Kelas</a>
    <a href="">Tutorial</a>
    <a href="">buku</a>
    <img src="search.png" className="w-5" alt="" />
    </div>
  </nav>
    );
}

export default Navbar