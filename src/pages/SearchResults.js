import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Mealcards from "../components/Mealcards"; 

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      setIsLoading(true); // Start loading
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const jsonData = await response.json();
        setData(jsonData.meals || []);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
      setIsLoading(false); // Stop loading
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <Mealcards detail={data} isLoading={isLoading} />
    </div>
  );
};

export default SearchResults;

