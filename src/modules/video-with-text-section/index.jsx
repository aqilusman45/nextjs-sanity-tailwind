import { groq } from 'next-sanity'
import classnames from 'classnames'
import Heading from '../../components/heading'
import ReactPlayer from 'react-player'
import Icon from '../../components/icon'

export const VIDEO_WITH_SECTIO_FRAGMET = groq`
   _type == 'videoWithTextSection' =>{
    ...,
    "backVideo":backVideo.asset->{
      ...,
    }
  }
`

export default function VideoWithSection({
  otherClasses,
  heading,
  videoUrl,
  backVideo,
  ...props
}) {
  const videoWithSectionClasses = classnames(
    otherClasses,
    'relative video-with-text-container',
  )

  return (
    <section
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
            <Heading type="h2" otherClasses={classnames('text-white')}>
              {heading}
            </Heading>
          </div>
          <div className="lg:h-710 4 relative z-10 w-full lg:w-2/4 lg:py-20">
            <ReactPlayer
              // onClickPreview={() => setIsPlaying(true)}
              url={videoUrl}
              controls
              width={340}
              height={475}
              light={<div className="h-full w-full bg-transparent"></div>}
              // playing={isplaying}
              playIcon={
                <span className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
                  <Icon
                    icon="video-play-icon"
                    iconHeight={145}
                    iconWidth={145}
                  />
                </span>
              }
              className="!h-[300px] !w-full sm:!h-[400px] md:!h-[500px] lg:!h-full [&>iframe]:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
