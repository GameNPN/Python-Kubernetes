import Image from "next/image";
import React, { useEffect, useState } from 'react';

const ImageComponent: React.FC = () => {
  const [images, setImages] = useState<Array<{ filename: string; path: string; url: string }>>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://api.phatcharaphon.lukaom/api/images');
        const data = await response.json();

        if (data && data.images) {
          setImages(data.images);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <main>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h1>Images</h1>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <p>Filename: {image.filename}</p>
            <p>Path: {image.path}</p>
            <p>URL: {image.url}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ImageComponent;
