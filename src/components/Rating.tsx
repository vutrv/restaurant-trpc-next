// Import the Image component from Next.js
import Image from 'next/image';
import { FC } from 'react';
import styles from '@/styles/Rating.module.css';
import starIcon from '../../public/icons/star.svg';

interface RatingProps {
  rating: number;
  rating_count: number;
}

const Rating: FC<RatingProps> = ({ rating, rating_count }) => {
  return (
    <div className={styles.rating}>
      <Image 
        priority
        src={starIcon}
        alt='Rating icon'
      />
      <span className={styles.rateValue}>{rating}</span>
      <span className={styles.rateCount}>{`(${rating_count})`}</span>
    </div>
  );
};

export default Rating;
