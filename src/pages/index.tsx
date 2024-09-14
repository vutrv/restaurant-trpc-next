import { trpc } from '@/utils/trpc';

export default function Home() {
  const {isLoading, isError, error, data} = trpc.getRestaurants.useQuery();

  if (isLoading) {
    return <div><h1>Loading...</h1></div>;
  }

  if (isError) {
    return <div><h1>Error: {error.message}</h1></div>;
  }

  return (
    <div>
      <h1>Restaurants List:</h1>
      {data?.map(item => (
        <p key={item.id}>{JSON.stringify(item.featured)}</p>
      ))}
    </div>
  );
}
