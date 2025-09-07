import React from 'react';
import { products } from "../data/products";
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as Io5Icons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as LuIcons from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from './SectionTitle';

const Upcoming: React.FC = () => {
  const upcomingProducts = products.filter(product => product.status === 'Upcoming');

  return (
    <div className="container mx-auto my-12 px-4">
      <SectionTitle title="Upcoming Products" description="Discover our soon-to-be-released items" />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {upcomingProducts.map((product) => {
          let IconComponent: React.ElementType | undefined;

          if (FaIcons[product.icon as keyof typeof FaIcons]) {
            IconComponent = FaIcons[product.icon as keyof typeof FaIcons];
          } else if (MdIcons[product.icon as keyof typeof MdIcons]) {
            IconComponent = MdIcons[product.icon as keyof typeof MdIcons];
          } else if (Io5Icons[product.icon as keyof typeof Io5Icons]) {
            IconComponent = Io5Icons[product.icon as keyof typeof Io5Icons];
          } else if (BsIcons[product.icon as keyof typeof BsIcons]) {
            IconComponent = BsIcons[product.icon as keyof typeof BsIcons];
          } else if (FiIcons[product.icon as keyof typeof FiIcons]) {
            IconComponent = FiIcons[product.icon as keyof typeof FiIcons];
          } else if (LuIcons[product.icon as keyof typeof LuIcons]) {
            IconComponent = LuIcons[product.icon as keyof typeof LuIcons];
          }

          return (
            <SwiperSlide key={product.id}>
              <Link
                to={product.href}
                className="group block bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden h-48 flex items-center justify-center bg-gray-100">
                  {IconComponent && <IconComponent size={64} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />}
                  {!IconComponent && <div className="w-16 h-16 flex items-center justify-center text-gray-500">?</div>}
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Best Deal
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 h-16 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-2xl font-extrabold text-blue-600">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-base text-gray-500 line-through">{product.oldPrice}</span>
                      )}
                    </div>

                    {product.status === 'Upcoming' ? (
                      <button className="w-full bg-blue-500 text-white py-2 rounded-md opacity-50 cursor-not-allowed">
                        Notify Me
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          alert(`Added ${product.name} to cart!`);
                        }}
                        className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center space-x-2 font-semibold transition-colors duration-300 hover:bg-[#111826]"
                      >
                        <FaShoppingCart />
                        <span>Add to Cart</span>
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Upcoming;