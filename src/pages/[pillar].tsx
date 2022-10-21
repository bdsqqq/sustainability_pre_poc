import type {
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";
import { pillarImages } from "./";

const Pillar = ({
  pillarData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <div className="flex min-h-screen">
        <div className="relative aspect-square md:min-h-screen">
          <figure className="h-full w-full">
            <img
              className="h-full w-full"
              src={pillarData}
              alt="abstract image"
            />
          </figure>
          <Hotspot
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium ab voluptates nostrum excepturi odio consequatur
                similique, unde sunt architecto ipsa odit ex quia corporis
                itaque blanditiis commodi mollitia, aperiam quibusdam.
              </p>
            }
            coords={{ x: 10, y: 10 }}
          />
          <Hotspot
            content={
              <figure>
                <img
                  className="h-full w-full"
                  src={
                    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  }
                  alt="abstract image"
                />
              </figure>
            }
            coords={{ x: 30, y: 50 }}
          />
          <Hotspot
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium ab voluptates nostrum excepturi odio consequatur
                similique, unde sunt architecto ipsa odit ex quia corporis
                itaque blanditiis commodi mollitia, aperiam quibusdam.
              </p>
            }
            coords={{ x: 90, y: 90 }}
          />
        </div>
        <div className="flex w-fit flex-grow-0 flex-col gap-16 p-8">
          <h1 className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            atque at recusandae nulla libero sapiente culpa corrupti provident
            voluptas eum minima tempore illo dolor impedit quod vel perspiciatis
            reprehenderit harum accusamus hic nesciunt facere, commodi fuga
            placeat! Eaque, exercitationem numquam.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Pillar;

import {
  Popover,
  PopoverDescription,
  PopoverDisclosure,
  PopoverHeading,
  usePopoverState,
} from "ariakit/popover";
import { RadioButton, RadioButtonChecked } from "@carbon/icons-react";
const Hotspot = ({
  coords,
  content,
}: {
  coords: { x: number; y: number };
  content: JSX.Element;
}) => {
  const popover = usePopoverState({
    overlap: true,
    gutter: -40,
    placement: "bottom-end",
  });

  return (
    <>
      <PopoverDisclosure
        state={popover}
        className="absolute z-10 max-w-sm rounded-full bg-stone-800 p-2 text-stone-200"
        style={{ top: `${coords.y}%`, left: `${coords.x}%` }}
      >
        {popover.open ? <RadioButton /> : <RadioButtonChecked />}
      </PopoverDisclosure>
      <Popover
        state={popover}
        className="max-w-sm bg-stone-800 p-2 py-2 text-stone-200"
        style={{
          paddingTop: popover.currentPlacement.includes("bottom")
            ? "48px"
            : "1rem",
          paddingBottom: popover.currentPlacement.includes("top")
            ? "48px"
            : "1rem",
        }}
      >
        <PopoverHeading>Anything goes here</PopoverHeading>
        <PopoverDescription>
          Text; images; videos; technically an entire page could be here.
        </PopoverDescription>
        {content}
      </Popover>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: pillarImages.map((_, i) => ({ params: { pillar: `${i + 1}` } })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const pillar = pillarImages.find(
    (_, i) => (i + 1).toString() == context.params?.pillar
  );
  if (!pillar) {
    console.log(`couldn't find data for pillar ${context.params?.pillar}`);
  }

  return {
    // Passed to the page component as props
    props: { pillarData: pillar },
  };
};
