import "./BlurImage.css";
import { useState } from "react";

export default function BlurImage({ src, alt, className = "",id="", loading="" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      id={id}
      loading={loading}
      className={`BlurImage ${loaded ? "loaded" : ""} ${className}`}
      onLoad={() => setLoaded(true)}
    />
  );
}
