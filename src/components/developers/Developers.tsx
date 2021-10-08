import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import "./Developers.scss";
import { IDeveloper } from "../../../types/IDeveloper";
import axios from "axios";
import { Developer } from "./Developer";
import { Navigation } from "../common/Navigation";

export const Developers = () => {
  const [developers, setDevelopers] = useState<Array<IDeveloper>>([]);

  useEffect(() => {
    axios
      .get("https://gh-trending-api.herokuapp.com/developers")
      .then((result) => {
        setDevelopers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex-container">
      <Header subtitle="These are the developers building the hot tools today." />
      <div className="developers-container">
        <div className="developers-header">
          <Navigation activeLink="dev" />
        </div>
        {developers.map((developer, index) => (
          <Developer key={`developer-${index}`} developer={developer} />
        ))}
      </div>
    </div>
  );
};
