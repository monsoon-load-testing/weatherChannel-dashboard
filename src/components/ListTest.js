const ListTest = (props) => {
  const date = new Date(Number(props.testDate, 10));
  const dateString = date.toDateString();
  const dateTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const url = props.url

  const clickHandler = props.clickHandler
  return (
    <tr data-url={url} onClick={clickHandler} className="cursor-pointer">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="items-center">
          <div className="ml-4">
            <div className="text-xl text-center font-medium text-gray-900">
              {props.testName}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-xl text-center text-gray-900">{dateString}: {dateTime}</div>
      </td>
    </tr>
  );
};

export default ListTest;
