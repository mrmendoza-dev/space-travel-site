import React, { useState } from "react";
import Technology from "./Technology";

const technologies = [
  {
    id: "launch-vehicle",
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: {
      jpg: {
        portrait: "assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "assets/technology/image-launch-vehicle-landscape.jpg",
      },
      alt: "launch vehicle image",
    },
  },
  {
    id: "spaceport",
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: {
      jpg: {
        portrait: "assets/technology/image-spaceport-portrait.jpg",
        landscape: "assets/technology/image-spaceport-landscape.jpg",
      },
      alt: "spaceport image",
    },
  },
  {
    id: "space-capsule",
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: {
      jpg: {
        portrait: "assets/technology/image-space-capsule-portrait.jpg",
        landscape: "assets/technology/image-space-capsule-landscape.jpg",
      },
      alt: "space capsule image",
    },
  },
];


function TechnologyPage() {
  const [activeTechnology, setActiveTechnology] = useState(technologies[0].id);

  const handleTabClick = (id: any) => {
    setActiveTechnology(id);
  };

  return (
    <div
      id="main"
      className="technology grid-container grid-container--destination flow"
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>
      <div
        className="tab-list underline-indicators flex"
        role="tablist"
        aria-label="technology list"
      >
        {technologies.map((technology) => (
          <button
            key={technology.id}
            aria-selected={activeTechnology === technology.id}
            role="tab"
            aria-controls={`${technology.id}-tab`}
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            data-image={`${technology.id}-image`}
            onClick={() => handleTabClick(technology.id)}
          >
            {technology.name}
          </button>
        ))}
      </div>

      {technologies.map((technology) => (
        <Technology
          key={technology.id}
          technology={technology}
          isActive={activeTechnology === technology.id}
        />
      ))}
    </div>
  );
}

export default TechnologyPage;