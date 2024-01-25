import { groq } from "next-sanity";
import classnames from "classnames";
import Image from "next/image";
import Heading from "../../components/heading";
import Button from "../../components/button/Button";
import NetaceaDifferenceCard from "../../components/netacea-difference-card";

export const NETACEA_DIFFERENCE = groq`
 cards[]{
      ...,
        "image":image.asset->{
   ...,
      },
    }
`;

export default function NetaceaDifferenceSection({
  otherClasses,
  heading,
  button,
  cards,
  variant,
}) {
  const netaceaDifferenceSectionClasses = classnames(
    otherClasses,
    variant === "light"
      ? "background-gradient-difference-section-light"
      : "background-gradient-difference-section",
    " relative w-full"
  );

  return (
    <section
      className={netaceaDifferenceSectionClasses}
      data-testid="netacea-difference-section"
    >
      {variant === "light" ? (
        <Image
          src="/images/difference-section-background-light.png"
          width={1229}
          height={604}
          className="w-3/4 h-full absolute top-0 right-0"
        />
      ) : (
        <Image
          src="/images/difference-section-background.png"
          width={1229}
          height={604}
          className="w-3/4 h-full absolute top-0 right-0"
        />
      )}
      <div className="max-w-default mx-auto px-4 lg:px-20 xl:px-108 py-20 lg:pt-40 lg:pb-30 relative">
        <div className="flex flex-col lg:flex-row justify-between gap-6 items-center">
          <Heading
            type="h3"
            otherClasses={classnames( variant==="light"?"text-blue":"text-white", "capitalize font-aeronik-pro font-normal w-full lg:max-w-760 xl:max-w-full")}
          >
            {heading}
          </Heading>
          <Button {...button}  />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pt-14">
          {cards?.map((node, index) => {
            return <NetaceaDifferenceCard {...node} key={index} variant={variant} />;
          })}
        </div>
      </div>
    </section>
  );
}
