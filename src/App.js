import "./App.css";
import ListTestTable from "./components/ListTestTable";
import TestPage from "./components/TestPage";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<ListTestTable />} />
          <Route path="tests">
            <Route path=":tableName" element={<TestPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

{
  /* <Route path={`/bins/${binId}`}>
  <BinPage binId={binId} handleGoToHome={handleGoToHome}/>
</Route> */
}

export default App;
