'use client';

import type { ActiveUserData } from '@/types/activeUserData';
import type { MenuItem } from '@/types/menuItem';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SideNavProps {
  menuItems: MenuItem[];
  activeUser: ActiveUserData;
  avatar?: string;
}

function SideNav({ menuItems, activeUser, avatar }: SideNavProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`bg-white h-screen shadow-lg transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-20'
      } relative flex flex-col`}
    >
      {/* Logo Area */}
      <div className="flex items-center h-16 p-4 border-b border-gray-200">
        {isExpanded ? (
          <div className="font-bold text-lg text-indigo-600">AppName</div>
        ) : (
          <div className="mx-auto font-bold text-lg text-indigo-600">A</div>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center p-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors rounded-lg mx-2 ${
                  isExpanded ? 'justify-start' : 'justify-center'
                }`}
              >
                <span className="relative">
                  {item.icon}
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </span>
                {isExpanded && <span className="ml-4">{item.title}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile Section - now sticks to bottom */}
      <div
        className={`flex items-center p-4 border-t border-gray-200 ${
          isExpanded ? 'justify-start' : 'justify-center'
        }`}
      >
        <img
          src={avatar}
          alt={activeUser.firstname}
          className="rounded-full object-cover"
          width={40}
          height={40}
        />
        {isExpanded && (
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {activeUser.firstname} {activeUser.lastname}
            </p>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -left-3 top-20 bg-white rounded-full p-1 border border-gray-200 shadow-md hover:bg-gray-50"
      >
        {isExpanded ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </div>
  );
}

export { SideNav };
