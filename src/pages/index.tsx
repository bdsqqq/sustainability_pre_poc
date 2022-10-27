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

import { ArrowDown } from "@carbon/icons-react";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

export const pillars = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
    hotspots: [
      {
        content: (
          <p>
            <p>1-1</p>
            <p>1-2</p>
            <p>
              <p>1-3-1</p>
              <p>1-3-2</p>
            </p>
          </p>
        ),
        coords: {
          x: 10,
          y: 30,
        },
      },
      {
        content: (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
              aliquam itaque suscipit.
            </p>
            <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
          </div>
        ),
        coords: {
          x: 90,
          y: 40,
        },
      },
      {
        content: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
            aliquam itaque suscipit.
          </p>
        ),
        coords: {
          x: 20,
          y: 90,
        },
      },
    ],
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    hotspots: [
      {
        content: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
            aliquam itaque suscipit.
          </p>
        ),
        coords: {
          x: 10,
          y: 30,
        },
      },
      {
        content: (
          <div>
            <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
              aliquam itaque suscipit.
            </p>
          </div>
        ),
        coords: {
          x: 40,
          y: 40,
        },
      },
      {
        content: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
            aliquam itaque suscipit.
          </p>
        ),
        coords: {
          x: 20,
          y: 90,
        },
      },
    ],
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    hotspots: [
      {
        content: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
            aliquam itaque suscipit.
          </p>
        ),
        coords: {
          x: 10,
          y: 30,
        },
      },
      {
        content: (
          <div>
            <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
              aliquam itaque suscipit.
            </p>
          </div>
        ),
        coords: {
          x: 40,
          y: 40,
        },
      },
      {
        content: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
            aliquam itaque suscipit.
          </p>
        ),
        coords: {
          x: 20,
          y: 90,
        },
      },
    ],
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    hotspots: [
      {
        content: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
            aliquam itaque suscipit.
          </p>
        ),
        coords: {
          x: 10,
          y: 30,
        },
      },
      {
        content: (
          <div>
            <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
              aliquam itaque suscipit.
            </p>
          </div>
        ),
        coords: {
          x: 40,
          y: 40,
        },
      },
      {
        content: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            explicabo quibusdam, fuga doloremque maiores eos fugit obcaecati
            aliquam itaque suscipit.
          </p>
        ),
        coords: {
          x: 20,
          y: 90,
        },
      },
    ],
  },
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
              <span className="flex items-center gap-2">
                Scroll down <ArrowDown className="transform animate-bounce" />
              </span>
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
    <section id="pillars" className="flex max-h-screen flex-col p-24">
      <div className="relative">
        <div className="absolute bottom-0 right-0 flex gap-2">
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
        className="group pointer-events-none grid h-[100vh] gap-4"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {pillars
          .filter((_, i) => i < cols)
          .map((pillar, i) => (
            <Link
              className={`pointer-events-auto h-[85vh] w-full overflow-hidden rounded shadow-stone-900 filter transition-all duration-300 hover:scale-105 hover:!opacity-100 hover:!blur-0 hover:!drop-shadow-2xl hover:!saturate-100 focus:scale-105 focus:!opacity-100 focus:!blur-0 focus:drop-shadow-2xl focus:!saturate-100 group-focus-within:opacity-40 group-focus-within:blur-sm group-focus-within:drop-shadow-none group-focus-within:saturate-50 group-hover:opacity-40 group-hover:blur-sm group-hover:drop-shadow-none group-hover:saturate-50 ${
                i !== 0 &&
                "scale-100 opacity-40 blur-sm drop-shadow-none saturate-50"
              }`}
              href={`${i + 1}`}
              passHref
              key={pillar.imgUrl}
            >
              <figure className="h-full w-full">
                <img
                  className="h-full w-full object-cover object-center"
                  src={pillar.imgUrl}
                  alt="abstract image"
                />
              </figure>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Home;
