import React from "react";

function TechnologyImage({ technology, isActive }: any) {
  return (
    <picture hidden={!isActive} id={`${technology.id}-image`}>
      {/* <source srcSet={technology.image.jpg.portrait} type="image/webp" /> */}
      <img src={technology.image.jpg.portrait} alt={technology.image.alt} />
    </picture>
  );
}

function Technology({ technology, isActive }: any) {
  return (
    <>
      <TechnologyImage technology={technology} isActive={isActive} />
      <article
        hidden={!isActive}
        className="destination-info flow"
        id={`${technology.id}-tab`}
        role="tabpanel"
      >
        <h2 className="fs-800 uppercase ff-serif">{technology.name}</h2>
        <p>{technology.description}</p>
      </article>
    </>
  );
}

export default Technology;
