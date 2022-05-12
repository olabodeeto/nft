import React from "react";
import Image from "next/dist/client/image";
import fb from "../assets/fb.svg";
import tw from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className=" bg-gray-800 mt-1">
      <div className="py-20 text-gray-50 w-6/12 m-auto flex flex-col items-center justify-center">
        <p className="py-5 text-white lg:text-2xl">Join the community</p>
        <ul className="flex flex-row gap-4 lg:gap-10">
          <li className="bg-gray-500 p-2 rounded-md">
            <a href="https://facebook.com/ENFT-107210511978517" target="_blank">
              <div className="w-6 h-6">
                <Image src={fb} />
              </div>
            </a>
          </li>
          <li className="bg-gray-500 p-2 rounded-md">
            <a href="https://twitter.com/ENFT7CS095" target="_blank">
              <div className="w-6 h-6">
                <Image src={tw} />
              </div>
            </a>
          </li>

          <li className="bg-gray-500 p-2 rounded-md">
            <a href="https://www.instagram.com/enft7cs095/" target="_blank">
              <div className="w-6 h-6">
                <Image src={instagram} />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="py-5 bg-gray-900">
        <p className="text-white text-center text-sm">
          © 2018 - 2022 Enft Networks, Inc
        </p>
      </div>
    </footer>
  );
}
