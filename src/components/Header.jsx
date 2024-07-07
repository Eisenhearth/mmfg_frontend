'use client'
import React from 'react'
import Image from 'next/image'
import { PiDotsThreeBold } from "react-icons/pi";
import { RiMenu2Line } from "react-icons/ri";


const AdminHeader = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-999 flex justify-between items-center w-full h-14 bg-mm-smoke drop-shadow-1 px-4 lg:px-6">
      <div className="flex items-center">
      <button 
          onClick={toggleSidebar}
          type="button" 
          className="p-2 inline-flex items-center text-sm text-mm-orange rounded-lg sm:hidden hover:bg-mm-dark focus:outline-none focus:ring-2 focus:ring-mm-smoke">
          <span className="sr-only">Open sidebar</span>
          <RiMenu2Line className="w-6 h-6" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-[36px] h-[36px] relative flex-shrink-0">
          <Image
            src="https://images.pexels.com/photos/20954282/pexels-photo-20954282/free-photo-of-woman-wearing-a-denim-jacket.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill
            className="rounded-full border-2 border-white"
            alt="profile"
          />
        </div>
        <div>
            <a href="" className="text-white">
                <PiDotsThreeBold className="w-6 h-6" />
            </a>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader;
