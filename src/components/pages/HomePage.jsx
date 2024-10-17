/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../Layout/header";
import Footer from "../layout/Footer";

function HomePage() {
  const [mensShoes, setMensShoes] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/94d8f799-7d21-4d83-80f7-bf5f453cfe74")
      .then((Response) => Response.json())
      .then((data) => {
        console.log("Men's Shoes:", data);
        setMensShoes(data);
      });
  }, []);
  return (
    <>
      <div className="header z-10 fixed w-full">
        <Header />
      </div>
      <div className="Main-container w-[100vw]">
        <div className="page_01 w-screen h-screen relative">
          <img
            className="w-full h-full object-cover"
            src="https://www.masongarments.com/cdn/shop/files/top_slider_1-1.jpg?v=1726066040&width=2800"
            alt="..."
          />
          <div className="home-page1-button absolute bottom-[8vw] left-[5vw] flex flex-col">
            <span className="text-black text-[3vw] md:text-[5vw] lg:text-[3vw]">
              DISCOVER TIA DRESS
            </span>
            <button className="bg-black text-white p-3 rounded-md w-[30vw] md:w-[20vw] lg:w-[10vw]">
              Shop now
            </button>
          </div>
        </div>
        <div className="min-h-screen w-full">
          <div className="p-4 md:p-10 flex flex-col gap-3">
            <span className="text-2xl md:text-3xl lg:text-[3vw] font-light">
              NEW ARRIVALS
            </span>

            <div className="flex gap-6 md:gap-10">
              <span className="cursor-pointer">Men</span>
              <span className="cursor-pointer">Women</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {mensShoes.slice(0, 4).map((menProduct) => (
              <div
                className="w-full aspect-[3/4] relative"
                key={menProduct.Product_id}
              >
                <div className="relative h-full w-full">
                  <img
                    className="h-full w-full object-cover rounded-md"
                    src={menProduct.image}
                    alt={menProduct.name}
                  />

                  <div className="product_detail absolute bottom-0 w-full p-2">
                    <div className="product_name_price w-full flex justify-between mb-2">
                      <p className="text-sm md:text-base lg:text-[1vw] text-[#6A6968]">
                        {menProduct.name}
                      </p>
                      <p className="text-sm md:text-base lg:text-[1.1vw] text-[#5f351d]">
                        Rs. {menProduct.price}
                      </p>
                    </div>
                    <div className="colour">
                      <span className="text-sm md:text-base lg:text-[1.1vw] text-[#6A6968]">
                        {menProduct.color}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center my-6 md:mb-10">
            <button className="py-2 px-6 md:px-10 text-white bg-[#5f351d] rounded hover:bg-[#4a2816] transition-colors">
              <span>View All</span>
            </button>
          </div>
        </div>

        <div className="relative w-full h-screen">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://www.masongarments.com/cdn/shop/files/2nd_full_screen_banner_desktop.jpg?v=1726066164&width=2400"
              alt="Scalare Boots Banner"
            />
          </div>

          <div className="absolute bottom-8 md:bottom-16 lg:bottom-[7vw] left-4 md:left-8 lg:left-[4vw] flex flex-col gap-4">
            <span className="text-3xl md:text-4xl lg:text-[3vw] font-sans tracking-wide">
              Scalare Boots
            </span>

            <button className="inline-block px-6 py-3 md:px-8 md:py-3 bg-black text-white text-sm md:text-base hover:bg-gray-800 transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="page_04 w-[100vw] min-h-[100vh]">
          <div className="home_page_04_heading p-10 flex flex-col gap-3">
            <span className="text-[3vw] font-light">
              EXPLORE CITTÁ SNEAKERS
            </span>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {mensShoes.slice(0, 4).map((menProduct) => (
              <div
                className="w-full aspect-[3/4] relative"
                key={menProduct.Product_id}
              >
                <div className="relative h-full w-full">
                  <img
                    className="h-full w-full object-cover rounded-md"
                    src={menProduct.image}
                    alt={menProduct.name}
                  />

                  <div className="product_detail absolute bottom-0 w-full p-2">
                    <div className="product_name_price w-full flex justify-between mb-2">
                      <p className="text-sm md:text-base lg:text-[1vw] text-[#6A6968]">
                        {menProduct.name}
                      </p>
                      <p className="text-sm md:text-base lg:text-[1.1vw] text-[#5f351d]">
                        Rs. {menProduct.price}
                      </p>
                    </div>
                    <div className="colour">
                      <span className="text-sm md:text-base lg:text-[1.1vw] text-[#6A6968]">
                        {menProduct.color}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full min-h-screen">
          <div className="w-full text-center">
            <h1 className="text-2xl md:text-3xl lg:text-[3vw] font-sans">
              DISCOVER OUR PILLARS
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
            <div className="relative aspect-[3/4] overflow-hidden group">
              <img
                src="https://www.masongarments.com/cdn/shop/files/Amalfi.jpg?v=1720099131&width=2048"
                alt="AMALFI"
                className="w-full h-full object-cover transition-transform "
              />
              <div className="absolute inset-0 ">
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       text-white text-2xl md:text-3xl lg:text-[3vw] 
                       font-sans tracking-wider"
                >
                  AMALFI
                </span>
              </div>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden group">
              <img
                src="https://www.masongarments.com/cdn/shop/files/Citta_2.jpg?v=1720099072&width=2048"
                alt="CITTÁ"
                className="w-full h-full "
              />
              <div className="absolute inset-0">
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       text-white text-2xl md:text-3xl lg:text-[3vw] 
                       font-sans tracking-wider"
                >
                  CITTÁ
                </span>
              </div>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden group md:col-span-2 lg:col-span-1">
              <img
                src="https://www.masongarments.com/cdn/shop/files/Scalare_3_copy.jpg?v=1720107428&width=2048"
                alt="SCALARE"
                className="w-full h-full "
              />
              <div className="absolute inset-0 ">
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       text-white text-2xl md:text-3xl lg:text-[3vw] 
                       font-sans tracking-wider"
                >
                  SCALARE
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;