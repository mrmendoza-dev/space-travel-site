import React from "react";

function CrewMemberImage({ image, isActive }: any) {
  return (
    <picture hidden={!isActive}>
      <source srcSet={image.webp} type="image/webp" />
      <img src={image.png} alt={image.alt} />
    </picture>
  );
}

function CrewMember({ crewMember, isActive }: any) {
  const { id, position, name, description } = crewMember;

  return (
    <>
      <article
        className="crew-details flow"
        id={`${id}-tab`}
        role="tabpanel"
        hidden={!isActive}
      >
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-serif uppercase">{position}</h2>
          <p className="fs-700 uppercase ff-serif">{name}</p>
        </header>
        <p>{description}</p>
      </article>
      <CrewMemberImage image={crewMember.image} isActive={isActive} />
    </>
  );
}

export default CrewMember;
