import Layout from "components/layout";
import GithubProfile from "part/githubProfile";
import RepositoryList from "part/repositoryList";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [serach, setSearch] = useState("RianKhanafi");

  const hanleSearch = (e) => {
    const timing = setTimeout(() => {
      setSearch(e.target.value);
    }, 1200);

    return () => {
      clearTimeout(timing);
    };
  };

  return (
    <Layout
      leftcontent={<GithubProfile serach={serach} hanleSearch={hanleSearch} />}
    >
      <RepositoryList serach={serach} />
    </Layout>
  );
}

export default App;
