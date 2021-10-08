import React from "react";
import "./Repository.scss";
import { RiBookMarkLine } from "react-icons/ri";
import { HiOutlineStar } from "react-icons/hi";
import { BiGitRepoForked } from "react-icons/bi";
import { IRepository } from "../../../types/IRepository";
import { StarButton } from "./StarButton";

type Props = {
  repository: IRepository;
};

export const Repository = ({ repository }: Props) => {
  return (
    <article className="repository-container">
      <StarButton />
      <div className="repository-name-container">
        <RiBookMarkLine className="bookmark-icon" />
        <a
          href={repository.url}
          className={"repository-name"}
        >{`${repository.username} / ${repository.repositoryName}`}</a>
      </div>
      <p className="description">{repository.description}</p>
      <div className="repository-footer">
        {repository.language && (
          <span className="repository-footer-element">
            {repository.language}
          </span>
        )}
        <span className="repository-footer-element">
          <HiOutlineStar className={"star-icon"} />
          {repository.totalStars}
        </span>
        <span className="repository-footer-element">
          <BiGitRepoForked className={"star-icon"} />
          {repository.totalStars}
        </span>
        <span className="repository-footer-element">
          Built by{" "}
          {repository.builtBy.map((person) => (
            <img
              className="person-avatar"
              src={person.avatar}
              alt={person.username}
            />
          ))}
        </span>
      </div>
    </article>
  );
};
