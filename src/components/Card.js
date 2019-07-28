import React from "react";
import { getAuthorName, getDateString, getTagString } from "../utils";

function Card({ item }) {
  return (
    <div className="card">
      <div className={"name"}>{getAuthorName(item.author)}</div>

      <a href={item.link}>
        <img
          className={"lazyload"}
          data-src={item.media.m}
          src={"placeholder.jpg"}
          alt={item.name}
        />
      </a>
      <div className={"date"}>Taken {getDateString(item.date_taken)}</div>

      <div className={"tags"}>{getTagString(item.tags)}</div>
    </div>
  );
}

export default Card;
