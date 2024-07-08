import React, { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';

function App() {
  useEffect(() => {
    const fetchFavicon = () => {
      fetch('/favicon.ico')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to load favicon');
          }
        })
        .catch((error) => {
          console.error(error);
          // Display a fallback image or handle the error in another way
        });
    };

    fetchFavicon();
  }, []);

  return (
    <div>
      <h1>Museum Management</h1>
      <AppRoutes />
    </div>
  );
}

export default App;
