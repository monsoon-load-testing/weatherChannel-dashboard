import logo from "../logos/svgs/color/logo.svg"

const Header = () => {
  return (
    <div className="flex-1 flex flex-col">
      <nav className="px-4 flex justify-center bg-indigo h-24 text-3xl relative">
        {/* <!-- top bar left --> */}
        <ul className="flex items-center absolute bottom-0 left-0">
          {/* <!-- add button --> */}
          <li className="h-24 w-24">
            <img className="h-full w-full mx-auto" src={logo} alt="the monsoon logo"/>
          </li>
        </ul>

        <ul className="flex items-center">
          {/* <!-- add button --> */}
          <li>
            <h1 className="pl-8 lg:pl-0 text-monsoonWhite font-raleway">
              WEATHER CHANNEL
            </h1>
          </li>
        </ul>

        {/* <!-- to bar right  --> */}
        <ul className="flex items-center"></ul>
      </nav>
    </div>
  );
};

export default Header;
