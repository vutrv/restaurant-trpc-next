import RestaurantList from '@/components/RestaurantList'
import { trpc } from '@/utils/trpc';
import ClipLoader from "react-spinners/ClipLoader";
import styles from '@/styles/Home.module.css';

export default function Home() {
  const {isLoading, isError, error, data} = trpc.getRestaurants.useQuery();

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <ClipLoader
        color="#000000"
        loading={isLoading}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    );
  }

  if (isError) {
    return <div><h1>Error: {error.message}</h1></div>;
  }

  return (
    <RestaurantList restaurants={data}/>
  );
}
