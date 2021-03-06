import React from "react";
import "./App.css";
import { Row } from "./component/Row";
import { Banner } from "./component/Banner";
import { Nav } from "./component/Nav";
import { requests } from "./request";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIXオリジナル"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="トップ" fetchUrl={requests.feactTopRated} />
      <Row title="アクション" fetchUrl={requests.feactActionMovies} />
      <Row title="コメディ" fetchUrl={requests.feactComedyMovies} />
      <Row title="ホラー" fetchUrl={requests.feactHorrorMovies} />
      <Row title="ラブロマンス" fetchUrl={requests.feactRomanceMovies} />
      <Row title="ドキュメンタリー" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;