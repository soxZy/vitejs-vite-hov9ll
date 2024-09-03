import React from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import DealCard from '../components/DealCard';
import CouponCard from '../components/CouponCard';

const Search: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Recherche</h1>
      <SearchBar />
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Résultats des Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DealCard
            title="iPhone 13 Pro - 256Go"
            price={899}
            originalPrice={1159}
            expiration="2 jours"
            votes={120}
          />
          <DealCard
            title="PS5 + 2 manettes"
            price={499}
            originalPrice={569}
            expiration="5 heures"
            votes={85}
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Résultats des Codes Promo</h2>
        <div className="space-y-4">
          <CouponCard code="AMAZON10" description="-10% sur tout le site" />
          <CouponCard
            code="CDISCOUNT20"
            description="20€ de réduction dès 100€ d'achat"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Search;
