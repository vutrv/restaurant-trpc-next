import React, {useState} from 'react';
import styles from '@/styles/RestaurantList.module.css';
import CustomImage from './CustomImage';
import Rating from './Rating'
import SearchBar from './SearchBar'
import { STORE_CATEGORY, textByStoreCategory } from '@/constant/categories';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import common from '@/constant/common';
import { Restaurant } from '@/types/restaurant';
import { trpc } from '@/utils/trpc'

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const imageUrl = restaurant.images[0];
  const [isFavorite, setIsFavorite] = useState(restaurant.is_favorite);
  const utils = trpc.useUtils();
  const addFavoriteMutation = trpc.addFavorite.useMutation({
    onMutate: async (newFavorite) => {
      await utils.getRestaurants.cancel();
      setIsFavorite(newFavorite.is_favorite);
    },
  });

  const toggleFavorite = () => {
    addFavoriteMutation.mutate({ id: restaurant.id, is_favorite: !isFavorite });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <CustomImage
          className={styles.image}
          src={imageUrl}
          alt={restaurant.name}
          width={300} 
          height={200}
        />
        <div className={styles.favorite} onClick={toggleFavorite}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: isFavorite ? '#f05656' : '#c9c5c5' }}
          />
        </div>
      </div>
      <h3 className={styles.title}>{restaurant.featured.text}</h3>
      <div className={styles.descRating}>
        <p className={styles.name}>{restaurant.name}</p>
        <Rating rating={restaurant.rating} rating_count={restaurant.rating_count} />
      </div>
      <p className={styles.description}>{restaurant.description}</p>
      <div className={styles.priceRange}> · {restaurant.city} · {restaurant.category} · {restaurant.price_range}{common.currency}</div>
    </div>
  );
};

const RestaurantList = React.memo(({ restaurants }: { restaurants: Restaurant[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(common.all);

  const filteredRestaurants = selectedCategory !== common.all
    ? restaurants.filter((restaurant) => restaurant.category === selectedCategory)
    : restaurants;


  return (
    <div className={styles.cardContainer}>
      <SearchBar />
      <div className={styles.categoryContainer}>
        <button
            className={`${styles.categoryButton} ${selectedCategory === common.all ? styles.active : ''}`}
            onClick={() => setSelectedCategory(common.all)}
          >
            {common.all}
        </button>
        {Object.values(STORE_CATEGORY).map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
          >
            {textByStoreCategory[category]}
          </button>
        ))}
      </div>
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
});

RestaurantList.displayName = 'RestaurantList';

export default RestaurantList;
