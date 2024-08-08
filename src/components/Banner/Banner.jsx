import React from "react";
import Naspad from "../../assets/naspadhd.png";
import Vector from "../../assets/padangbg.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={Naspad}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">Nasi Padang</h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Setiap suapan menyuguhkan kombinasi bumbu rempah yang kaya,
                  mulai dari rendang daging yang empuk hingga gulai tunjang yang
                  gurih. Keunikan Nasi Padang terletak pada berbagai pilihan
                  lauk yang disajikan, memungkinkan setiap orang menikmati
                  hidangan sesuai selera mereka.
                  <br />
                  <br />
                  Dari sambal hijau pedas hingga sayur singkong yang segar,
                  setiap elemen dalam Nasi Padang bekerja sama harmonis untuk
                  menciptakan pengalaman kuliner yang memuaskan. Keistimewaan
                  ini menjadikan Nasi Padang tidak hanya sebagai hidangan,
                  tetapi juga sebagai perjalanan rasa yang tak terlupakan.
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-purple-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-red-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
