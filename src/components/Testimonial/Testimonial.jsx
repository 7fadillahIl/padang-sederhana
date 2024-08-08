import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Praz Teguh",
    text: "Ini rasanya benar benar enak ya, autentik gitu seperti di kampung halaman saya, jadi saya tidak perlu jauh-jauh ke padang untuk merasakan cita rasa minang ",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Lionel Andrés Messi",
    text: "Asli ieumah euy asakan padang teh meni ngeunaahhhh pisan, urang geus nyobaan rendang anu ti argentina asa teu ngeunah, otentik keneh ieu, nuhun ah rumah makan sederhana",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Cristiano Ronaldo dos Santos Aveiro ",
    text: "Masakan iki rasane tenan endi, saben suapan ngrasakake rasa sing njero lan asli. Pancen ora ana tandhingane, nggawe kangen terus",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Apa yang kustomer rasakan?
            </p>
            <h1 className="text-3xl font-bold">Testimoni</h1>
            <p className="text-xs text-gray-400">
              Rasa yang memukau dan pelayanan yang luar biasa – testimoni kami
              adalah cerminan kepuasan pelanggan yang tak tertandingi!
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
