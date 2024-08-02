import React, { useRef, useState } from "react";
import styles from "./Memories.module.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video6.mp4";
import video7 from "../assets/video7.mp4";
import video8 from "../assets/video8.mp4";
import video9 from "../assets/video7.mp4";

const Memories = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    if (playingVideo !== null && playingVideo !== index) {
      videoRefs.current[playingVideo].pause();
    }
    setPlayingVideo(index);
    videoRefs.current[index].play();
  };

  const posts = [
    { id: 1, videoUrl: video1, description: "MLSC conducting the coherence 3.0 the anjali" },
    { id: 2, videoUrl: video2, description: "Post 2 Description" },
    { id: 3, videoUrl: video3, description: "Post 3 Description" },
    { id: 4, videoUrl: video4, description: "Post 4 Description" },
    { id: 5, videoUrl: video5, description: "Post 5 Description" },
    { id: 6, videoUrl: video6, description: "Post 6 Description" },
    { id: 7, videoUrl: video7, description: "Post 7 Description" },
    { id: 8, videoUrl: video8, description: "Post 8 Description" },
    { id: 9, videoUrl: video7, description: "Post 9 Description" },
    // Add more posts as needed
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Memories</h1>
      <div className={styles.grid}>
        {posts.map((post, index) => (
          <div key={post.id} className={styles.card}>
            <div className={styles.videoBox} onClick={() => handlePlay(index)}>
              <video
                controls
                controlsList="nodownload nofullscreen noremoteplayback"
                muted
                className={styles.video}
                ref={(el) => (videoRefs.current[index] = el)}
              >
                <source src={post.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className={styles.description}>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memories;
