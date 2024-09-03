import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTag, FaPercent, FaSearch, FaUser } from 'react-icons/fa';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-300"
          >
            BonsPlansFR
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <NavItem to="/" icon={<FaHome />} text="Accueil" />
              <NavItem to="/deals" icon={<FaTag />} text="Deals" />
              <NavItem to="/coupons" icon={<FaPercent />} text="Codes Promo" />
              <NavItem to="/search" icon={<FaSearch />} text="Recherche" />
              <NavItem to="/signin" icon={<FaUser />} text="Connexion" />
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto mt-8 px-4">
        <div className="bg-white shadow-md rounded-lg p-6">{children}</div>
      </main>
      <footer className="bg-gray-800 text-white mt-8 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 BonsPlansFR. Tous droits réservés.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Conditions d'utilisation
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Politique de confidentialité
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavItem: React.FC<{
  to: string;
  icon: React.ReactNode;
  text: string;
}> = ({ to, icon, text }) => (
  <li>
    <Link
      to={to}
      className="flex items-center text-white hover:text-blue-200 transition-colors duration-300"
    >
      {icon}
      <span className="ml-1">{text}</span>
    </Link>
  </li>
);

export default Layout;
