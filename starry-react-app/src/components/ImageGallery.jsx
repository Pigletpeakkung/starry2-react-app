import PhotoGallery from 'react-photo-gallery';
import ImgsViewer from 'react-images-viewer';
import { useState } from 'react';

function ImageGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const photos = [
    { src: 'https://via.placeholder.com/800x600', width: 4, height: 3 },
    { src: 'https://via.placeholder.com/600x800', width: 3, height: 4 },
    { src: 'https://via.placeholder.com/800x800', width: 1, height: 1 },
  ];

  const openLightbox = (event, { index }) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  return (
    <div className="w-full py-8 bg-white bg-opacity-10 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Portfolio Gallery</h2>
      <PhotoGallery photos={photos} onClick={openLightbox} />
      <ImgsViewer
        imgs={photos.map((photo) => ({ src: photo.src }))}
        currImg={currentImage}
        isOpen={isOpen}
        onClickPrev={() => setCurrentImage(currentImage - 1)}
        onClickNext={() => setCurrentImage(currentImage + 1)}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default ImageGallery;
