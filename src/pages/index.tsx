/* 
# Home page 
  100vh image indicating scroll
  -
  4 pillars, images are full heigh and cropped horizontally. Opacity 40%, by default first one is opacity 100%. On hover the hovered one is 100% opacity and the others are 40%
  -
  Persistent bottom nav with tabs equivalent to 4 pillars

# Pillar page
  100vh image, collapsible cards floating with info
  -
  Persistent bottom nav with tabs equivalent to 4 pillars
*/

import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

export const pillarImages = [
  "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
];

const Home: NextPage = () => {
  return (
    <>
      <main>
        <section
          className={`relative bg-[url(https://images.unsplash.com/photo-1568438350390-886953faad1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)] bg-cover bg-center`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-transparent" />
          <div className="relative z-10 flex h-screen w-2/3 flex-col justify-center gap-4 p-16 text-stone-200">
            <h1 className="text-4xl font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              similique.
            </h1>
            <a className="w-fit" href="#pillars">
              Scroll down
            </a>
          </div>
        </section>

        <ImagesSection />
      </main>
      {/* 4 pillars, images are full heigh and cropped horizontally. Opacity 40%, by default first one is opacity 100%. On hover the hovered one is 100% opacity and the others are 40% */}

      {/* Persistent bottom nav with tabs equivalent to 4 pillars */}
    </>
  );
};

const ImagesSection = () => {
  const [cols, setCols] = useState(4);

  return (
    <section id="pillars" className="flex max-h-screen flex-col gap-8 p-16">
      <div className="relative">
        <h2 className="w-1/3 text-5xl">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <div className="absolute -bottom-8 right-0 flex gap-2">
          <button
            className="p-2 disabled:cursor-not-allowed disabled:opacity-30"
            disabled={cols === 4}
            onClick={() => {
              if (cols < 4) {
                setCols((prev) => prev + 1);
              }
            }}
          >
            +
          </button>
          <button
            className="p-2 disabled:cursor-not-allowed disabled:opacity-30"
            disabled={cols === 1}
            onClick={() => {
              if (cols > 1) {
                setCols((prev) => prev - 1);
              }
            }}
          >
            -
          </button>
        </div>
      </div>
      <div
        className="group grid h-[80vh] gap-4 overflow-hidden"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {pillarImages
          .filter((_, i) => i < cols)
          .map((image, i) => (
            <Link href={`${i + 1}`} passHref key={image}>
              <a
                className={`filter transition-all duration-300 hover:!opacity-100 hover:!grayscale-0 focus:!opacity-100 focus:!grayscale-0 group-focus-within:opacity-40 group-focus-within:grayscale group-hover:opacity-40 group-hover:grayscale ${
                  i !== 0 && "opacity-40 grayscale"
                }`}
              >
                <figure className="h-full">
                  <img
                    className="h-full object-cover object-center"
                    src={image}
                    alt="abstract image"
                  />
                </figure>
              </a>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Home;
