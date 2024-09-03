import React from 'react';
import Layout from '../components/Layout';
import DealCard from '../components/DealCard';
import SearchBar from '../components/SearchBar';

const Deals: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Tous les Deals</h1>
      <SearchBar />
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
        <DealCard
          title="Aspirateur robot Roomba i7+"
          price={599}
          originalPrice={799}
          expiration="1 jour"
          votes={62}
        />
        {/* Ajoutez plus de DealCard ici */}
      </div>
    </Layout>
  );
};

export default Deals;
