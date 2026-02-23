import React from "react";
import portfolios from "../data/portfolios";
import { Link } from "react-router-dom";

import backgroundimg from "../assets/background.png";
import ballImg from "../assets/portfolio-o.png";   // O wali image
import NewNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const Portfolio = () => {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${backgroundimg})`,
            }}
        >
            <div className="relative   z-10">
                <NewNavbar />


                {/* ============ HERO START ============ */}

                <section className="pt-60 pb-10 px-10">

                    {/* OUR TEXT */}
                    <p className="text-purple-400 text-4xl ml-[18%] mb-[-50px]">
                        Our
                    </p>

                    <div className="flex flex-col items-center">

                        <h1 className="text-[140px] font-extrabold tracking-widest leading-none text-gray-200 flex items-center">

                            PORTF

                            <img
                                src={ballImg}
                                className="w-[140px] mt-14 mx-2"
                            />

                            LIO

                        </h1>


                        <p
                            className="text-purple-400 text-4xl mt-[-70px] self-end mr-[18%]"
                            style={{
                                fontFamily: "splash",

                            }}
                        >
                            Flow Studios
                        </p>

                    </div>

                    <div className="mt-10 flex justify-center">
                        <button className="flex items-center my-28 gap-2 bg-white text-black px-4 py-2 rounded-xl font-medium hover:scale-105 transition">
                            <span><img
                                src="/star.png"
                                alt="Floww Studios Logo"
                                className="h-12 w-auto object-contain"
                            /></span>Schedule a call ▶
                        </button>
                    </div>
                    <div className="max-w-4xl mx-auto text-center py-12">

                        <p className="text-3xl leading-relaxed tracking-wide">

                            <span
                                className="
    bg-gradient-to-r from-gray-400 to-white
    bg-clip-text text-transparent
    drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
  "
                            >
                                "Where Ideas Turn"
                            </span>
                            <span className="text-white"> Into Clicks and Clients."</span>

                            <span className="text-[#a8a8a8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                {" "}SEO, Social
                            </span>

                            <br />

                            <span className="text-[#b2b2b2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                Media,
                            </span>

                            <span className="
    bg-gradient-to-r from-gray-400 to-white
    bg-clip-text text-transparent
    drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                {" "}and Websites that work.
                            </span>

                        </p>

                    </div>




                </section>


                {/* ======== PORTFOLIO CARDS ======== */}

                <div className="max-w-7xl mx-auto p-10">

                    <div className="grid grid-cols-4 gap-8">

                        {portfolios.map((item) => (

                            <Link to={`/portfolio/${item.id}`} key={item.id}>

                                <div className="group">

                                    {/* CARD IMAGE */}
                                    <div className="
              border border-white/10
              
              rounded
              overflow-hidden
              hover:scale-[1.02]
              transition duration-300
            ">

                                        <img
                                            src={item.heroImage}
                                            className="w-full aspect-square object-fit"
                                        />

                                    </div>


                                    <div className="mt-3">

                                        <h2 className="text-white text-lg">
                                            {item.brand}
                                        </h2>

                                        <p className="text-gray-400 text-sm italic">
                                            Industry : {item.industry}
                                        </p>

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>



            </div>
        </div>
    );
};

export default Portfolio;
