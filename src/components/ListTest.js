const ListTest = (props) => {
  const date = new Date(Number(props.testDate, 10));
  const dateString = date.toDateString();
  const hours =
    String(date.getHours()).length === 1
      ? `0${date.getHours()}`
      : String(date.getHours());
  const minutes =
    String(date.getMinutes()).length === 1
      ? `0${date.getMinutes()}`
      : String(date.getMinutes());
  const seconds =
    String(date.getSeconds()).length === 1
      ? `0${date.getSeconds()}`
      : String(date.getSeconds());

  const dateTime = `${hours}:${minutes}:${seconds}`;
  const url = props.url;

  const clickHandler = props.clickHandler;
  return (
    <tr data-url={url} onClick={clickHandler} className="cursor-pointer ">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="items-center">
          <div className="ml-4">
            <div className="text-xl text-center font-medium text-gray-900 font-openSans">
              {props.testName}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-xl text-center text-gray-900 font-openSans">
          {dateString}: {dateTime}
        </div>
      </td>
    </tr>
  );
};

export default ListTest;
