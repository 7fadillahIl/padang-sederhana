import React, { useEffect } from "react";
import Rendang from "../../assets/rendang.png";
import Dendeng from "../../assets/dendeng.png";
import Tunjang from "../../assets/tunjang.png";
import AOS from "aos";
import "aos/dist/aos.css";
// import StarRatings from "react-star-ratings";

const ServicesData = [
  {
    id: 1,
    img: Rendang,
    name: "Rendang",
    description: "Lezatnya rendang, setiap suapan adalah keajaiban rasa.",
  },
  {
    id: 2,
    img: Dendeng,
    name: "Dendeng",
    description:
      "Gurihnya dendeng, setiap irisannya adalah ledakan cita rasa yang memanjakan lidah.",
  },
  {
    id: 3,
    img: Tunjang,
    name: "Gulai Tunjang",
    description:
      "Kelezatan gulai tunjang, setiap suapan adalah harmoni cita rasa yang menggugah selera.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Layanan Kami
            </p>
            <h1 className="text-3xl font-bold">Menu</h1>
            <p className="text-xs text-gray-400">
              Menu favorit kami mencakup rendang yang gurih dan gulai tunjang
              yang lezat. Setiap hidangan disiapkan dengan rempah pilihan untuk
              pengalaman kuliner yang memanjakan lidah.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
