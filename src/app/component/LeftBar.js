import LeftBarLink from "./LeftBarLink";
import { BsChevronDown } from "react-icons/bs";

import React from 'react'

const LeftBar = () => {
  return (
    <div className="px-4 fixed mt-5 hidden lg:block">
      <div className="flex flex-col gap-2">
        <LeftBarLink
          
        />
        <LeftBarLink  text="Friends" />
        <LeftBarLink  text="Groups" />
        <LeftBarLink  text="Marketplace" />
        <LeftBarLink  text="Saved" />
        <LeftBarLink  text="Pages" />
        <LeftBarLink  text="Events" />
        <LeftBarLink  text="Most Recent" />
        

        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
            <BsChevronDown />
          </div>
          <h1 className="text-[16px] font-medium">See More</h1>
        </div>

        <p className="text-[14px] text-gray-500 mt-2">
          Privacy · Terms · Advertising · Ad choices · <br /> Cookies · Meta ©
          2022
        </p>
      </div>
    </div>
  )
}

export default LeftBar








