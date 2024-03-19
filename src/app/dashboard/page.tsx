"use client";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import {
  IoMdHelpCircleOutline,
  IoIosContact,
  IoIosNotifications,
} from "react-icons/io";
import { PiUsersThree } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import NewProjectModal from "./components/NewProejctModal";
import ProjectItem from "./components/ProjectItem";
import { useState } from "react";

const projects = [
  {
    id: "somethi12",
    name: "Project 1",
    image:
      "https://e7.pngegg.com/pngimages/425/675/png-clipart-feature-phone-smartphone-demo-app-android-smartphone-angle-gadget.png",
  },
  {
    id: "somethi1232",
    name: "Project 2",
    image:
      "https://e7.pngegg.com/pngimages/425/675/png-clipart-feature-phone-smartphone-demo-app-android-smartphone-angle-gadget.png",
  },
  {
    id: "somethi12d",
    name: "Project 2",
    image:
      "https://e7.pngegg.com/pngimages/425/675/png-clipart-feature-phone-smartphone-demo-app-android-smartphone-angle-gadget.png",
  },
  {
    id: "somethi1df2",
    name: "Project 3",
    image:
      "https://e7.pngegg.com/pngimages/425/675/png-clipart-feature-phone-smartphone-demo-app-android-smartphone-angle-gadget.png",
  },
  {
    id: "somethi12asdf",
    name: "Project 4",
    image:
      "https://e7.pngegg.com/pngimages/425/675/png-clipart-feature-phone-smartphone-demo-app-android-smartphone-angle-gadget.png",
  },
  {
    id: "somethi1fef2",
    name: "Project 5",
    image:
      "https://e7.pngegg.com/pngimages/425/675/png-clipart-feature-phone-smartphone-demo-app-android-smartphone-angle-gadget.png",
  },
  {
    id: "somethi12fe34",
    name: "Project 6",
    image:
      "https://e7.pngegg.com/pngimages/425/675/png-clipart-feature-phone-smartphone-demo-app-android-smartphone-angle-gadget.png",
  },
];

const Dashboard = () => {
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);

  const handleOpenNewProjectModal = () => {
    setIsNewProjectModalOpen(true);
  };

  const handleCloseNewProjectModal = () => {
    setIsNewProjectModalOpen(false);
  };

  return (
    <div className="bg-blue-50 h-screen min-w-screen">
      <div className="w-screen h-screen flex flex-row p-3">
        {/** Left Side bar for menu */}
        <div className="w-1/6 bg-white rounded-lg shadow p-5 flex flex-col fixed h-[97%]">
          <div className="flex flex-row items-center">
            <h1 className="text-2xl font-semibold flex flex-1">
              React Dropify
            </h1>
            <Link href="#">
              <IoIosNotifications className="inline-block mr-3" size={24} />
            </Link>
          </div>
          <div className="mt-10 w-full flex-1">
            <Link
              className="block bg-blue-600 rounded-xl p-3 text-white font-medium text-sm"
              href="/dashboard/login"
            >
              <RxDashboard className="inline-block mr-3" size={24} />
              Projects
            </Link>
            <Link
              className="block rounded-xl p-3 font-medium mt-3 hover:bg-blue-600 hover:text-white transition-all text-sm"
              href="/dashboard/login"
            >
              <PiUsersThree className="inline-block mr-3" size={24} />
              Community
            </Link>
            <Link
              className="block rounded-xl p-3 font-medium mt-3 hover:bg-blue-600 hover:text-white transition-all text-sm"
              href="/dashboard/login"
            >
              <IoIosContact className="inline-block mr-3" size={24} />
              Contact Us
            </Link>
            <Link
              className="block rounded-xl p-3 font-medium mt-3 hover:bg-blue-600 hover:text-white transition-all text-sm"
              href="/dashboard/login"
            >
              <IoMdHelpCircleOutline className="inline-block mr-3" size={24} />
              Help
            </Link>
          </div>
          <div className="border rounded-md flex flex-row p-3 items-center hover:bg-gray-300 transition-all cursor-pointer">
            <div className="rounded-full bg-blue-700 w-10 h-10 items-center justify-center flex border border-black">
              <span className="text-white block">AA</span>
            </div>
            <div className="flex-1 ml-2">
              <h3 className="text-sm">Aftab</h3>
              <p className="text-xs text-blue-800">aftab.ali@gmail.com</p>
            </div>
          </div>
          <Link href="#" className="mt-4">
            <TbLogout className="inline-block mr-3" size={24} /> Logout
          </Link>
        </div>
        <div className="w-1/6 rounded-lg p-5 flex flex-col"></div>
        {/** Main Content area */}
        <div className="flex-1 ml-4 pt-2">
          {/** Top bar for page */}
          <div className="flex flex-row items-center">
            <div className="flex-1">
              <h1 className="text-2xl">Projects</h1>
              <span className="text-sm">Manage your projects</span>
            </div>
            <Link
              onClick={handleOpenNewProjectModal}
              href="#"
              className="bg-blue-600 px-5 py-2 rounded-md text-white hover:bg-blue-500 transition-all"
            >
              + Create New
            </Link>
          </div>
          {/** Projects */}
          <div className="grid grid-cols-3 gap-4 mt-10 pb-4">
            {projects.map((item) => {
              return <ProjectItem key={item.id} />;
            })}
          </div>
        </div>
      </div>
      <NewProjectModal
        isOpen={isNewProjectModalOpen}
        closeModal={handleCloseNewProjectModal}
      />
    </div>
  );
};

export default Dashboard;
