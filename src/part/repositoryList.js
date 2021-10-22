import Card from "components/Card";
import React, { useState, useEffect } from "react";
import GithubApi from "constants/api/github";
import { ReactComponent as IconFile } from "assets/icon/file.svg";
import Input from "components/Input";
import Loading from "components/Loading";
import Error from "components/Error";
import Paging from "components/Paging";
const RepositoryList = ({ serach }) => {
  const [fetching, setFetching] = useState({
    loading: false,
    data: [],
    error: null,
  });

  const [filter, setFilter] = useState("");

  const [page, setPage] = useState({
    current: 1,
    total: 0,
  });

  useEffect(() => {
    getUserRepoDetail();
  }, [, serach]);

  useEffect(() => {
    if (page.total) getAllData(page);
  }, [, serach, page]);

  const getAllData = async () => {
    const username = serach || "RianKhanafi";

    setFetching({ ...fetching, loading: true, error: null });
    try {
      const data = await GithubApi.getAll(username, { page: page.current });
      setFetching({ loading: false, data: data, error: null });
    } catch (error) {
      setFetching({ loading: false, data: [], error: error });
    }
  };

  const getUserRepoDetail = async () => {
    const username = serach || "RianKhanafi";
    try {
      const userRepos = await GithubApi.profile(username);

      setPage((old) => {
        return {
          ...old,
          total: userRepos?.public_repos,
        };
      });
    } catch (err) {}
  };

  return (
    <div className="repositories-list">
      <div style={{ display: "sitcky" }}>
        <h1>
          <IconFile className="icon" />
          Repositories <span> {page.total}</span>
        </h1>

        <Input
          className="input"
          placeholder="Find a repository..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {fetching.error && fetching.data.length === 0 && <Error />}
      {!fetching?.data?.length && !fetching?.loading && !fetching.error && (
        <span>No Repository</span>
      )}
      {(fetching?.data ?? [])
        .filter((e) => e.name.includes(filter))
        .map((elm, index) => {
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
      {fetching.loading && <Loading />}
      <Paging
        total={page.total}
        current={page.current}
        onChange={(e) => {
          setPage((old) => {
            return {
              ...old,
              current: e,
            };
          });
        }}
      />
    </div>
  );
};

export default React.memo(RepositoryList);
