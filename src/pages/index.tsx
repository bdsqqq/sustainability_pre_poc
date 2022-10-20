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
            <a href="#">Scroll down </a>
          </div>
        </section>
      </main>
      {/* 4 pillars, images are full heigh and cropped horizontally. Opacity 40%, by default first one is opacity 100%. On hover the hovered one is 100% opacity and the others are 40% */}

      {/* Persistent bottom nav with tabs equivalent to 4 pillars */}
    </>
  );
};

export default Home;
