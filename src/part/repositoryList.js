import Card from "components/Card";
import React, { useState, useEffect } from "react";
import GithubApi from "constants/api/github";
import { ReactComponent as IconFile } from "assets/icon/file.svg";
import Input from "components/Input";
export default function RepositoryList({ serach }) {
  const [repoData, setRepoData] = useState([]);
  useEffect(() => {
    getAllData();
  }, [, serach]);

  const getAllData = async () => {
    const username = serach || "RianKhanafi";
    try {
      const data = await GithubApi.getAll(username);
      setRepoData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="repositories-list">
      <h1>
        <IconFile className="icon" />
        Repositories <span> {repoData.length}</span>
      </h1>

      <Input className="input" placeholder="Find a repository..." />
      {repoData.map((elm, index) => {
        return (
          <Card
            key={index}
            name={elm?.name}
            visibility={elm.visibility}
            language={elm?.language}
            watchers={elm?.watchers}
          />
        );
      })}
    </div>
  );
}
