"use client";
import React, { useState } from "react";
import { usersPreload } from "@/utils/users";
import WorkHistoryCard from "@/components/WorkHistoryCard/WorkHistoryCard";
import { FaRegStar, FaShareFromSquare } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { TfiBolt } from "react-icons/tfi";
import { BsChatDots } from "react-icons/bs";

const DetailProfile = ({ params }: { params: { userId: string } }) => {
  const [FavClicked, setFavClicked] = useState(false);
  const handleFavClick = () => {
    setFavClicked(!FavClicked);
  };
  const user = usersPreload.find((user) => user.id.toString() === params.userId);

  if (!user) {
    return (
      <div>
        <h2>User not found</h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-24">
      <div className="flex flex-col mx-5 my-3 border border-gray-400 rounded-3xl h-[90%] overflow-y-auto md:w-[70%]">
        <div className="border border-b-gray-300">
          <div className="flex items-center">
            <div className="w-auto m-3 p-1 border border-gray-400 rounded-full">
              <Image
                className="rounded-full"
                src={user.profileImg}
                alt="profile image"
                width={96}
                height={96}
              />
            </div>
            <div className="w-full p-5 ">
              <div className="flex justify-between ">
                <div>
                  <h2 className="text-[32px] font-bold">
                    {user.name} {user.lastName}
                  </h2>
                  <div className="flex items-center mb-3">
                    <IoLocationOutline />
                    <h2 className="text-xl">
                      {user.city} {user.country}
                    </h2>
                  </div>
                  <div className="flex items-center border border-[#3D63DD] w-fit px-3 py-1 rounded-xl">
                    <TfiBolt className="text-[#3D63DD] mr-1" />
                    <h2 className="text-[#3D63DD] text-[12px]">Available Now</h2>
                  </div>
                </div>
                <div className="flex h-fit items-center">
                  <button>
                    <BsChatDots className="text-[#3D63DD] border-2 border-[#3D63DD] hover:bg-[#D5E2FF] transition-all duration-300 size-10 p-1 rounded-full" />
                  </button>
                  <button className="bg-[#3D63DD] text-white text-center px-5 py-2 rounded-xl mx-2 hover:bg-[#93B4FF] transition-all duration-300">
                    Hire
                  </button>
                  {FavClicked ? (
                    <button onClick={handleFavClick} className="transition-all duration-300">
                      <GoHeartFill className="text-red-500 hover:text-red-600 transition-all duration-300 size-10 border-2 p-1 border-red-500 rounded-full" />
                    </button>
                  ) : (
                    <button onClick={handleFavClick} className="transition-all duration-300">
                      <GoHeartFill className="text-[#3D63DD] hover:bg-[#D5E2FF] transition-all duration-300 size-10 border-2 p-1 border-[#3D63DD] rounded-full" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end px-5 pb-14">
            <button className="flex">
              <h2 className="mx-4">Share</h2>
              <div>
                <FaShareFromSquare className="text-[#3D63DD] size-6" />
              </div>
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="float-left w-[30%] h-auto flex flex-col">
            <div className="p-5 py-10 flex items-center justify-center border-b border-gray-300">
              <button className="bg-[#3D63DD] text-white text-center px-5 py-2 rounded-xl mx-2 hover:bg-[#93B4FF] transition-all duration-300">
                Jobs Publications
              </button>
            </div>
            <div className="border-b border-gray-300">
              <h2 className="font-bold m-5">Professions:</h2>
              <div className="">
                <ul className="list-none flex flex-col text-lg pb-4">
                  {user.professions.map((profession, index) => (
                    <li key={index} className="rounded-lg inline-block m-1 p-2 px-5">
                      {profession}
                      <div className="flex ">
                        <h6 className="text-sm mr-2">Rate:</h6>
                        <p className="flex">
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-bold m-5">Education:</h2>
              {user.educations.map((education) => (
                <div className="px-5" key={education}>
                  {education}
                </div>
              ))}
            </div>
          </div>
          <div className="float-right w-[70%] h-auto border-l border-gray-400">
            <div className="border-b border-gray-400 p-5">
              <div>
                <h1 className="text-xl font-bold flex">
                  {user.professions.map((profession) => (
                    <div className="" key={profession}>
                      {profession}
                    </div>
                  ))}
                </h1>
              </div>
              <div className="mt-5">
                <h1>{user.description}</h1>
              </div>
            </div>
            <div className="p-5">
              <h1 className="text-xl font-bold">Job History</h1>
              {user.jobs.map((job, index) => (
                <WorkHistoryCard key={index} {...job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
