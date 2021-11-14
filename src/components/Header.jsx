const Header = () => {
  return (
    <div class="flex-1 flex flex-col">
		<nav class="px-4 flex justify-between bg-white h-16 border-b-2">

			{/* <!-- top bar left --> */}
			<ul class="flex items-center">
				{/* <!-- add button --> */}
				<li class="h-6 w-6">
					<img
						class="h-full w-full mx-auto"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
						alt="svelte logo" />
				</li>
			</ul>

			<ul class="flex items-center">
				{/* <!-- add button --> */}
				<li>
					<h1 class="pl-8 lg:pl-0 text-gray-700">Monsoon Weather Channel</h1>
				</li>
			</ul>

			{/* <!-- to bar right  --> */}
			<ul class="flex items-center"></ul>

		</nav>
	</div>
  )
}

export default Header