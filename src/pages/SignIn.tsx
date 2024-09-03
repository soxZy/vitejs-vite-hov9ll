import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const SignIn: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous implémenteriez la logique de connexion
    console.log('Tentative de connexion');
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Connexion</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Se connecter
        </button>
      </form>
      <p className="mt-4 text-center">
        Pas encore de compte ?{' '}
        <Link to="/signup" className="text-blue-500 hover:underline">
          S'inscrire
        </Link>
      </p>
    </Layout>
  );
};

export default SignIn;
