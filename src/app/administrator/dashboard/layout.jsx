'use client'

import SideBar from "@/components/SideBar";
import AdminHeader from "@/components/Header";
import { useState } from 'react'

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <AdminHeader toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <main className="flex-1 relative overflow-y-auto overflow-x-hidden">
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {/* Apply padding to prevent content from being covered by sidebar */}
            <div className="lg:pl-64"> {/* Adjust the left padding based on sidebar width */}
              <section className="mt-2"> {/* Adjust top margin for different breakpoints */}
                {children}
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
