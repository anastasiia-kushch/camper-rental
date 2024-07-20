import css from './Video.module.css';
import { default as video } from '../../shared/video/video2.mp4';
import { useEffect, useRef } from 'react';

export default function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        className={css.video}
        autoPlay
        loop
        playsInline
        muted
      >
        <source type="video/mp4" src={video} />
      </video>
    </div>
  );
}
