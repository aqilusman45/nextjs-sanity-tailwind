import classnames from "classnames";
import { groq } from "next-sanity";
import ReactPlayer from "react-player";

import Heading from "../../components/heading";
import Icon from "../../components/icon";
import { useState } from "react";
import ModalComponent from "../../components/modal-component";
import { ReactComponent as CancelModalIcon } from "icons/cancel-modal.svg";

export const VIDEO_WITH_SECTIO_FRAGMET = groq`
   _type == 'videoWithTextSection' =>{
    ...,
    "backVideo":backVideo.asset->{
      ...,
    }
  }
`;

export default function VideoWithSection({
  otherClasses,
  heading,
  videoUrl,
  backVideo,
  videoTitle,
  _id,
}) {
  const videoWithSectionClasses = classnames(
    otherClasses,
    "relative video-with-text-container"
  );
  const [show, setShow] = useState(false);

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <section
      id={_id}
      className={videoWithSectionClasses}
      data-testid="video-with-section"
    >
      <div className="relative mx-auto w-full max-w-default px-4 lg:px-6">
        <div className="video-inner-container relative flex flex-col items-center gap-10 px-4 py-20 lg:flex-row lg:px-20 lg:py-0">
          <video
            autoPlay
            controls={false}
            playsInline
            loop
            muted
            src={backVideo?.url}
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="relative w-full lg:w-2/4">
            <Heading type="h2" otherClasses={classnames("text-white")}>
              {heading}
            </Heading>
          </div>
          <div className="4 relative z-10 w-full lg:h-710 lg:w-2/4 lg:py-20">
            <button onClick={()=>setShow(true)} class="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] videoPlay_wrapper">
              <div class="videoPlay">
                <div class="videoPlay_inner_wrapper">
                  <div class="videoPlay_inner"></div>
                </div>
                <svg
                  class="icon_videoPlay"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.5442 67.0885C52.0702 67.0885 67.0885 52.0702 67.0885 33.5442C67.0885 15.0183 52.0702 0 33.5442 0C15.0183 0 0 15.0183 0 33.5442C0 52.0702 15.0183 67.0885 33.5442 67.0885ZM47.6819 35.6574C49.0991 34.8543 49.0991 32.8125 47.6819 32.0094L28.0051 20.8592C26.6075 20.0673 24.875 21.0769 24.875 22.6833L24.875 44.9836C24.875 46.59 26.6075 47.5995 28.0051 46.8076L47.6819 35.6574Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <ModalComponent
        otherClasses=""
        show={show}
        additionalClass="w-full"
        handleClose={handleCancel}
      >
        <div className="flex items-center justify-center gap-6 flex-col max-w-648 mx-auto text-white">
          <div className="flex justify-between w-full text-white">
            <Heading type="h3" otherClasses={classnames("text-white w-[95%]")}>
              {videoTitle}
            </Heading>
            <button
              onClick={() => setShow(false)}
              className="flex items-start mt-2 justify-end
             w-[5%]"
            >
              <CancelModalIcon className="!w-[18px] !h-[17px]" />
            </button>
          </div>
          <div className="player-wrapper w-full h-full">
            <ReactPlayer
              onClickPreview={() => setIsPlaying(true)}
              url={videoUrl}
              controls
              width="100%"
              playing
              playsinline
              height={377}
              className="!h-[377px]  react-player aspect-video !w-full [&>div>iframe]:aspect-video [&>div>iframe]:w-full"
            />
          </div>
        </div>
      </ModalComponent>
    </section>
  );
}
