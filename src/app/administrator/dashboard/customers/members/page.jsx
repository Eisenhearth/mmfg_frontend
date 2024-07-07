import React from 'react';
import { RiAddFill } from "react-icons/ri";
import { FaTrash, FaSort, FaChevronDown } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Members = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="mb-4">
        <h1 className="text-2xl font-inter">Members</h1>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <button type="button" className="inline-flex items-center text-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              <RiAddFill className="w-4 h-4 mr-1.5" />
              Add
            </button>
            <button type="button" className="inline-flex items-center text-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              <FaTrash className="w-4 h-4 mr-2" />
              Delete
            </button>
          </div>
          <div className="flex space-x-2">
            <button type="button" className="inline-flex items-center text-center focus:outline-none text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2 focus:ring-purple-900">
              <FaSort className="w-4 h-4 mr-2" />
              Sort
              <FaChevronDown className="w-3 h-3 ml-2" />
            </button>
            <form>
              <div className="relative font-inter">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  className="block p-2 pl-12 pr-16 w-full text-sm text-white bg-mm-smoke rounded-lg border border-gray-800 focus:ring-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-0 top-0 h-full bg-blue-700 font-normal rounded-r-lg text-sm px-3"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg space-y-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4">
                  Laptop
                </td>
                <td className="px-6 py-4">
                  $2999
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                  White
                </td>
                <td className="px-6 py-4">
                  Laptop PC
                </td>
                <td className="px-6 py-4">
                  $1999
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                  Black
                </td>
                <td className="px-6 py-4">
                  Accessories
                </td>
                <td className="px-6 py-4">
                  $99
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-row justify-between">
            <button type="button" className="inline-flex items-center text-gray-950 text-center focus:outline-none  bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-3 py-2">
              <IoMdDownload className="w-4 h-4 mr-2" />
              Download CSV
            </button>
              <nav aria-label="Page navigation example">
                <ul class="flex items-center -space-x-px h-8 text-sm">
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span class="sr-only">Previous</span>
                      <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                  </li>
                  <li>
                    <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span class="sr-only">Next</span>
                      <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                      </svg>
                    </a>
                  </li>
                </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Members;
