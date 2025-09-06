import Hero from '../components/Hero';
import Productcategory from '../components/Productcategory';
import Hotdeals from '../components/Hotdeals';
import Popularproducts from '../components/Popularproducts';
import Newarrivals from '../components/Newarrivals';
import Productdesign from '../components/Productdesign';
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
      <Productdesign />
      <Upcoming />
      <Partners />
    </>
  );
};

export default HomePage;