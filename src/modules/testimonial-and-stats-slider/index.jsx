import { groq } from "next-sanity";
import classnames from "classnames";
import Button from "../../components/button/Button";
import Heading from "../../components/heading";
import ReactStars from "react-stars";
import RichText from "../../components/rich-text";
import Slider from "../../components/slider";
import TestimonialStatsCard from "../../components/testimonial-stats-card";
import Icon from "../../components/icon";

export const TESTIMONIAL_AND_STATS_SLIDER = groq`
 statsCards[]{
      ...,
    },
    sliderCards[]{
      ...,
    }
`;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="absolute top-0 right-[41.666667%] z-10" onClick={onClick} >

      <Icon icon="slider-arrow-green" iconHeight={32} iconWidth={32}  otherClasses="hover:scale-110"  />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="absolute top-0 right-[37%] z-10" onClick={onClick} >

<Icon icon="slider-arrow-green" otherClasses="rotate-180 hover:scale-110" iconHeight={32} iconWidth={32} />
    </button>

  );
}

export default function TestimonialAndStatsSlider({
  otherClasses,
  heading,
  button,
  variant,
  statsCards,
  testimonial,
  sliderCards,
}) {
  const testimonialAndStatsSliderClasses = classnames(
    otherClasses,
    "background-gradient-testimonial-and-stats-slider"
  );

  const settings = {
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    dots:true,
    // autoplay:true,
    // autoplaySpeed:2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section
      className={testimonialAndStatsSliderClasses}
      data-testid="testimonial-and-stats-slider"
    >
      <div className="max-w-default mx-auto px-4 lg:px-20 xl:px-108 py-20  lg:pt-6 lg:pb-120 flex flex-col gap-6 ">
        <div className="flex flex-col lg:flex-row justify-between gap-6 items-center">
          <Heading
            type="h3"
            otherClasses={classnames(
              variant === "light" ? "text-blue" : "text-white",
              "capitalize font-aeronik-pro font-normal w-full lg:max-w-760 xl:max-w-full"
            )}
          >
            {heading}
          </Heading>
          <Button {...button} />
        </div>
        <div className="text-white p-10 mt-10 border-gradient-testimonial-and-stats-slider">
          <Slider customSettings={settings} customClass="relative" >
            {sliderCards?.map((node, i) => {
              return <TestimonialStatsCard {...node} key={i} />;
            })}
          </Slider>
        </div>
        <div className="text-white flex w-full flex-col lg:flex-row gap-6 ">
          {Object.keys(testimonial)?.length > 0 && (
            <div className="w-full lg:w-2/4 p-10 border-gradient-testimonial-and-stats-slider flex flex-col gap-20 lg:gap-0 lg:justify-between">
              <div className="flex flex-col gap-6">
                <ReactStars
                  value={testimonial?.rating}
                  count={5}
                  size={20}
                  color1={"#dfeefd"}
                  color2={"#ABF57A"}
                />
                <RichText
                  otherClasses="[&>p]:text-2xl [&>p]:font-aeronik-pro  [&>p]:font-normal [&>p]:capitalize [&>p]:text-white "
                  richText={testimonial?.subText}
                />
                <p className="text-16 leading-6 font-normal font-aeronik-pro text-white">
                  
                  {testimonial?.name}
                </p>
              </div>
              <Button {...testimonial?.button} />
            </div>
          )}
          {statsCards?.length > 0 && (
            <div className="w-full lg:w-2/4 p-10 border-gradient-testimonial-and-stats-slider grid grid-cols-2 gap-20 ">
              {statsCards?.map(({ stats, description }, i) => {
                return (
                  <div
                    key={stats}
                    className="text-white flex flex-col gap-6 border-t-[1px] border-t-blue-400"
                  >
                    <p className="h2 capitalize !text-green-300 pt-6">
                      {stats}
                    </p>

                    <p className="text-white font-aeronik-pro text-16 font-normal leading-6 ">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
