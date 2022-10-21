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
    <div key={pillarData} className="grid [grid-template-rows:auto_48px]">
      <Navigation className="row-start-2" />
      <main className="h-[calc(100vh-48px)] overflow-scroll">
        <div className="flex min-h-[calc(100vh-48px)]">
          <div className="relative aspect-square min-h-[calc(100vh-48px)]">
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
              voluptas eum minima tempore illo dolor impedit quod vel
              perspiciatis reprehenderit harum accusamus hic nesciunt facere,
              commodi fuga placeat! Eaque, exercitationem numquam.
            </p>
          </div>
        </div>
        <div className="flex min-h-[calc(100vh-48px)]">Other content</div>
      </main>
    </div>
  );
};

export default Pillar;

const Navigation = ({ className }: { className?: string }) => {
  return (
    <ul
      className={`flex h-[48px] items-center gap-16  bg-stone-300 px-8 ${className}`}
    >
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      {pillarImages.map((image, i) => (
        <li key={image}>
          <Link href={`/${i + 1}`}>{`Pillar ${i + 1}`}</Link>
        </li>
      ))}
    </ul>
  );
};

import {
  Popover,
  PopoverDescription,
  PopoverDisclosure,
  PopoverHeading,
  usePopoverState,
} from "ariakit/popover";
import { RadioButton, RadioButtonChecked } from "@carbon/icons-react";
import Link from "next/link";
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
