import React from 'react';
import Header from './components/Header.jsx';
import LoginForm from './components/LoginForm.jsx';
import AuthBenefits from './components/AuthBenefits.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <Header />

      <main>
        <LoginForm />
        <AuthBenefits />
      </main>

      <Footer />
    </div>
  );
}

export default App;
