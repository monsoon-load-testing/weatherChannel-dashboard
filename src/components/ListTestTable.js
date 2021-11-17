import ListTest from "./ListTest";
import apiClient from "../lib/ApiClient";
import { useState, useEffect } from 'react';

const ListTestTable = () => {
  const [tables, setTables] = useState([]);
  
  useEffect(() => {
    const tablePromise = apiClient.getListOfTables();
    Promise.resolve(tablePromise)
    .then(data => {
      const temp = data;
      return temp
    })
    .then(data => {
      setTables(data)
    });
  }, [setTables])

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Test Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {JSON.stringify(tables) !== [] && (
                  tables.map(table => <ListTest key={table.testName} testName={table.testName} testDate={table.date} />)
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTestTable;
