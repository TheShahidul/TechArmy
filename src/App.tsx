import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import AllproductsPage from './pages/AllproductsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AllproductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;