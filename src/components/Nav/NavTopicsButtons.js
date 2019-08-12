import React from "react";
import { Link } from "@reach/router";

const NavTopicsButtons = ({ topics }) => {
  return (
    <>
      {topics.map(topic => {
        const { slug } = topic;
        return (
          <Link key={slug} to={`/topics/${slug}`} data-cy={slug}>
            {topic.slug}
          </Link>
        );
      })}
    </>
  );
};

export default NavTopicsButtons;
