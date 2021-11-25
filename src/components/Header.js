const Header = () => {
  return (
    <div className="flex-1 flex flex-col">
      <nav className="px-4 flex justify-between bg-indigo h-16 border-b-2 text-4xl">
        {/* <!-- top bar left --> */}
        <ul className="flex items-center">
          {/* <!-- add button --> */}
          <li className="h-6 w-6">
            <img
              className="h-full w-full mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
              alt="monsoon logo"
            />
          </li>
        </ul>

        <ul className="flex items-center">
          {/* <!-- add button --> */}
          <li>
            <h1 className="pl-8 lg:pl-0 text-cornFlowerBlue">
              Monsoon Weather Channel
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
