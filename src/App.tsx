import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Body/Footer';
import Newarrivals from './Body/Newarrivals'; // Import Newarrivals
import Upcoming from './Body/Upcoming';     // Import Upcoming
import Hero from './Hero';

// A simple component to display the category name
const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold">Category: {categoryName ? categoryName.replace(/-/g, ' ').toUpperCase() : 'Unknown'}</h2>
      <p className="mt-4">Products for this category will be displayed here.</p>
    </div>
  );
};

function App() {
  return (
    <div className="App bg-gray-100">
      <Topbar />
      <Navbar />
      <Hero />
      <main className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="text-3xl font-bold text-center text-gray-900">Welcome to Tech Army Ltd.</h1>
              <p className="text-center mt-4 text-gray-700">Your one-stop shop for all IT products.</p>
              <Newarrivals /> {/* Add Newarrivals component */}
              <Upcoming />    {/* Add Upcoming component */}
            </>
          } />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          {/* Add other routes here as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;