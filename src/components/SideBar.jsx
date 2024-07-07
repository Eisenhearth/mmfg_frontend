'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { MdDashboard } from "react-icons/md";
import { BsFillPeopleFill, BsHouseGearFill } from "react-icons/bs";
import { FaCoins, FaChevronDown } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { GiBiceps, GiWalkingBoot } from "react-icons/gi";


import { motion, AnimatePresence } from 'framer-motion'

const SideBar = ({ isOpen, toggleSidebar }) => {
  const [isCustomersCollapsed, setIsCustomersCollapsed] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const toggleCustomersCollapse = () => {
    setIsCustomersCollapsed(!isCustomersCollapsed);
  }

  return (
    <>
      {/* Sidebar for tablet and desktop */}
      <div className="hidden sm:block fixed top-0 left-0 w-64 h-full bg-mm-dark shadow-lg z-50">
        <aside id="mmfg-sidebar" className="h-full p-4 overflow-y-auto bg-mm-dark flex flex-col space-y-10" aria-label="Sidebar">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <a href="#" className="flex my-5">
              <Image src="/logo.png" alt='mmfg-logo' width={80} height={80} />
            </a>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col flex-grow">
            <ul className="space-y-2 font-medium font-inter w-full text-white">
              <li>
                <Link href="/administrator/dashboard" className="flex items-center justify-start py-2 px-4 rounded-lg hover:bg-mm-black group hover:text-gray-100 space-x-6">
                  <MdDashboard className="w-6 h-6 " />
                  <span className="ms-3 text-base">Dashboard</span>
                </Link>
              </li>

              <li>
                <button onClick={toggleCustomersCollapse} className="flex items-center justify-start w-full py-2 px-4 rounded-lg hover:bg-mm-black group space-x-6 focus:outline-none">
                  <BsFillPeopleFill className="w-6 h-6" />
                  <span className="ms-3 text-base">Customers</span>
                  <FaChevronDown className={`w-3 h-3 ml-auto transition-transform ${isCustomersCollapsed ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isCustomersCollapsed && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pl-8 overflow-hidden"
                    >
                      <li className="flex items-center space-x-3">
                        <GiBiceps className="w-5 h-5" />
                        <Link href="/administrator/dashboard/customers/members" className="block p-2 text-base" onClick={() => setIsCustomersCollapsed(false)}>Add Members</Link>
                      </li>
                      <li className="flex items-center space-x-3">
                        <GiWalkingBoot className="w-5 h-5" />
                        <Link href="#" className="block p-2 text-base" onClick={() => setIsCustomersCollapsed(false)}>Add Non Members</Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link href="/administrator/dashboard/transactions" className="flex items-center justify-start py-2 px-4 rounded-lg hover:bg-mm-black group space-x-6">
                  <FaCoins className="w-6 h-6" />
                  <span className="ms-3 text-base">Transactions</span>
                </Link>
              </li>

              <li>
                <Link href="/administrator/dashboard/operations" className="flex items-center justify-start py-2 px-4 rounded-lg hover:bg-mm-black group space-x-6">
                  <BsHouseGearFill className="w-6 h-6" />
                  <span className="ms-3 text-base">Operations</span>
                </Link>
              </li>
              <li>
                <Link href="/administrator/dashboard/settings" className="flex items-center justify-start py-2 px-4 rounded-lg hover:bg-mm-black group space-x-6">
                  <IoMdSettings className="w-6 h-6" />
                  <span className="ms-3 text-base">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Sidebar for mobile with toggle */}
      <motion.div 
        initial={{ x: '-100%' }} 
        animate={{ x: isOpen ? 0 : '-100%' }} 
        transition={{ type: 'tween' }}
        className={`fixed top-0 left-0 w-64 h-full bg-mm-dark shadow-lg z-50 sm:hidden`}
      >
        <aside id="mmfg-sidebar" className="h-full p-4 overflow-y-auto bg-mm-dark flex flex-col space-y-10" aria-label="Sidebar">
          {/* Close button for mobile view */}
          <div className="flex justify-end sm:hidden">
            <button onClick={toggleSidebar} className="text-white">
              <AiOutlineClose className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center">
            <a href="#" className="flex my-5">
              <Image src="/logo.png" alt='mmfg-logo' width={80} height={80} />
            </a>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col flex-grow">
            <ul className="space-y-2 font-medium font-inter w-full text-white">
              <li>
                <a href="#" className="flex items-center justify-start py-2 px-4 rounded-lg hover:bg-mm-black group hover:text-gray-100 space-x-6">
                  <MdDashboard className="w-6 h-6 " />
                  <span className="ms-3 text-base">Dashboard</span>
                </a>
              </li>

              <li>
                <button onClick={toggleCustomersCollapse} className="flex items-center justify-start w-full py-2 px-4 rounded-lg hover:bg-mm-black group space-x-6 focus:outline-none">
                  <BsFillPeopleFill className="w-6 h-6" />
                  <span className="ms-3 text-base">Customers</span>
                  <FaChevronDown className={`w-3 h-3 ml-auto transition-transform ${isCustomersCollapsed ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isCustomersCollapsed && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pl-8 overflow-hidden"
                    >
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-mm-black text-base">Add Members</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-mm-black text-base">Add Non Members</a>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <a href="#" className="flex items-center justify-start py-2 px-4 rounded-lg hover:bg-mm-black group space-x-6">
                  <FaCoins className="w-6 h-6" />
                  <span className="ms-3 text-base">Transactions</span>
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center justify-start py-2 px-4 rounded-lg hover:bg-mm-black group space-x-6">
                  <BsHouseGearFill className="w-6 h-6" />
                  <span className="ms-3 text-base">Operations</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-start py-2 px-4 rounded-lg hover:bg-mm-black group space-x-6">
                  <IoMdSettings className="w-6 h-6" />
                  <span className="ms-3 text-base">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </motion.div>
    </>
  )
}

export default SideBar;