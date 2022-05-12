import React from "react";
import Image from "next/dist/client/image";
import Footer from "../components/Footer";
import wallet from "../assets/wallet.png";
import tag from "../assets/tag.png";
import pic from "../assets/pic.png";

export default function support() {
  return (
    <>
      <main className="mt-28 py-10">
        <div className="w-full lg:w-10/12 m-auto p-2">
          <h1 className="mt-10 text-4xl">How it works</h1>
          <div className="mt-10 flex justify-between gap-4 flex-col lg:flex-row bg-blue-50 lg:p-10 py-10">
            <div className="w-full lg:w-4/12 mb-20 lg:mb-10">
              <div className="flex items-center justify-center">
                <div className="h-10 w-10 ">
                  <Image src={wallet} />
                </div>
              </div>
              <h1 className="text-center mt-5 text-2xl text-blue-400">
                Set up your wallet
              </h1>
              <p className="text-center mt-4 text-gray-600">
                Once you’ve set up your wallet of choice, connect it to OpenSea
                by clicking the wallet icon in the top right corner. Learn about
                the
              </p>
            </div>

            <div className="w-full lg:w-4/12 mb-20 lg:mb-10">
              <div className="flex items-center justify-center">
                <div className="h-10 w-10 ">
                  <Image src={pic} />
                </div>
              </div>
              <h1 className="text-center mt-5 text-2xl text-blue-400">
                Add your NFTs
              </h1>
              <p className="text-center mt-4 text-gray-600">
                Upload your work (image, video, audio, or 3D art), add a title
                and description, and customize your NFTs with properties, stats,
                and unlockable content.
              </p>
            </div>

            <div className="w-full lg:w-4/12 mb-20 lg:mb-10">
              <div className="flex items-center justify-center">
                <div className="h-10 w-10 ">
                  <Image src={tag} />
                </div>
              </div>
              <h1 className="text-center mt-5 text-2xl text-blue-400">
                List them for sale
              </h1>
              <p className="text-center mt-4 text-gray-600">
                Choose between auctions, fixed-price listings, and
                declining-price listings. You choose how you want to sell your
                NFTs, and we help you sell them!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
