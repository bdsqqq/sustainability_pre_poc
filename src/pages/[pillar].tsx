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
        <figure className="aspect-square md:min-h-screen">
          <img
            className="h-full w-full"
            src={pillarData}
            alt="abstract image"
          />
        </figure>
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
