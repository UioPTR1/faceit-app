import React from "react";
import { useParams } from "react-router-dom";
import PlayerData from "../components/PlayerData";
import IDS from "../playerIDS";

const PlayerProfile = () => {
  const playerName = useParams();
  let id;

  switch (playerName.name) {
    case "lior":
      id = IDS.liorID;
      break;
    case "itay":
      id = IDS.itayID;
      break;
    case "hezi":
      id = IDS.heziID;
      break;
    case "ayra":
      id = IDS.ayraID;
      break;
    case "lavan":
      id = IDS.lavanID;
      break;
      case "ariel":
      id = IDS.arielID;
      break;
    default:
      id = IDS.liorID;
      break;
  }

  return (
    <div>
      <h1>{playerName.name}</h1>
      <PlayerData id={id} />
    </div>
  );
};

export default PlayerProfile;
