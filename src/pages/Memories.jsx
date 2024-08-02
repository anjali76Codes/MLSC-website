import React, { useRef, useState, useEffect } from "react";
import styles from "./Memories.module.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video6.mp4";
import video7 from "../assets/video7.mp4";
import video8 from "../assets/video8.mp4";
import video9 from "../assets/video7.mp4"; // Corrected path

const Memories = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [muted, setMuted] = useState(false); // Default to unmuted
  const [playbackRate, setPlaybackRate] = useState(1); // Default playback rate
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRefs = useRef([]);

  const handlePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (playingVideo !== null) {
      if (playingVideo === index) {
        // Pause the video if it's already playing
        video.pause();
        setPlayingVideo(null);
      } else {
        // Pause the currently playing video and play the new one
        videoRefs.current[playingVideo].pause();
        video.play();
        setPlayingVideo(index);
      }
    } else {
      // No video is currently playing, start playing the selected video
      video.play();
      setPlayingVideo(index);
    }
  };

  const handleMuteUnmute = (index) => {
    const video = videoRefs.current[index];
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const handleSpeedChange = (index) => {
    const video = videoRefs.current[index];
    // Toggle between different speeds
    let newPlaybackRate;
    switch (video.playbackRate) {
      case 1:
        newPlaybackRate = 1.5;
        break;
      case 1.5:
        newPlaybackRate = 2;
        break;
      case 2:
        newPlaybackRate = 0.5;
        break;
      default:
        newPlaybackRate = 1;
    }
    video.playbackRate = newPlaybackRate;
    setPlaybackRate(newPlaybackRate);
  };

  const handleSeek = (index, newTime) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = newTime;
    }
  };

  useEffect(() => {
    const video = videoRefs.current[playingVideo];
    if (video) {
      const updateVideoTime = () => {
        setCurrentTime(video.currentTime);
        setDuration(video.duration);
      };

      video.addEventListener("timeupdate", updateVideoTime);
      return () => video.removeEventListener("timeupdate", updateVideoTime);
    }
  }, [playingVideo]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const posts = [
    { id: 1, videoUrl: video1 },
    { id: 2, videoUrl: video2 },
    { id: 3, videoUrl: video3 },
    { id: 4, videoUrl: video4 },
    { id: 5, videoUrl: video5 },
    { id: 6, videoUrl: video6 },
    { id: 7, videoUrl: video7 },
    { id: 8, videoUrl: video8 },
    { id: 9, videoUrl: video9 },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Memories</h1>
      <div className={styles.grid}>
        {posts.map((post, index) => (
          <div key={post.id} className={styles.card}>
            <div className={styles.videoWrapper}>
              <div className={styles.videoBox}>
                <video
                  muted={muted}
                  className={styles.video}
                  ref={(el) => (videoRefs.current[index] = el)}
                  onClick={() => handlePlayPause(index)} // Toggle play/pause on click
                >
                  <source src={post.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className={styles.customControls}>
                  <button
                    className={styles.playButton}
                    onClick={() => handlePlayPause(index)}
                  >
                    {playingVideo === index ? '❚❚' : '▶️'}
                  </button>
                </div>
                <div className={styles.topRightControls}>
                  <button
                    className={styles.volumeControl}
                    onClick={() => handleMuteUnmute(index)}
                  >
                    {muted ? '🔊' : '🔈'}
                  </button>
                  <button
                    className={styles.speedControl}
                    onClick={() => handleSpeedChange(index)}
                  >
                    {playbackRate === 1 ? '1x' : playbackRate === 1.5 ? '1.5x' : playbackRate === 2 ? '2x' : '0.5x'}
                  </button>
                </div>
                {playingVideo === index && (
                  <div className={styles.bottomControls}>
                    <input
                      type="range"
                      min="0"
                      max={duration}
                      value={currentTime}
                      className={styles.seekBar}
                      onChange={(e) => handleSeek(index, parseFloat(e.target.value))}
                    />
                    <div className={styles.timeDisplay}>
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className={styles.description}>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memories;
