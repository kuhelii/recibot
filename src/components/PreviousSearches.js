export default function PreviousSearches() {
    const searches=['pizza','Chicken','cookies','Fish','Paneer','salad','ice-cream','soup']
  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.2 + "s" }}
            className="search-items"
          >
            {search}
          </div>
        ))}
        
      </div>
    </div>
  );
}
