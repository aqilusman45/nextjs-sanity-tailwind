import { groq } from "next-sanity";
import classnames from "classnames";
import Button from "../../components/button/Button";
import Heading from "../../components/heading";
import ReactStars from "react-stars";
import RichText from "../../components/rich-text";
import Slider from "../../components/slider";
import TestimonialStatsCard from "../../components/testimonial-stats-card";
import Icon from "../../components/icon";
import { useEffect, useRef, useState } from "react";

export const TESTIMONIAL_AND_STATS_SLIDER = groq`
 statsCards[]{
      ...,
    },
    sliderCards[]{
      ...,
    }
`;

// function NextArrow(props) {
//   const { onClick } = props
//   return (
//     <button
//       className="absolute right-[200px] lg:right-[35%] xl:right-[37%] top-0 z-10 "
//       onClick={onClick}
//     >
//       <Icon
//         icon="slider-arrow-green"
//         iconHeight={32}
//         iconWidth={32}
//         otherClasses="rotate-180 hover:scale-110 "
//       />
//     </button>
//   )
// }

// function PrevArrow(props) {
//   const { onClick } = props
//   return (
// <button className="absolute right-[400px] lg:right-[40%] xl:right-[41.666667%] top-0 z-10" onClick={onClick}>
//   <Icon
//     icon="slider-arrow-green"
//     otherClasses="hover:scale-110"
//     iconHeight={32}
//     iconWidth={32}
//   />
// </button>
//   )
// }

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
  const [index, setIndex] = useState(0);

  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  function NextArrow(props) {
    const { onClick, currentSlide } = props;
    useEffect(() => {
      setIndex(currentSlide);
    }, [currentSlide]);
    return null;
  }
  function PrevArrow(props) {
    return null;
  }

  const settings = {
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    // autoplay:true,
    // autoplaySpeed:2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  console.log({
    testimonial,
  });
  return (
    <section
      className={testimonialAndStatsSliderClasses}
      data-testid="testimonial-and-stats-slider"
    >
      <div className="mx-auto flex max-w-default flex-col gap-6 px-4  py-20 lg:px-20 lg:pb-120 lg:pt-6 xl:px-108 ">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <Heading
            type="h3"
            otherClasses={classnames(
              variant === "light" ? "text-blue" : "text-white",
              "capitalize font-aeronik-pro font-normal w-full text-center lg:text-start lg:max-w-760 xl:max-w-full"
            )}
          >
            {heading}
          </Heading>
          <Button {...button} />
        </div>
        <div className="border-gradient-testimonial-and-stats-slider mt-10 p-8 lg:p-4 xl:p-10 text-white">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 w-full">
            <div className="w-2/4 text-white"></div>
            <div className="w-2/4 -mb-10 px-0 lg:px-8 xl:px-16 flex gap-4">
              <button
                className="z-10 hover:scale-110"
                onClick={() => goToSlide(index - 1)}
              >
                <Icon
                  icon="slider-arrow-green"
                  iconHeight={32}
                  iconWidth={32}
                />
              </button>
              <button
                className="z-10 rotate-180 hover:scale-110"
                onClick={() => goToSlide(index + 1)}
              >
                <Icon
                  icon="slider-arrow-green"
                  otherClasses=""
                  iconHeight={32}
                  iconWidth={32}
                />
              </button>
            </div>
          </div>
          <Slider
            refs={sliderRef}
            customSettings={settings}
            customClass="relative testimonial-slider"
          >
            {sliderCards?.map((node, i) => {
              return (
                <TestimonialStatsCard onClick={goToSlide} {...node} key={i} />
              );
            })}
          </Slider>
        </div>
        {(statsCards?.length > 0 ||
          (Object.keys(testimonial)?.length > 0 && testimonial?.rating)) && (
          <div className="flex w-full flex-col gap-6 text-white lg:flex-row ">
            {Object.keys(testimonial)?.length > 0 && testimonial?.rating && (
              <div className="border-gradient-testimonial-and-stats-slider flex w-full flex-col gap-20  p-8 lg:p-10 lg:w-2/4 lg:justify-between lg:gap-0">
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
                  <p className="font-aeronik-pro text-16 font-normal leading-6 text-white">
                    {testimonial?.name}
                  </p>
                </div>
                {testimonial?.button?.slug?.current && (
                  <Button {...testimonial?.button} />
                )}
              </div>
            )}
            {statsCards?.length > 0 && (
              <div
                className={classnames(
                  "border-gradient-testimonial-and-stats-slider grid w-full p-8 lg:p-10 ",
                  !Object.keys(testimonial)?.length > 0 && !testimonial?.rating
                    ? "lg:w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 "
                    : "lg:w-2/4  grid-cols-1 md:grid-cols-2 gap-20"
                )}
              >
                {statsCards?.map(({ stats, description }, i) => {
                  return (
                    <div
                      key={stats}
                      className="flex flex-col gap-6 border-t-[1px] border-t-blue-400 text-white"
                    >
                      <p className="h2 pt-6 capitalize !text-green-300">
                        {stats}
                      </p>

                      <p className="font-aeronik-pro text-16 font-normal leading-6 text-white ">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
