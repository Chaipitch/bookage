import Head from "next/head";
import Navbar from "../components/Navbar";
import { ParallaxBanner } from "react-scroll-parallax";
import About from "@/components/About";
import Example from "@/components/Example";
import Writer from "@/components/Writer";
import Devices from "@/components/Devices";

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
          { image: "/public/images/banner.jpg", speed: -15 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0  flex flex-col items-center justify-center h-[773px] bg-[url('../public/images/banner.jpg')] bg-no-repeat  bg-center bg-cover">
                <h1 className="text-[36px] font-thin text-center text-white pt-24 pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <div className="flex flex-col space-y-2">
                  <button className="bg-blueCustom px-24 py-3 ml-2 rounded-md">
                    Purchase $8
                  </button>
                  <button className="bg-white px-24 py-3 ml-2 rounded-md text-blueCustom">
                    Free example
                  </button>
                </div>
              </div>
            ),
          },
        ]}
        className="aspect-[0.66/1]"
      />
      <About />
      <Example />

      <ParallaxBanner
        layers={[
          { image: "/public/images/bg_testimonial.jpg", speed: -15 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0  flex flex-col items-center justify-center h-[] bg-[url('../public/images/bg_testimonial.jpg')] bg-no-repeat bg-cover bg-center">
                <h1 className="text-xl font-thin text-center text-white  pb-4">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim”
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            ),
          },
        ]}
        className="aspect-[0.6/1]"
      />
      <Writer />
      <Devices />
    </div>
  );
}
