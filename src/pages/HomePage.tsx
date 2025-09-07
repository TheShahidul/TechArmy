import Hero from '../components/Hero';
import Productcategory from '../components/Productcategory';
import Hotdeals from '../components/Hotdeals';
import Popularproducts from '../components/Popularproducts';
import Newarrivals from '../components/Newarrivals';

import Upcoming from '../components/Upcoming';
import Partners from '../components/Partners';

const HomePage = () => {
  return (
        <>
      <Hero />
      <Productcategory />
      <Hotdeals />
      <Popularproducts />
      <Newarrivals />
      
      <Upcoming />
      <Partners />
    </>
  );
};

export default HomePage;