import React from 'react';
import "./App.css";
import { NavLink, Route, Routes } from 'react-router-dom';
import { Home, Add} from "./pages";

const App = () => {
  return (
    <>
      <header className="py-5 bg-slate-200 flex items-center justify-center gap-5 shadow-lg">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `font-bold text-[20px] px-4 py-2 rounded-md transition-colors duration-200 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/add" 
          className={({ isActive }) => 
            `font-bold text-[20px] px-4 py-2 rounded-md transition-colors duration-200 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'}`
          }
        >
          Create
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
};

export default App;
