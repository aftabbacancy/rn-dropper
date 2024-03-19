"use client";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";

const ProjectItem = () => {
  return (
    <div className="bg-white rounded-lg shadow-md min-w-96 p-4 overflow-hidden">
      <div className="relative">
        <p>Project Name</p>
        <p className=" text-[8pt] text-gray-500">Edited 2 hours ago by you</p>
        <div
          onClick={() => alert("DATA")}
          className="inline-block mr-3 absolute right-[-15px] top-0 cursor-pointer"
        >
          <CiMenuKebab size={24} />
        </div>
      </div>
      <div className="w-full items-center justify-center text-center">
        <Image
          src={require("../../../assets/phone.png")}
          width={40}
          height={40}
          alt="phoneImage"
          className="inline-block min-w-24"
        />
      </div>
    </div>
  );
};

export default ProjectItem;
