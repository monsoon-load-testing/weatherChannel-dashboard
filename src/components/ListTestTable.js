import ListTest from "./ListTest";
import apiClient from "../lib/ApiClient";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const ListTestTable = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const tablePromise = apiClient.getListOfTables();
    Promise.resolve(tablePromise)
      .then((data) => {
        const temp = data;
        return temp;
      })
      .then((data) => {
        setTables(data);
      });
  }, [setTables]);

  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.preventDefault();
    navigate(`/tests/${e.target.closest("tr").dataset.url}/`);
  };

  return (
    <div className="flex flex-col max-w-full">
      <div className="w-full bg-white relative flex overflow-hidden border-2 rounded-lg border-mediumPurple h-800">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xl font-medium tracking-wider font-raleway"
                  >
                    Test Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xl font-medium tracking-wider font-raleway"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {JSON.stringify(tables) !== [] &&
                  tables
                    .sort((a, b) => {
                      return a.date > b.date ? -1 : 1;
                    })
                    .map((table) => {
                      let keyName = `${table.testName}-${table.date}`;
                      return (
                        <ListTest
                          key={keyName}
                          url={keyName}
                          testName={table.testName}
                          testDate={table.date}
                          clickHandler={clickHandler}
                        />
                      );
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTestTable;
