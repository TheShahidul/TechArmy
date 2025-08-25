
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Body/Footer';
import Newarrivals from './Body/Newarrivals';
import Upcoming from './Body/Upcoming';
import Popularproducts from './Body/Popularproducts';
import Hotdeals from './Body/Hotdeals';
import Allproducts from './Body/Allproducts';
import CategoryPage from './Body/CategoryPage';
import { navData } from './navData';

function App() {
  return (
    <div className="App bg-gray-100">
      <Topbar />
      <Navbar />
      <main className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="text-3xl font-bold text-center text-gray-900">Welcome to Tech Army Ltd.</h1>
              <p className="text-center mt-4 text-gray-700">Your one-stop shop for all IT products.</p>
              <Newarrivals />
              <Popularproducts />
              <Hotdeals />
              <Upcoming />
            </>
          } />
          {navData.map(item => (
            <Route key={item.name} path={item.path} element={<CategoryPage />} />
          ))}
          {navData.map(item => item.subItems && item.subItems.map(subItem => (
            <Route key={subItem.name} path={subItem.path} element={<CategoryPage />} />
          )))}
          {navData.map(item => item.subItems && item.subItems.map(subItem => subItem.subItems && subItem.subItems.map(subSubItem => (
            <Route key={subSubItem.name} path={subSubItem.path} element={<CategoryPage />} />
          ))))}
          <Route path="/products" element={<Allproducts />} />
          {/* Add other routes here as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
