import React from "react";

function Props({users}) {
  return (
    <div>
       <h2>{users.regno} , {users.name}</h2>
    </div>
  );
}

export default Props;