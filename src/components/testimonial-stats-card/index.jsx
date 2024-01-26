import { groq } from "next-sanity";
import classnames from "classnames";
import RichText from "../rich-text";
import Button from "../button/Button";

export const fragment = groq`
`;

export default function TestimonialStatsCard({
  otherClasses,
  text,
  button,
  graph,
}) {
  const testimonialStatsCardClasses = classnames(
    otherClasses,
    "flex flex-col lg:flex-row gap-6 w-full"
  );

  return (
    <div
      className={testimonialStatsCardClasses}
      data-testid="testimonial-stats-card"
    >
      <div className="w-full lg:w-2/4 text-white px-5 ">Graphics</div>
      <div className="w-full lg:w-2/4 px-16 flex flex-col mt-14 gap-10 h-full">
        <RichText
          richText={text}
          otherClasses="[&>p]:text-white [&>p]:font-aeronik-pro [&>p]:text-32-less [&>p]:font-normal [&>p]:capitalize "
        />
        <Button {...button} />
      </div>
    </div>
  );
}
