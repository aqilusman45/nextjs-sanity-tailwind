import getYouTubeId from 'get-youtube-id'
import React from 'react'
import YouTube from 'react-youtube'

const YoutubePreview = ({ url }) => {
  const id = getYouTubeId(url)
  return <YouTube videoId={id} />
}

export default YoutubePreview
