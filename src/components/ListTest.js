const ListTest = (props) => {
  const date = new Date(Number(props.testDate, 10));
  const dateString = date.toDateString();
  const dateTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {props.testName}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{dateString}: {dateTime}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default ListTest;
