import React, { useState } from 'react';

function ImageGallery() {
  const [isImagesVisible, setImagesVisible] = useState(false);

  const showImages = () => {
    setImagesVisible(true);
  };

  const hideImages = () => {
    setImagesVisible(false);
  };

  return (
    <div>
      <div style={{ display: isImagesVisible ? 'flex' : 'none' }} id="images">
        {/* Add your images here */}
      </div>
      <button
        style={{ display: isImagesVisible ? 'none' : 'block' }}
        id="show-button"
        onClick={showImages}
      >
        Show more
      </button>
      <button
        style={{ display: isImagesVisible ? 'block' : 'none' }}
        id="hide-button"
        onClick={hideImages}
      >
        Hide
      </button>
    </div>
  );
}

export default ImageGallery;
