import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import React, { useState } from 'react';
import { Menu, ChevronDown, Search, User, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { title: 'Home', href: '/' },
    {
      title: 'Explore',
      href: '#',
      submenu: [
        { title: 'Products', href: '/products' },
        { title: 'Solutions', href: '/solutions' },
        { title: 'Resources', href: '/resources' },
      ],
    },
    {
      title: 'Work',
      href: '#',
      submenu: [
        { title: 'Projects', href: '/projects' },
        { title: 'Case Studies', href: '/case-studies' },
      ],
    },
    {
      title: 'Optimize',
      href: '#',
      submenu: [
        { title: 'Performance', href: '/performance' },
        { title: 'Analytics', href: '/analytics' },
      ],
    },
    {
      title: 'Learn',
      href: '#',
      submenu: [
        { title: 'Documentation', href: '/docs' },
        { title: 'Tutorials', href: '/tutorials' },
        { title: 'Guides', href: '/guides' },
      ],
    },
    {
      title: 'Services',
      href: '#',
      submenu: [
        { title: 'Consulting', href: '/consulting' },
        { title: 'Support', href: '/support' },
        { title: 'Training', href: '/training' },
      ],
    },
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Logo, HQ, and Menu */}
          <div className="flex items-center space-x-4">
            {/* Logo and brand */}
            <div className="flex items-center space-x-2">
              <img 
                src="/placeholder.svg"
                alt="Logo"
                className="h-8 w-8"
              />
              <a href="/" className="text-xl font-bold mr-4">HQ</a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {menuItems.map((item) => (
                  <div key={item.title} className="relative group">
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                        "hover:bg-gray-700 hover:text-white transition-colors duration-200",
                        activeDropdown === item.title ? "bg-gray-700" : ""
                      )}
                    >
                      {item.title}
                      {item.submenu && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    {item.submenu && activeDropdown === item.title && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1" role="menu">
                          {item.submenu.map((subitem) => (
                            <a
                              key={subitem.title}
                              href={subitem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                              role="menuitem"
                            >
                              {subitem.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center justify-between"
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                {item.submenu && activeDropdown === item.title && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.title}
                        href={subitem.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {subitem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile icons */}
          <div className="px-4 py-3 border-t border-gray-700 flex justify-around">
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
