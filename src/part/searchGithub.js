import Input from "components/Input";
import React, { useState } from "react";

const GithubProfile = ({ hanleSearch, serach }) => {
  return (
    <div>
      <h3>Find Repository by username</h3>
      <Input placeholder="Github username" onChange={hanleSearch} />
      <span>
        <i>Result from: {serach}</i>
      </span>
    </div>
  );
};

export default React.memo(GithubProfile);
