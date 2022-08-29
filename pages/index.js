import Head from "next/head";
import Navbar from "../components/Navbar";
import { ParallaxBanner } from "react-scroll-parallax";
import About from "@/components/About";
import Example from "@/components/Example";
import Writer from "@/components/Writer";
import Devices from "@/components/Devices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bookage</title>
        <meta name="description" content="Bookage website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ParallaxBanner
        layers={[
          { image: "#", speed: -25 },
          {
            speed: -15,
            children: (
              <div
                id="home"
                className="absolute inset-0  flex flex-col items-center justify-center bg-[url('../public/images/banner.jpg')] bg-no-repeat bg-bottom  bg-cover"
              >
                <h1 className="text-[34px] mx-[27px] text-center text-white pt-24 pb-4 font-DroidSerif md:w-[660px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                  <button className="bg-blueCustom px-[135px] py-[14px] text-white font-Roboto md:px-[40px] md:py-[13px]">
                    Purchase $8
                  </button>
                  <button className="bg-white text-blueCustom px-[135px] py-[14px] font-Roboto md:px-[40px]  md:py-[13px]">
                    Free example
                  </button>
                </div>
              </div>
            ),
          },
        ]}
        className="aspect-[0.6/1] md:aspect-[0.9/1] lg:aspect-[1.2/1] xl:aspect-[2/1]"
      />
      <About />
      <Example />

      <ParallaxBanner
        layers={[
          { image: "#", speed: -15 },
          {
            speed: -5,
            children: (
              <div className="absolute inset-0  flex flex-col items-center justify-center h-[] bg-[url('../public/images/bg_testimonial.jpg')] bg-no-repeat bg-cover bg-center">
                <h1 className="text-[24px] ml-[30px] mr-[14px] font-thin text-center text-white  pb-4 font-DroidSerif lg:w-[700px]">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim”
                </h1>
                <p className="font-RobotoL text-white text-[19px]">
                  Lorem ipsum dolor sit ametur
                </p>
              </div>
            ),
          },
        ]}
        className="aspect-[0.6/1] md:aspect-[2/1] lg:aspect-[4/1]"
      />
      <Writer />
      <Devices />
      <Footer />
    </div>
  );
}
