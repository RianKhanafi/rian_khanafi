import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import GithubApi from "constants/api/github";
import Layout from "components/layout";
import Card from "components/Card";
import RepositoryList from "part/repositoryList";
function App() {
  return (
    <Layout>
      <div className="App">
        <RepositoryList />
      </div>
    </Layout>
  );
}

export default App;
