import { useParams } from 'react-router-dom';

const Productinfo = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Information</h1>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default Productinfo;
