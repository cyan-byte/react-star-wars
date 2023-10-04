import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard'; // You'll create this component later
import './App.css';

function App() {
  // State to hold the starship data
  const [starships, setStarships] = useState([]);

  // Use the useEffect hook to fetch starship data when the component mounts
  useEffect(() => {
    getAllStarships().then((data) => {
      setStarships(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <div className="starship-list">
        {/* Map over the starships and render a StarshipCard for each */}
        {starships.map((starship, index) => (
          <StarshipCard key={index} name={starship.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
