import React from "react";

function People({ match }) {
  return <div>{match.params.id}</div>;
}

export default People;
