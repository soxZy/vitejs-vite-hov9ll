import React from 'react';
import Layout from '../components/Layout';
import DealCard from '../components/DealCard';
import CouponCard from '../components/CouponCard';
import { FaFire, FaClock } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {' '}
        {/* Utilise toute la largeur disponible */}
        <h1 className="text-3xl font-bold mb-8">Bons Plans du Jour</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-teal-950">
            <FaFire className="text-red-500 mr-2" /> Deals Populaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DealCard
              title="iPhone 13 Pro - 256Go"
              price={899}
              originalPrice={1159}
              discount={22}
              merchant="Apple Store"
              expirationDate="2023-09-10"
              votes={120}
              commentCount={35}
              imageUrl="https://picsum.photos/seed/picsum/200/300"
            />
            <DealCard
              title="PS5 + 2 manettes"
              price={499}
              originalPrice={569}
              discount={12}
              merchant="Amazon"
              expirationDate="2023-09-08"
              votes={85}
              commentCount={22}
              imageUrl="https://picsum.photos/seed/picsum/200/300"
            />
            <DealCard
              title="Aspirateur robot Roomba i7+"
              price={599}
              originalPrice={799}
              discount={25}
              merchant="Cdiscount"
              expirationDate="2023-09-12"
              votes={62}
              commentCount={18}
              imageUrl="https://picsum.photos/seed/picsum/200/300"
            />
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-teal-950 mr-2">
            <FaClock className="text-teal-500 mr-2" /> Nouveaux Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DealCard
              title="Écouteurs Sony WF-1000XM4"
              price={249}
              originalPrice={279}
              discount={11}
              merchant="Fnac"
              expirationDate="2023-09-15"
              votes={42}
              commentCount={7}
              imageUrl="https://picsum.photos/seed/picsum/200/300"
            />
            <DealCard
              title="MacBook Air M2"
              price={1299}
              originalPrice={1499}
              discount={13}
              merchant="Darty"
              expirationDate="2023-09-14"
              votes={38}
              commentCount={12}
              imageUrl="https://picsum.photos/seed/picsum/200/300"
            />
            <DealCard
              title="Nintendo Switch OLED"
              price={319}
              originalPrice={349}
              discount={9}
              merchant="Micromania"
              expirationDate="2023-09-13"
              votes={55}
              commentCount={15}
              imageUrl="https://picsum.photos/seed/picsum/200/300"
            />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-teal-950">
            Codes Promo Populaires
          </h2>
          <div className="space-y-4">
            <CouponCard
              code="AMAZON10"
              description="-10% sur tout le site"
              expirationDate="2023-09-30"
            />
            <CouponCard
              code="CDISCOUNT20"
              description="20€ de réduction dès 100€ d'achat"
              expirationDate="2023-09-20"
            />
            <CouponCard
              code="FNAC5"
              description="5% de remise sur les livres"
              expirationDate="2023-09-25"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
