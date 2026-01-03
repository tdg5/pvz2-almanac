function PlantCard({ plant }) {
  return (
    <div className="plant-card">
      <div className="plant-name">
        {plant.name}
      </div>
      <div className="plant-description">
        {plant.description}
      </div>
      <div className="plant-image-wrapper">
        <img className="plant-image" src={`/images/${plant.imagePath}`} />
      </div>
    </div>
  );
}

export { PlantCard };
