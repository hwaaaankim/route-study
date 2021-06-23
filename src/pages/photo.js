import React from "react";

function Photo({ match }) {
  return <div>{match.params.id}</div>;
}

export default Photo;
