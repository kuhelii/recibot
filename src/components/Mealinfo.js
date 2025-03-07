import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealInfo = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
      const jsonData = await response.json();
      setInfo(jsonData.meals ? jsonData.meals[0] : null);
      setLoading(false);
    };
    fetchMealInfo();
  }, [mealid]);

  if (loading) return <p>Loading...</p>;
  if (!info) return <p>No meal found.</p>;

  return (
    <div className='mealInfo'>
      <img src={info.strMealThumb} alt={info.strMeal} />
      <div className='info'>
        <button>{info.strMeal}</button>

        <h3>Ingredients:</h3>
        <p>
          {Array.from({ length: 20 }, (_, i) => info[`strIngredient${i + 1}`])
            .filter(Boolean)
            .join(", ")}
        </p>

        <h3>Instructions:</h3>
        <p>{info.strInstructions}</p>

        {info.strYoutube ? (
          <>
            <h3>Watch Recipe Video:</h3>
            <a href={info.strYoutube} target="_blank" rel="noopener noreferrer">
              <button className="youtube-btn">▶ Watch on YouTube</button>
            </a>
          </>
        ) : (
          <p>No video available</p>
        )}
      </div>
    </div>
  );
};

export default Mealinfo;










