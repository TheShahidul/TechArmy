import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>Category Page</h1>
      <p>Category: {category}</p>
    </div>
  );
};

export default CategoryPage;