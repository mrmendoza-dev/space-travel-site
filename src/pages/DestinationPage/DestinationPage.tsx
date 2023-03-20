import React, { useState } from "react";
import Destination from "./Destination";

const destinations = [
  {
    id: "moon",
    name: "Moon",
    distance: "384,400 km",
    travelTime: "3 days",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: {
      webp: "assets/destination/image-moon.webp",
      png: "assets/destination/image-moon.png",
      alt: "the moon",
    },
  },
  {
    id: "mars",
    name: "Mars",
    distance: "225 mil. km",
    travelTime: "9 months",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    image: {
      webp: "assets/destination/image-mars.webp",
      png: "assets/destination/image-mars.png",
      alt: "the planet mars",
    },
  },
  {
    id: "europa",
    name: "Europa",
    distance: "628 mil. km",
    travelTime: "3 years",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: {
      webp: "assets/destination/image-europa.webp",
      png: "assets/destination/image-europa.png",
      alt: "the moon europa",
    },
  },
  {
    id: "titan",
    name: "Titan",
    distance: "1.6 bil. km",
    travelTime: "7 years",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    image: {
      webp: "assets/destination/image-titan.webp",
      png: "assets/destination/image-titan.png",
      alt: "the moon titan",
    },
  },
];


function DestinationPage() {
  const [activeDestination, setActiveDestination] = useState(
    destinations[0].id
  );

  const handleTabClick = (id: any) => {
    setActiveDestination(id);
  };

  return (
    <div id="main" className="destination grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>

      <div
        className="tab-list underline-indicators flex"
        role="tablist"
        aria-label="destination list"
      >
        {destinations.map((destination) => (
          <button
            key={destination.id}
            aria-selected={activeDestination === destination.id}
            role="tab"
            aria-controls={`${destination.id}-tab`}
            className="uppercase ff-sans-cond text-accent letter-spacing-2"
            data-image={`${destination.id}-image`}
            onClick={() => handleTabClick(destination.id)}
          >
            {destination.name}
          </button>
        ))}
      </div>

      {destinations.map((destination) => (
        <Destination
          key={destination.id}
          destination={destination}
          isActive={activeDestination === destination.id}
        />
      ))}
    </div>
  );
}

export default DestinationPage;
