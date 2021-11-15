import { DraftChart } from "./DraftChart"

const TestPage = () => {
  return (
    <div class="h-screen w-full bg-white relative flex overflow-hidden">
      <div class="w-full h-full flex flex-col justify-between">
        {/* <!-- Header --> */}
        <header class="h-16 w-full flex items-center relative justify-between px-5 space-x-10 bg-gray-900">
          {/* <!-- Profile --> */}
          <div class="h-10 w-15 flex-grow items-center justify-center bg-red-200 rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <p class="text-center" >Step 1</p>
          </div>
          <div class="h-10 w-15 flex-grow items-center justify-center bg-red-200 rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <p class="text-center" >Step 2</p>
          </div>
          <div class="h-10 w-15 flex-grow items-center justify-center bg-red-200 rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <p class="text-center" >Step 3</p>
          </div>
          <div class="h-10 w-15 flex-grow items-center justify-center bg-red-200 rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <p class="text-center" >Step 4</p>
          </div>
          <div class="h-10 w-15 flex-grow items-center justify-center bg-red-200 rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <p class="text-center" >Step 5</p>
          </div>
        </header>

        {/* <!-- Main --> */}
        <main class="max-w-full h-full flex relative overflow-y-hidden">
          {/* <!-- Container --> */}
          <div class="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
            {/* <!-- Container --> */}
            <div class="w-full h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400">Statistics go here</div>
            <div class="w-full h-full rounded-lg flex-shrink-0 flex-grow bg-gray-400"><DraftChart /></div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default TestPage