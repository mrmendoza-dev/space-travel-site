import React from "react";

function DestinationImage({ destination, isActive }: any) {
  return (
    <picture hidden={!isActive} id={`${destination.id}-image`}>
      <source srcSet={destination.image.webp} type="image/webp" />
      <img src={destination.image.png} alt={destination.image.alt} />
    </picture>
  );
}

function Destination({ destination, isActive }: any) {
  return (
    <>
      <DestinationImage destination={destination} isActive={isActive} />
      <article
        hidden={!isActive}
        className="destination-info flow"
        id={`${destination.id}-tab`}
        role="tabpanel"
      >
        <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>
        <p>{destination.description}</p>

        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{destination.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{destination.travelTime}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Destination;
