import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import Awrapper from "../about/Awrapper";
import "./team.css";
import "../about/about.css";

const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default Team;
