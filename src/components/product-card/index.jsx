import classnames from "classnames";
import {  useEffect, useRef, useState } from "react";

import Lottie from "react-lottie-player";

import Button from "../button/Button";
import Heading from "../heading";
import RichText from "../rich-text";

export default function ProductCard({
  otherClasses,
  lottieFile: { url },
  subText,
  heading,
  button,
  trigger,
  id,
}) {
  const productCardClasses = classnames(
    otherClasses,
    "w-full p-6 product-card-component flex flex-col rounded group "
  );
  const scrollRef = useRef(null);
  const [animationPosition, setAnimationPosition] = useState(28);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    function handleScroll(e) {
      console.log(e);
      setAnimationPosition(Math.max((0, e.target.scrollTop - 50) * 0.3));
    }
    const scroller = scrollRef.current;
    scroller.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scroller.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id={id}
      ref={scrollRef}
      className={productCardClasses}
      data-testid="product-card"
    >
      <div className="flex justify-end">
        <Lottie
          path={url}
          play={trigger}
          loop={false}
          goTo={animationPosition}
          className={classnames("w-[160px] h-[160px]")}
        />
      </div>

      <Heading type="h3" otherClasses="mt-4 mb-4 flex-grow">
        {heading}
      </Heading>
      <div className="products-line-gradient h-[1px] w-full" />
      <RichText richText={subText} otherClasses="global-richtext-light my-6" />
      <Button {...button} mode="light" />
    </div>
  );
}
