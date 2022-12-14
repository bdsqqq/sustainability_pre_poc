import type {
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";
import { pillars } from "./";

const Pillar = ({
  pillarData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const pillar = superjson.parse<typeof pillars[number]>(pillarData);

  const recurse = (element: JSX.Element) =>
    Array.isArray(element.props.children)
      ? element.props.children.map((child: JSX.Element) => recurse(child))
      : React.cloneElement(element);

  return (
    <div key={pillar?.imgUrl} className="grid [grid-template-rows:auto_48px]">
      <Navigation className="row-start-2" />
      <main className="h-[calc(100vh-48px)] overflow-scroll">
        <div className="flex min-h-[calc(100vh-48px)]">
          <div className="relative aspect-square min-h-[calc(100vh-48px)]">
            <figure className="h-full w-full">
              <img
                className="h-full w-full"
                src={pillar?.imgUrl}
                alt="abstract image"
              />
            </figure>
            {pillar?.hotspots.reverse().map((hotspot, i) => (
              <Hotspot
                key={i}
                content={recurse(hotspot.content)}
                coords={hotspot.coords}
              />
            ))}
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
  const { asPath } = useRouter();

  return (
    <ul
      className={`flex h-[48px] items-center gap-16  bg-stone-300 px-8 ${className}`}
    >
      <li>
        <Link
          style={{ textDecoration: asPath == "/" ? "underline" : "none" }}
          href={"/"}
        >
          Home
        </Link>
      </li>
      {pillars.map((pillar, i) => (
        <div key={pillar.imgUrl} className="flex items-center gap-2">
          <li>
            <Link
              style={{
                textDecoration: asPath == `/${i + 1}` ? "underline" : "none",
              }}
              href={`/${i + 1}`}
            >{`Pillar ${i + 1}`}</Link>
          </li>
          {asPath == `/${i + 1}` &&
            pillar.hotspots.map((hotspot) => (
              <RadioButton key={`${hotspot.coords.x}_${hotspot.coords.y}`} />
            ))}
        </div>
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
import { useRouter } from "next/router";
const Hotspot = ({
  coords,
  content,
}: {
  coords: { x: number; y: number };
  content: JSX.Element;
}) => {
  const popover = usePopoverState({
    animated: true,
    overlap: true,
    shift: 16,
    gutter: -16,
    placement: "bottom-end",
  });

  return (
    <>
      <PopoverDisclosure
        state={popover}
        className="absolute max-w-sm rounded-full bg-stone-800 p-2 text-stone-200 aria-expanded:z-10"
        style={{ top: `${coords.y}%`, left: `${coords.x}%` }}
      >
        {popover.open ? <RadioButton /> : <RadioButtonChecked />}
      </PopoverDisclosure>
      <Popover
        state={popover}
        data-position={popover.currentPlacement}
        className="relative max-h-[40vh] max-w-sm scale-0 transform overflow-auto bg-stone-800 p-2 py-2 text-stone-200 opacity-0 transition-all data-[position=bottom-end]:origin-top-right data-[position=bottom-start]:origin-top-left data-[position=top-end]:origin-bottom-right data-[position=top-start]:origin-bottom-left data-[enter]:scale-100 data-[enter]:opacity-100"
        style={{
          paddingTop: popover.currentPlacement.includes("bottom")
            ? "24px"
            : "1rem",
          paddingBottom: popover.currentPlacement.includes("top")
            ? "24px"
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
    paths: pillars.map((_, i) => ({ params: { pillar: `${i + 1}` } })),
    fallback: false, // can also be true or 'blocking'
  };
};

import superjson from "superjson";
import React from "react";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const pillar = pillars.find(
    (_, i) => (i + 1).toString() == context.params?.pillar
  );
  if (!pillar) {
    console.log(`couldn't find data for pillar ${context.params?.pillar}`);
  }

  return {
    // Passed to the page component as props
    props: { pillarData: superjson.stringify(pillar) },
  };
};
