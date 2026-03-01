import { useParams } from "react-router-dom";
import portfolios from "../data/portfolios";
import backgroundimg from "../assets/background.png";
import NewNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const PortfolioDetail = () => {
    const { id } = useParams();
    const data = portfolios.find(p => p.id === id);
    const item = portfolios.find(p => p.id === id);

    if (!data) return <h1 className="text-white">Not Found</h1>;

    return (
        <div className="relative bg-n0orepeat bg-cover  bg-[center_-2000px]   "
            style={{ backgroundImage: `url(${backgroundimg})` }}>

            <div className="bg-black/60 min-h-screen  ">

                <NewNavbar />

                {/* ===== HERO SECTION ===== */}
                <section className="pt-30 text-center">

                    <div className="relative max-w-[900px] mx-auto p-10 mx-4 sm:mx-auto">

                        {/* ===== DOTTED FRAME ===== */}
                        <div
                            className="absolute inset-0"
                            style={{
                                border: "2.2px dashed #9ca3af",
                                borderDasharray: "64 40"
                            }}
                        ></div>
                        {/* CORNER BOXES */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-300"></div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-300"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-300"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gray-300"></div>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300"></div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300"></div>




                        <div className="flex flex-col items-center relative z-10">

                            {/* BRAND NAME */}
                            <h1 className="text-[38px] sm:text-[70px] md:text-[70px] font-extrabold tracking-normal text-gray-200">
                                {data.brand}
                            </h1>

                            {/* ABOUT / RESTAURANT TEXT */}
                            <div className="w-full max-w-[500px] flex justify-end mt-[-20px] sm:mt-[-34px]">
                                <p
                                    className={`
    ${data.theme.colour}
    text-2xl sm:text-4xl md:text-4xl mr-2 rotate-[-6deg]
  `}
                                    style={{
                                        fontFamily: "splash",
                                    }}
                                >
                                    {data.about}
                                </p>
                            </div>

                        </div>

                    </div>



                    {/* banner image */}
                    <img
                        src={data.banner1}
                        className="mx-auto w-[calc(100%-32px)] sm:w-[900px]  rounded-xl m-12 shadow-2xl"
                    />

                    {/* ==============Brand identity============================= */}
                    <div className="relative inline-block m-10">

                        {/* DOTTED BORDER */}
                        <div
                            className="absolute inset-0 rounded-md"
                            style={{
                                border: "2.2px dashed #9ca3af",
                                borderDasharray: "64 40"
                            }}
                        ></div>

                        {/* CORNER BOXES */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-300"></div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-300"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-300"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gray-300"></div>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300"></div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300"></div>

                        {/* TEXT */}
                        <h1
                            className={`px-6 sm:px-10 py-4 sm:py-6 text-[28px] sm:text-[70px] md:text-[70px] font-extrabold tracking-normal ${item.theme.colour}`}
                        >
                            {item.category}
                        </h1>

                    </div>

                    {/* Brand Identity  */}
                    {data.banner2 && (
                        Array.isArray(data.banner2)
                            ? data.banner2.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Banner ${index + 1}`}
                                    className="mx-auto w-[calc(100%-32px)] sm:w-[1400px] rounded-xl shadow-2xl mb-12"
                                />
                            ))
                            : (
                                <img
                                    src={data.banner2}
                                    alt="Banner 2"
                                    className="mx-auto w-[calc(100%-32px)] sm:w-[1400px] rounded-xl shadow-2xl mb-12"
                                />
                            )
                    )}
                </section>







                {/* ===== SOCIAL MEDIA ===== */}
                {(data.socialMedia && (data.socialMedia && data.socialMedia.length > 0)) && (

                    <section className="max-w-8xl mx-auto m-20">

                        <div className="relative max-w-[600px] mx-4 sm:m-auto p-10 ">

                            {/* ===== DOTTED FRAME ===== */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    border: "2.2px dashed #9ca3af",
                                    borderDasharray: "64 40"
                                }}
                            ></div>

                            {/* CORNER BOXES */}
                            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-300"></div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-300"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-300"></div>
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gray-300"></div>
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300"></div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300"></div>

                            <div className="flex flex-col items-center relative z-10">

                                {/* BRAND NAME */}
                                <h1
                                    className={`
bg-gradient-to-r 
${data.theme.light}
${data.theme.dark}
bg-clip-text text-transparent
text-[42px] sm:text-[70px] font-extrabold tracking-normal
`}
                                >
                                    Social Media
                                </h1>

                            </div>

                        </div>




                        <img
                            src={data.socialMedia}
                            className="mx-auto w-[calc(100%-32px)] sm:w-[1400px] m-12 rounded-xl shadow-2xl"
                        />

                    </section>

                )}




                {/* ===== UI UX ===== */}
                {data?.uiux?.length > 0 && (
                    <section className="max-w-8xl mx-auto mt-20">

                        <div className="relative max-w-[600px] mx-4 sm:mx-auto p-10">

                            <div
                                className="absolute inset-0"
                                style={{
                                    border: "2.2px dashed #9ca3af",
                                    borderDasharray: "64 40"
                                }}
                            />

                            {/* corners */}
                            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-300"></div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-300"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-300"></div>
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gray-300"></div>
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300"></div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300"></div>

                            <div className="flex flex-col items-center relative z-10">
                                <h1
                                    className={`
            bg-gradient-to-r 
            ${data.theme.light}
            ${data.theme.dark}
            text-${item.theme.colour}
            bg-clip-text text-transparent
            text-[28px] sm:text-[70px] font-extrabold tracking-normal
          `}
                                >
                                    UI UX
                                </h1>
                            </div>

                        </div>



                        {/* IMPORTANT: show all uiux images */}
                        {data.uiux.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt="UI UX"
                                className="mx-auto w-[calc(100%-32px)] sm:w-[1400px] mt-12 rounded-xl shadow-2xl mb-12"
                            />
                        ))}

                    </section>
                )}



                <div className="relative max-w-4xl mx-4 sm:mx-auto my-20 p-12">

                    {/* ===== DOTTED FRAME ===== */}
                    <div
                        className="absolute inset-0"
                        style={{
                            border: "2.2px dashed #9ca3af",
                            borderDasharray: "64 40"
                        }}
                    ></div>
                    {/* CORNER BOXES */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-300"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gray-300"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gray-300"></div>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300"></div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300"></div>




                    <div className="flex flex-col  items-center relative z-10">

                        {/* BRAND NAME */}
                        <h1 className="text-[18px] sm:text-[70px] text-white
  bg-clip-text text-transparent md:text-[70px] font-extrabold tracking-normal text-gray-200 text-center">
                            Thanks For Scrolling
                        </h1>




                    </div>

                </div>

                <div className="w-full flex justify-center mt-4 px-4">

                    <p
                        className={`
    ${data.theme.colour}
    text-3xl sm:text-4xl md:text-5xl mr-2 text-center
  `}
                        style={{
                            fontFamily: "splash",
                        }}
                    >
                        Lets Work Together
                    </p>
                </div>

                <div className="mt-10 flex justify-center">
                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-medium hover:scale-105 transition">
                        <span><img
                            src="/star.png"
                            alt="Floww Studios Logo"
                            className="h-12 w-auto object-contain"
                        /></span>Schedule a call ▶
                    </button>

                </div>
            </div>


        </div>
    );
};

export default PortfolioDetail;
