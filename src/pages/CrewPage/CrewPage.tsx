import React, { useState } from "react";
import CrewMember from "./CrewMember";

const crewMembers = [
  {
    id: "commander",
    position: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: {
      webp: "assets/crew/image-douglas-hurley.webp",
      png: "assets/crew/image-douglas-hurley.png",
      alt: "Douglas Hurley",
    },
  },
  {
    id: "mission",
    position: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: {
      webp: "assets/crew/image-mark-shuttleworth.webp",
      png: "assets/crew/image-mark-shuttleworth.png",
      alt: "Mark Shuttleworth",
    },
  },
  {
    id: "pilot",
    position: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: {
      webp: "assets/crew/image-victor-glover.webp",
      png: "assets/crew/image-victor-glover.png",
      alt: "Victor Glover",
    },
  },
  {
    id: "crew",
    position: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: {
      webp: "assets/crew/image-anousheh-ansari.webp",
      png: "assets/crew/image-anousheh-ansari.png",
      alt: "Anousheh Ansari",
    },
  },
];

function CrewPage() {
  const [activeCrewMember, setActiveCrewMember] = useState(crewMembers[0].id);

  const handleTabClick = (id: any) => {
    setActiveCrewMember(id);
  };

  return (
    <div id="main" className="crew grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div
        className="dot-indicators flex"
        role="tablist"
        aria-label="crew member list"
      >
        {crewMembers.map((crewMember) => (
          <button
            key={crewMember.id}
            aria-selected={activeCrewMember === crewMember.id}
            aria-controls={`${crewMember.id}-tab`}
            role="tab"
            data-image={`${crewMember.id}-image`}
            onClick={() => handleTabClick(crewMember.id)}
          >
            <span className="sr-only">{crewMember.position}</span>
          </button>
        ))}
      </div>

      {crewMembers.map((crewMember) => (
        <CrewMember
          key={crewMember.id}
          crewMember={crewMember}
          isActive={activeCrewMember === crewMember.id}
        />
      ))}
      {/* ... Image elements ... */}
    </div>
  );
}

export default CrewPage;
