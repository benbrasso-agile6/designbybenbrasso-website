"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { PlayIcon, PauseIcon, Loader2Icon } from "lucide-react" // Removed Music2Icon from imports

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
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  const [apiLoaded, setApiLoaded] = useState(false)
  const [showError, setShowError] = useState(false)

  const playerRef = useRef<any>(null)
  const playerContainerId = `youtube-audio-player-container-${videoId}`

  const onPlayerReady = useCallback((event: any) => {
    setIsPlayerReady(true)
  }, [])

  const onPlayerStateChange = useCallback((event: any) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true)
    } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
      setIsPlaying(false)
      if (event.data === window.YT.PlayerState.ENDED) {
        playerRef.current?.seekTo(0, true)
      }
    }
  }, [])

  const initializePlayer = useCallback(() => {
    if (window.YT && window.YT.Player && document.getElementById(playerContainerId)) {
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
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
            onError: (playerEvent: any) => {
              console.error("YouTube Player Error:", playerEvent.data)
              setShowError(true)
              setIsPlayerReady(false)
            },
          },
        })
      } catch (error) {
        console.error("Error creating YouTube player:", error)
        setShowError(true)
      }
    } else if (apiLoaded && !document.getElementById(playerContainerId)) {
      setTimeout(initializePlayer, 100)
    }
  }, [videoId, playerContainerId, onPlayerReady, onPlayerStateChange, apiLoaded])

  useEffect(() => {
    if (apiLoaded) {
      if (window.YT && window.YT.Player) {
        initializePlayer()
      } else {
        const existingCallback = window.onYouTubeIframeAPIReady
        window.onYouTubeIframeAPIReady = () => {
          if (existingCallback) {
            existingCallback()
          }
          initializePlayer()
        }
      }
    }
  }, [apiLoaded, initializePlayer])

  useEffect(() => {
    const currentPlayer = playerRef.current
    return () => {
      if (currentPlayer && typeof currentPlayer.destroy === "function") {
        currentPlayer.destroy()
      }
    }
  }, [])

  const handleTogglePlayPause = () => {
    if (!isPlayerReady || !playerRef.current || showError) return

    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  const buttonText = isPlaying ? "Pause Interstellar Main Theme" : "Play Interstellar Main Theme"
  const IconComponent = isPlaying ? PauseIcon : PlayIcon

  return (
    <>
      <Script
        src="https://www.youtube.com/iframe_api"
        strategy="lazyOnload"
        onLoad={() => {
          setApiLoaded(true)
        }}
        onError={() => {
          console.error("Failed to load YouTube IFrame API script.")
          setShowError(true)
          setApiLoaded(false)
        }}
      />
      <div
        id={playerContainerId}
        style={{ position: "absolute", top: "-9999px", left: "-9999px", width: "1px", height: "1px" }}
      />

      <div className="flex flex-col items-center my-8 md:my-10">
        <h2
          id="navigating-the-nebulous-audio" // Added ID here
          className="text-3xl font-semibold mb-6 text-center text-neutral-800 dark:text-neutral-200 tracking-tight scroll-mt-20" // Added scroll-mt-20
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
            disabled={!isPlayerReady && apiLoaded && !showError}
            variant="outline"
            size="lg"
            className="border-sky-600 text-sky-600 hover:bg-sky-100 hover:text-sky-700 dark:border-sky-500 dark:text-sky-500 dark:hover:bg-sky-900/30 dark:hover:text-sky-400 flex items-center gap-3 px-6 py-3 text-lg rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label={buttonText}
            title={buttonText}
          >
            {!apiLoaded || (!isPlayerReady && apiLoaded && !showError) ? (
              <Loader2Icon className="h-6 w-6 animate-spin" />
            ) : (
              <IconComponent className="h-6 w-6" />
            )}
            {/* Music2Icon removed from here */}
            <span>
              {!apiLoaded ? "Loading API..." : !isPlayerReady && !showError ? "Initializing Player..." : buttonText}
            </span>
          </Button>
        )}
      </div>
    </>
  )
}
