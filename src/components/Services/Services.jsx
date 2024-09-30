import React from "react";
import Img4 from "../../assets/Img4.png";
import Img3 from "../../assets/Img3.png";
import Img2 from "../../assets/Img2.png";
const ServicesData = [
  {
    id: 1,
    img: Img4,
    name: "Espresso",
    description:
      "A rich, concentrated coffee with bold flavor, brewed under high pressure.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "Americano",
    description:
      "A smooth espresso-based coffee, diluted with hot water for a milder flavor.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "A smooth espresso-based coffee, diluted with hot water for a milder flavor.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[115px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[170px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
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
