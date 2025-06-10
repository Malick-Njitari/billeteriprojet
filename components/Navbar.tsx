
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './Button';
import { UserIcon } from './icons/UserIcon';
import { TicketIcon } from './icons/TicketIcon';
import { LogoutIcon } from './icons/LogoutIcon';
import { PlusIcon } from './icons/PlusIcon';
import { AdminIcon } from './icons/AdminIcon';
import { UserRole } from '../types';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-neutral-darkest shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink 
          to="/" 
          className="text-2xl font-bold text-primary-light hover:text-primary transition-colors"
        >
          PassIt
        </NavLink>
        <div className="flex items-center space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `text-neutral-light hover:text-primary-light transition-colors ${isActive ? 'text-primary-light font-semibold' : ''}`
            }
          >
            Events
          </NavLink>
          {user && (
            <NavLink 
              to="/my-tickets" 
              className={({ isActive }) =>
                `text-neutral-light hover:text-primary-light transition-colors flex items-center ${isActive ? 'text-primary-light font-semibold' : ''}`
              }
            >
              <TicketIcon className="w-5 h-5 mr-1" /> My Tickets
            </NavLink>
          )}
          {user && (user.role === UserRole.ORGANIZER || user.role === UserRole.ADMIN) && (
            <NavLink 
              to="/create-event" 
              className={({ isActive }) =>
                `text-neutral-light hover:text-primary-light transition-colors flex items-center ${isActive ? 'text-primary-light font-semibold' : ''}`
              }
            >
              <PlusIcon className="w-5 h-5 mr-1" /> Create Event
            </NavLink>
          )}
           {user && user.role === UserRole.ADMIN && (
            <NavLink 
              to="/admin" 
              className={({ isActive }) =>
                `text-neutral-light hover:text-primary-light transition-colors flex items-center ${isActive ? 'text-primary-light font-semibold' : ''}`
              }
            >
              <AdminIcon className="w-5 h-5 mr-1" /> Admin Panel
            </NavLink>
          )}
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-neutral-light flex items-center">
                <UserIcon className="w-5 h-5 mr-1 text-primary-light" /> {user.name} ({user.role})
              </span>
              <Button onClick={handleLogout} variant="secondary" size="sm">
                <LogoutIcon className="w-4 h-4 mr-1" /> Logout
              </Button>
            </div>
          ) : (
            <Button onClick={() => navigate('/login')} variant="primary" size="sm">
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
