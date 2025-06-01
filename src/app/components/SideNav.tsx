'use client';
import type { ActiveUserData } from '@/types/activeUserData';
import type { MenuItem } from '@/types/menuItem';
import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  FileText,
  User,
  ShoppingCart,
  Mail,
  Bell,
  Bookmark,
  Settings,
} from 'lucide-react';

interface SideNavProps {
  menuItems: MenuItem[];
  activeUser: ActiveUserData;
}

function SideNav(props: SideNavProps) {
  const { menuItems, activeUser } = props;
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`bg-white h-full shadow-lg transition-all duration-300 ease-in-out ${
            isExpanded ? 'w-64' : 'w-20'
          } relative`}
        >
          {/* Logo Area */}
          <div className="flex items-center h-16 p-4 border-b border-gray-200">
            {isExpanded && (
              <div className="font-bold text-lg text-indigo-600">AppName</div>
            )}
            {!isExpanded && (
              <div className="mx-auto font-bold text-lg text-indigo-600">A</div>
            )}
          </div>

          {/* Navigation */}
          <nav className="mt-4">
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
                    {isExpanded && <span className="ml-4">{item.label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="absolute -right-3 top-20 bg-white rounded-full p-1 border border-gray-200 shadow-md hover:bg-gray-50"
          >
            {isExpanded ? (
              <ChevronLeft size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
        </div>
      </div>
      );
    </>
  );
}

export { SideNav };
