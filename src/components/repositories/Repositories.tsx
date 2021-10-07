import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import axios from "axios";
import "./Repositories.scss";
import { TrendingHeader } from "../common/TrendingHeader";
import { IRepository } from "../../../types/IRepository";
import { Repository } from "./Repository";

export const Repositories = () => {
  const [repositories, setRepositories] = useState<Array<IRepository>>([]);

  useEffect(() => {
    axios
      .get("https://gh-trending-api.herokuapp.com/repositories")
      .then((result) => {
        setRepositories(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex-container">
      <Header subtitle="See what the GitHub community is most excited about today." />
      <div className="repositories-container">
        <TrendingHeader activeLink="repo" />
        {repositories.map((repository, index) => (
          <Repository key={`repository-${index}`} repository={repository} />
        ))}
      </div>
    </div>
  );
};
