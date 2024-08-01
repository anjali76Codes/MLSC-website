import React from 'react';
import styles from './Memories.module.css';

const videos = [
  { id: 1, url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Amazing stories from around the globe', description: '6 VIDEOS' },
  { id: 2, url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ', title: 'Beautiful airports and subway stations', description: '6 VIDEOS' },
  { id: 3, url: 'https://www.youtube.com/embed/l9PxOanFjxQ', title: 'The best surfing moments of 2015', description: '5 VIDEOS' },
  { id: 4, url: 'https://www.youtube.com/embed/l9PxOanFjxQ', title: 'The cutest things kids do every day', description: '5 VIDEOS' },
  { id: 5, url: 'https://www.youtube.com/embed/l9PxOanFjxQ', title: 'The magical world of animals', description: '8 VIDEOS' },
  { id: 6, url: 'https://www.youtube.com/embed/l9PxOanFjxQ', title: 'Traveling tips from expert digital nomads', description: '5 VIDEOS' },
  { id: 6, url: 'https://www.youtube.com/embed/l9PxOanFjxQ', title: 'Traveling tips from expert digital nomads', description: '5 VIDEOS' },
  { id: 6, url: 'https://www.youtube.com/embed/l9PxOanFjxQ', title: 'Traveling tips from expert digital nomads', description: '5 VIDEOS' },
  { id: 6, url: 'https://www.youtube.com/embed/l9PxOanFjxQ', title: 'Traveling tips from expert digital nomads', description: '5 VIDEOS' },
  { id: 6, url: 'https://www.youtube.com/embed/l9PxOanFjxQ', title: 'Traveling tips from expert digital nomads', description: '5 VIDEOS' },
  { id: 6, url: 'https://www.youtube.com/embed/l9PxOanFjxQ', title: 'Traveling tips from expert digital nomads', description: '5 VIDEOS' },
  { id: 6, url: 'https://www.youtube.com/embed/l9PxOanFjxQ', title: 'Traveling tips from expert digital nomads', description: '5 VIDEOS' },
];

const Memories = () => {
  return (
    <div className={styles.memories}>
      <h1>Featured Playlists</h1>
      <div className={styles.videosContainer}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoItem}>
            <div className={styles.thumbnail}>
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memories;
