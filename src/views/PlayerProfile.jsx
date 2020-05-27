import React from "react";
import { useParams } from "react-router-dom";
import PlayerData from "../components/PlayerData";
import IDS from "../playerIDS";

const PlayerProfile = () => {
  const playerName = useParams();
  
  const ids = Object.entries(IDS);
  const id = ids.find((element) => element.includes(playerName.name));
  console.log(id, " asdasdasdas");

  // switch (playerName.name) {
  //   case "lior":
  //     id = IDS.liorID;
  //     break;
  //   case "itay":
  //     id = IDS.itayID;
  //     break;
  //   case "hezi":
  //     id = IDS.heziID;
  //     break;
  //   case "ayra":
  //     id = IDS.ayraID;
  //     break;
  //   case "lavan":
  //     id = IDS.lavanID;
  //     break;
  //   case "ariel":
  //     id = IDS.arielID;
  //     break;
  //   default:
  //     id = IDS.liorID;
  //     break;
  // }

  return (
    <div>
      <h1>
        {playerName.name.slice(0, 1).toUpperCase() +
          playerName.name.substring(1)}
      </h1>
      <PlayerData id={id[1]} />
    </div>
  );
};

export default PlayerProfile;
