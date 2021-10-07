import React from "react";
import "./Repository.scss";
import { IRepository } from "../../../types/IRepository";
import { StarButton } from "./StarButton";

type Props = {
  repository: IRepository;
};

export const Repository = ({ repository }: Props) => {
  return (
    <article className="repository-container">
      <StarButton />
      <div className="repository-name">{`${repository.username} / ${repository.repositoryName}`}</div>
    </article>
  );
};
