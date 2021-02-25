import React from 'react';
import style from './ImageGallery.module.css';

const ImageGallery = ({img, handlerOpenModalWindow}) => {
  return (
    <ul className={style.ImageGallery}>
      {img.map((item) => (
        <li
          key={item.id}
          className={style.ImageGalleryItem}
          onClick={handlerOpenModalWindow}>
          <img
            src={item.webformatURL}
            alt={item.largeImageURL}
            className={style.ImageGalleryItemImage}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
