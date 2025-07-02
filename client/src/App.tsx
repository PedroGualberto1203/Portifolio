import { useEffect, useState } from 'react';
import Portfolio from './components/Portfolio';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-text-secondary">Carregando portfólio...</p>
        </div>
      </div>
    );
  }

  return <Portfolio />;
}

export default App;
