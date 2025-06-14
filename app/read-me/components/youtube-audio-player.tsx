"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { PlayIcon, PauseIcon, Loader2Icon } from "lucide-react"

interface YoutubeAudioPlayerProps {
  videoId: string
}

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady?: () => void
  }
}

export default function YoutubeAudioPlayer({ videoId }: YoutubeAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayerControlsReady, setIsPlayerControlsReady] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [youtubeApiReady, setYoutubeApiReady] = useState(false)
  const [showError, setShowError] = useState(false)

  const playerRef = useRef<any>(null)
  const playerContainerId = `youtube-audio-player-container-${videoId}`

  useEffect(() => {
    const originalGlobalCallback = window.onYouTubeIframeAPIReady

    window.onYouTubeIframeAPIReady = () => {
      if (originalGlobalCallback) {
        originalGlobalCallback()
      }
      setYoutubeApiReady(true)
    }

    // If the API script is already loaded and YT object exists when this component mounts,
    // (e.g., due to fast loading or script already on page), manually set youtubeApiReady.
    if (window.YT && window.YT.Player) {
      setYoutubeApiReady(true)
    }

    return () => {
      window.onYouTubeIframeAPIReady = originalGlobalCallback
    }
  }, [])

  const onPlayerReadyCallback = useCallback((event: any) => {
    setIsPlayerControlsReady(true)
  }, [])

  const onPlayerStateChangeCallback = useCallback((event: any) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true)
    } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
      setIsPlaying(false)
      if (event.data === window.YT.PlayerState.ENDED) {
        playerRef.current?.seekTo(0, true)
      }
    }
  }, [])

  const onPlayerErrorCallback = useCallback((playerEvent: any) => {
    console.error("YouTube Player Error Code:", playerEvent.data)
    // Error codes: 2 (invalid parameter), 5 (HTML5 player error), 100 (video not found), 101/150 (playback disallowed by owner/privacy)
    setShowError(true)
    setIsPlayerControlsReady(false)
  }, [])

  useEffect(() => {
    if (youtubeApiReady && scriptLoaded && document.getElementById(playerContainerId)) {
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy()
        playerRef.current = null
      }

      try {
        playerRef.current = new window.YT.Player(playerContainerId, {
          height: "0",
          width: "0",
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 1,
            playsinline: 1,
            origin: typeof window !== "undefined" ? window.location.origin : "",
          },
          events: {
            onReady: onPlayerReadyCallback,
            onStateChange: onPlayerStateChangeCallback,
            onError: onPlayerErrorCallback,
          },
        })
      } catch (error) {
        console.error("Error creating YouTube player instance:", error)
        setShowError(true)
      }
    }
  }, [
    youtubeApiReady,
    scriptLoaded,
    videoId,
    playerContainerId,
    onPlayerReadyCallback,
    onPlayerStateChangeCallback,
    onPlayerErrorCallback,
  ])

  useEffect(() => {
    const currentPlayer = playerRef.current
    return () => {
      if (currentPlayer && typeof currentPlayer.destroy === "function") {
        try {
          currentPlayer.destroy()
        } catch (e) {
          console.error("Error destroying YouTube player:", e)
        }
      }
      playerRef.current = null
    }
  }, [])

  const handleTogglePlayPause = () => {
    if (!isPlayerControlsReady || !playerRef.current || showError) return

    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  const buttonText = isPlaying ? "Pause Interstellar Main Theme" : "Play Interstellar Main Theme"
  const IconComponent = isPlaying ? PauseIcon : PlayIcon

  let statusMessage = ""
  if (!scriptLoaded) {
    statusMessage = "Loading API..."
  } else if (!youtubeApiReady) {
    statusMessage = "Waiting for YouTube API..."
  } else if (!isPlayerControlsReady && !showError) {
    statusMessage = "Initializing Player..."
  } else {
    statusMessage = buttonText
  }

  return (
    <>
      <Script
        src="https://www.youtube.com/iframe_api"
        strategy="lazyOnload"
        onLoad={() => {
          setScriptLoaded(true)
        }}
        onError={() => {
          console.error("Failed to load YouTube IFrame API script.")
          setShowError(true)
          setScriptLoaded(true)
        }}
      />
      <div
        id={playerContainerId}
        style={{ position: "absolute", top: "-9999px", left: "-9999px", width: "1px", height: "1px" }}
      />

      <div className="flex flex-col items-center my-8 md:my-10">
        <h2
          id="navigating-the-nebulous-audio"
          className="text-3xl font-semibold mb-6 text-center text-neutral-800 dark:text-neutral-200 tracking-tight scroll-mt-20"
        >
          Navigating the nebulous
        </h2>
        {showError ? (
          <p className="text-red-500 dark:text-red-400 text-center px-4">
            Audio player could not be loaded.
            <br />
            Please ensure you&apos;re connected and try refreshing.
          </p>
        ) : (
          <Button
            onClick={handleTogglePlayPause}
            disabled={!isPlayerControlsReady}
            variant="outline"
            size="lg"
            className="border-sky-600 text-sky-600 hover:bg-sky-100 hover:text-sky-700 dark:border-sky-500 dark:text-sky-500 dark:hover:bg-sky-900/30 dark:hover:text-sky-400 flex items-center gap-3 px-6 py-3 text-lg rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label={statusMessage}
            title={statusMessage}
          >
            {!scriptLoaded || !youtubeApiReady || (!isPlayerControlsReady && !showError) ? (
              <Loader2Icon className="h-6 w-6 animate-spin" />
            ) : (
              <IconComponent className="h-6 w-6" />
            )}
            <span>{statusMessage}</span>
          </Button>
        )}
      </div>
    </>
  )
}
