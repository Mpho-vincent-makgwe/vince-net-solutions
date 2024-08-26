import { FC } from "react";
import { fetchCollection, fetchDataBase } from "@/utils/lib/mongoCRUD";
const Home: FC = () => {

  const fetchData = async () => {
    const res = await fetch('/api/database?dbName=NextJS&collectionName=VinceNet');
    const data = await res.json();
    console.log(data);
  };
  
  // Call fetchData to get data from the API
  fetchData();
  

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center">
        Welcome to VinceNet Solutions
      </h1>
      <p className="mt-4 text-center">
        We create awesome web applications tailored to your needs.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Placeholder Image"
        className="mx-auto mt-8"
      />
      <div>
        <h2>Nisi culpa esse ut excepteur nostrud fugiat cupidatat ullamco non fugiat duis sit.</h2>

        <p>Pariatur do sit ea reprehenderit id id incididunt adipisicing nulla officia irure exercitation nulla. Est mollit velit consectetur quis sunt eu officia. Et ex ea nulla aute ullamco sint. Aute ad quis dolor do sint fugiat duis nulla laboris. Aute ut minim aute sunt irure consequat quis quis elit consectetur enim enim veniam. Laborum labore eu ullamco labore est ullamco qui dolore non cillum sint eiusmod do. Cillum reprehenderit veniam dolor id fugiat incididunt id dolor mollit adipisicing labore incididunt quis.</p>
      </div>
    </div>
  );
};

export default Home;
