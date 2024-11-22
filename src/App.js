// App.jsx
import React from 'react';
import Header from './components/Header';
import QuizForm from './components/QuizForm';
import Slider from './components/Slider';
import Footer from './components/Footer';
import TvShowsSection from './components/TvShowSelection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4">
        <div className="py-8">
          <QuizForm />
        </div>
        
        <div className="py-8">
          <TvShowsSection />
        </div>
        
        <div className="py-8">
          <Slider />
        </div>
      </main>
      <div >
        <Footer />
      </div>
    </div>
  );
}

export default App;