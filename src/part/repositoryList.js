import Card from "components/Card";
import React, { useState, useEffect } from "react";
import GithubApi from "constants/api/github";
import { ReactComponent as IconFile } from "assets/icon/file.svg";
import Input from "components/Input";
import Loading from "components/Loading";
import Error from "components/Error";
export default function RepositoryList({ serach }) {
  const [fetching, setFetching] = useState({
    loading: false,
    data: [],
    error: null,
  });
  useEffect(() => {
    getAllData();
  }, [, serach]);

  const getAllData = async () => {
    const username = serach || "RianKhanafi";

    setFetching({ loading: true, data: [], error: null });
    try {
      const data = await GithubApi.getAll(username);
      setFetching({ loading: false, data: data, error: null });
    } catch (error) {
      setFetching({ loading: false, data: [], error: error });
    }
  };

  return (
    <div className="repositories-list">
      <h1>
        <IconFile className="icon" />
        Repositories <span> {(fetching?.data ?? []).length}</span>
      </h1>

      <Input className="input" placeholder="Find a repository..." />
      {fetching.loading && <Loading />}
      {fetching.error && fetching.data.length === 0 && <Error />}
      {(fetching?.data ?? []).map((elm, index) => {
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
