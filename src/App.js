import "./App.css";
import ListTestTable from "./components/ListTestTable";
import TestPage from "./components/TestPage";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-auto m-10 mt-0">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<ListTestTable />} />
          <Route path="tests">
            <Route path=":tableName" element={<TestPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
