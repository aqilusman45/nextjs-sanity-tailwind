import { groq } from "next-sanity";
import classnames from "classnames";
import Button from "../../components/button/Button";
import Heading from "../../components/heading";

export const TESTIMONIAL_AND_STATS_SLIDER = groq`
 statsCards[]{
      ...,
    },
    sliderCards[]{
      ...,
    }
`;

export default function TestimonialAndStatsSlider({ otherClasses,heading,button,variant,statsCards }) {
  const testimonialAndStatsSliderClasses = classnames(otherClasses,"background-gradient-testimonial-and-stats-slider");

  return (
    <section
      className={testimonialAndStatsSliderClasses}
      data-testid="testimonial-and-stats-slider"
    >
      <div className="px-108 max-w-default mx-auto pt-6 pb-120 flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row justify-between gap-6 items-center">
          <Heading
            type="h3"
            otherClasses={classnames( variant==="light"?"text-blue":"text-white", "capitalize font-aeronik-pro font-normal w-full lg:max-w-760 xl:max-w-full")}
          >
            {heading}
          </Heading>
          <Button {...button}  />
        </div>
        <div className="text-white p-10 mt-10 border-gradient-testimonial-and-stats-slider">Slider</div>
        <div className="text-white flex w-full lg:flex-row gap-6 ">
          <div className="w-2/4 p-10 border-gradient-testimonial-and-stats-slider">col1</div>
          <div className="w-2/4 p-10 border-gradient-testimonial-and-stats-slider grid grid-cols-2 ">{
          statsCards?.map((_,i)=>{
            return (
              <div className="text-white">i</div>
            )
          })
          }</div>
        </div>
      </div>

    </section>
  );
}
