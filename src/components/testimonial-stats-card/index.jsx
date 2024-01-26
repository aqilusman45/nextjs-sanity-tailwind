import { groq } from "next-sanity";
import classnames from "classnames";
import RichText from "../rich-text";
import Button from "../button/Button";
import SvgAnimator from "../svg-animator";

export const fragment = groq`
`;

export default function TestimonialStatsCard({
  otherClasses,
  text,
  button,
  graph,
  onClick
}) {
  const testimonialStatsCardClasses = classnames(
    otherClasses,
    "flex flex-col lg:flex-row gap-6 w-full items-center"
  );

  return (
    <div
      className={testimonialStatsCardClasses}
      data-testid="testimonial-stats-card"
    >
      <div className="w-full lg:w-2/4 text-white px-2 xl:px-5 pt-20 lg:pt-0 ">
        
        <SvgAnimator type={graph} otherClasses="" />
      </div>
      <div className="w-full relative lg:w-2/4 px-0 lg:px-8 xl:px-16 flex flex-col mt-14 gap-6 lg:gap-10 h-full">
        
        <RichText
          richText={text}
          otherClasses="[&>p]:text-white [&>p]:font-aeronik-pro [&>p]:header-3 [&>p]:font-normal [&>p]:capitalize "
        />
        <Button {...button}  />
      </div>
    </div>
  );
}
