import React, { useState } from 'react';
import styles from './Reviews.module.scss';
import BlockHeader from './BlockHeader';
import { useDragScroll } from '../hooks/useDragScroll';
import { REVIEWS_TEXT } from '../texts';

import photo1 from '../assets/img/reviews/1.webp';
import photo2 from '../assets/img/reviews/2.webp';
import photo3 from '../assets/img/reviews/3.webp';
import photo4 from '../assets/img/reviews/4.webp';
import photo5 from '../assets/img/reviews/5.webp';
import starIcon from '../assets/icons/star.svg';

const Reviews = () => {
  const dragRef = useDragScroll();
  const [selectedImages, setSelectedImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const reviewPhotos = {
    1: photo1,
    2: photo2,
    3: photo3,
    4: photo4,
    5: photo5
  };

  const FiveStars = ({ count }) => (
    <div className={styles.rating}>
      {[...Array(count)].map((_, i) => (
        <img key={i} src={starIcon} alt="Звезда" className={styles.star} />
      ))}
    </div>
  );

  const handleImageClick = (images, index) => {
    setSelectedImages(images);
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImages(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? selectedImages.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === selectedImages.length - 1 ? 0 : prev + 1));
  };

  const renderGallery = (review) => {
    if (!review.photos || review.photos.length === 0) return null;

    return (
      <div className={styles.galleryContainer}>
        {review.photos.slice(0, 2).map((photo, index) => (
          <div 
            key={index} 
            className={styles.galleryItem}
            onClick={() => handleImageClick(review.photos, index)}
          >
            <img
              src={photo}
              alt={`Фото работы ${index + 1}`}
              className={styles.galleryImage}
              loading="lazy"
            />
            {review.photos.length > 2 && index === 1 && (
              <div className={styles.morePhotos}>
                +{review.photos.length - 2}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className={styles.reviewsSection} id="reviews">
      <BlockHeader title={REVIEWS_TEXT.title} showButtons={false} />
      <div className={styles.reviewsList} ref={dragRef}>
        {REVIEWS_TEXT.list.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatarLeft}>
                <img 
                  src={reviewPhotos[review.id]} 
                  alt={review.name} 
                  className={styles.avatar} 
                  loading="lazy"
                />
                <h3 className={styles.reviewName}>{review.name}</h3>
              </div>
              <FiveStars count={review.rating} />
            </div>
            <div className={styles.reviewContent}>
              <p className={styles.reviewText}>{review.text}</p>
              {renderGallery(review)}
            </div>
          </div>
        ))}
      </div>

      {selectedImages && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>×</button>
            <button className={styles.navButton} onClick={handlePrevImage}>‹</button>
            <img 
              src={selectedImages[currentImageIndex]} 
              alt={`Фото работы ${currentImageIndex + 1}`} 
              className={styles.modalImage} 
            />
            <button className={styles.navButton} onClick={handleNextImage}>›</button>
            <div className={styles.imageCounter}>
              {currentImageIndex + 1} / {selectedImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
