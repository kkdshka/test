import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import "./Developers.scss";
import { IDeveloper } from "../../../types/IDeveloper";
import axios from "axios";
import { Developer } from "./Developer";
import { Navigation } from "../common/Navigation";
import { programmingLanguageOptions } from "../../utils/selectorsOptions";
import { Selector } from "../common/Selector";

export const Developers = () => {
  const [developers, setDevelopers] = useState<Array<IDeveloper>>([]);
  const [languageFilter, setLanguageFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (languageFilter !== "") {
      setLoading(true);
      axios
        .get(
          `https://gh-trending-api.herokuapp.com/developers/${languageFilter}`
        )
        .then((result) => {
          setDevelopers(result.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLoading(true);
      axios
        .get("https://gh-trending-api.herokuapp.com/developers")
        .then((result) => {
          setDevelopers(result.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [languageFilter, setLanguageFilter]);

  const handleLanguageChange = (language: string) => {
    setLanguageFilter(language);
  };

  return (
    <div className="flex-container">
      <Header subtitle="These are the developers building the hot tools today." />
      <div className="developers-container">
        <div className="developers-header">
          <Navigation activeLink="dev" />
          <Selector
            name="Language"
            options={programmingLanguageOptions}
            onChange={handleLanguageChange}
          />
        </div>
        {developers.length > 0 || loading ? (
          developers.map((developer, index) => (
            <Developer key={`developer-${index}`} developer={developer} />
          ))
        ) : (
          <div className="no-dev-data">
            It looks like we don’t have any trending developers for{" "}
            {languageFilter}.
          </div>
        )}
      </div>
    </div>
  );
};
