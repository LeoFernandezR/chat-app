import {Icon} from "@iconify/react"
import React from "react"

import Logo from "../../assets/logo/logo.png"

interface Props {}

const mockArr = Array(80).fill("link")

const ChatAside: React.FC<Props> = ({}) => {
  return (
    <aside className="max-h-full h-full top-0 bottom-0 p-2 min-w-fit max-w-[15%] w-full flex flex-col gap-2">
      <header className="flex justify-between">
        <h3 className="text-3xl">Chatter</h3>
        <div className="w-10 mr-3">
          <img alt="chatter-logo" src={Logo} />
        </div>
      </header>
      <section className="contents">
        <div className="bg-stone-900 flex justify-between items-center font-bold text-white">
          <h4>Rooms:</h4>
          <button className="text-xl px-2 text-pink-400 relative group">
            <span className="font-light absolute text-sm top-8 left-[-60%] block w-max bg-stone-700 p-2 rounded-md opacity-0  group-hover:opacity-100 transition-opacity duration-300 after:content-[''] after:absolute after:w-2 after:h-2 after:bg-stone-700 after:rotate-45 after:bottom-8 after:right-[45%]">
              New room
            </span>
            <Icon icon="mdi:add" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="font-light text-slate-200 max-h-full">
            {mockArr.map((val, i) => (
              <li key={i} className="px-2 hover:bg-stone-700 transition-colors duration-200">
                {val}
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <footer className="flex gap-2 items-center justify-between">
        <h4>Leonorris</h4>
        <div className="text-xl mr-3 text-pink-400 relative group">
          <span className="font-light absolute text-sm bottom-8 -right-5 bg-stone-700 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 after:content-[''] after:absolute after:w-2 after:h-2 after:bg-stone-700 after:rotate-45 after:bottom-0 after:top-8 after:right-[45%]">
            Logout
          </span>
          <button>
            <Icon icon="mdi:logout" />
          </button>
        </div>
      </footer>
    </aside>
  )
}

export default ChatAside
