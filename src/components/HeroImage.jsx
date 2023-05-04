import React, { useState, useEffect } from "react";
import wallpaper1 from "../assets/media/system/wallpapers/wallpaper1.jpg";
import wallpaper2 from "../assets/media/system/wallpapers/wallpaper2.jpg";
import wallpaper3 from "../assets/media/system/wallpapers/wallpaper3.jpg";

function HeroImage(props) {
  const [wallpaper, setWallpaper] = useState(wallpaper1);

  let image_array = [wallpaper1, wallpaper2, wallpaper3];

  let image_style = {
    backgroundImage: `url(${wallpaper1})`,
    height: "1080px",
    width: "1920px",
    opacity: "0.425",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the index of the current wallpaper
      const currentIndex = image_array.indexOf(wallpaper);
      // Calculate the index of the next wallpaper
      const nextIndex = (currentIndex + 1) % image_array.length;
      // Set the next wallpaper as the current wallpaper
      setWallpaper(image_array[nextIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, [wallpaper]);

  image_style.backgroundImage = `url(${wallpaper})`;

  return (
    <div className="hero-image" style={image_style}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default HeroImage;
