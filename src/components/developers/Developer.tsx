import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import { RiBookMarkLine } from "react-icons/ri";
import { IDeveloper } from "../../../types/IDeveloper";
import "./Developer.scss";
import { FollowButton } from "./FollowButton";

export const Developer = ({ developer }: { developer: IDeveloper }) => {
  return (
    <div className="developer-container">
      <div className="rank">{developer.rank}</div>
      <div className="avatar-container">
        <a href={developer.url}>
          <img
            className="avatar"
            src={developer.avatar}
            alt={developer.username}
          />
        </a>
      </div>
      <div className="name-container">
        <a href={developer.url} className="name">
          {developer.name}
        </a>
        <a href={developer.url} className="username">
          {developer.username}
        </a>
      </div>
      <div className="developer-repository-container">
        <div className="align-row-center">
          <AiOutlineFire className="fire-icon" />
          <span className="popular-repo">POPULAR REPO</span>
        </div>
        <div className="align-row-center">
          <RiBookMarkLine className="developer-bookmark-icon" />
          <a
            className="developer-repository-name"
            href={developer.popularRepository.url}
          >
            <span>{developer.popularRepository.repositoryName}</span>
          </a>
        </div>
        <p className="developer-repository-description">
          {developer.popularRepository.description}
        </p>
      </div>
      <div className="developer-buttons-container">
        <FollowButton />
      </div>
    </div>
  );
};
