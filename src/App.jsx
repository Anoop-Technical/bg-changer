import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-1 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-lg p-2 m-4">
            <button onClick={() => setColor("red")} className="px-4 py-2 rounded-lg text-white shadow-xl outline-none" style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("black")} className="px-4 py-2 rounded-lg text-white shadow-xl outline-none" style={{ backgroundColor: "black" }}>Black</button>
            <button onClick={() => setColor("pink")} className="px-4 py-2 rounded-lg text-white shadow-xl outline-none" style={{ backgroundColor: "pink" }}>Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
