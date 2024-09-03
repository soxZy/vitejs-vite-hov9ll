import React from 'react';
import Layout from '../components/Layout';
import CouponCard from '../components/CouponCard';
import SearchBar from '../components/SearchBar';

const Coupons: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Tous les Codes Promo</h1>
      <SearchBar />
      <div className="space-y-4 mt-6">
        <CouponCard code="AMAZON10" description="-10% sur tout le site" />
        <CouponCard
          code="CDISCOUNT20"
          description="20€ de réduction dès 100€ d'achat"
        />
        <CouponCard code="FNAC5" description="5% de remise sur les livres" />
        {/* Ajoutez plus de CouponCard ici */}
      </div>
    </Layout>
  );
};

export default Coupons;
