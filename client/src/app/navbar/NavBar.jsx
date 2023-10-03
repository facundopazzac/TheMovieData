"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (

    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-3 w-auto" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="Logo" />
          </div>

          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Open main menu</span>

              <svg className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className={ `hidden sm:block sm:ml-6${isOpen ? "block" : "hidden" }` } >
            <div className="flex space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">Inicio</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Películas</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Series</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Mi lista</a>
            </div>
          </div>

          <div className={`hidden sm:block sm:ml-6${isOpen ? "hidden" : "block"}`}>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-500 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white ">Iniciar sesión</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`lg:hidden" id="mobile-menu" ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Películas</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Series</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Documentales</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <a href="#" className="bg-red-500 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white ">Iniciar sesión</a>
          </div>
        </div>
      </div>
    </nav>



  );
};

export default Navbar
