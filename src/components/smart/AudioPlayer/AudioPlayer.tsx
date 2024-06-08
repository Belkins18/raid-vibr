import React, { useCallback, useEffect, useRef } from 'react'

interface AudioPlayerProps {
  src: string[]
  context: AudioContext
  onPlay: (audio?: HTMLAudioElement) => Promise<void>
  onPause: (audio?: HTMLAudioElement) => Promise<void>
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  context,
  onPlay,
  onPause,
}) => {
  const refAudio = useRef(null)

  const onSuspendedContext = useCallback(async () => {
    onPause && (await onPause(refAudio.current! as HTMLAudioElement))
  }, [context, onPause])

  const onResumeContext = useCallback(async () => {
    onPlay && (await onPlay(refAudio.current! as HTMLAudioElement))
  }, [context, onPlay])

  useEffect(() => {
    if (context.state === 'running') {
      onPlay(refAudio.current! as HTMLAudioElement)
    } else {
      onPause(refAudio.current! as HTMLAudioElement)
    }
  }, [context])

  return (
    <>
      <audio
        ref={refAudio}
        hidden
        id="audioPlayer"
        controls
        autoPlay
        muted
        loop
      >
        {src.map((item, index) => {
          return <source key={index} src={item} type="audio/mp3" />
        })}
        Your browser does not support the audio tag.
      </audio>
      <button
        hidden
        style={{ position: 'absolute', zIndex: 100 }}
        onClick={onSuspendedContext}
      >
        pause
      </button>
      <button
        hidden
        style={{ position: 'absolute', zIndex: 100, left: 80 }}
        onClick={onResumeContext}
      >
        play
      </button>
    </>
  )
}

export default AudioPlayer
