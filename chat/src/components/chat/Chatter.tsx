import React from "react"
import {Outlet} from "react-router-dom"

import ChatAside from "./ChatAside"

export interface NewRoom {
  name: string
  description?: string
}
export interface Room extends NewRoom {
  id: number
}

interface Props {}

export const Chatter: React.FC<Props> = ({}) => {
  return (
    <main className="flex max-h-screen h-screen bg-stone-900 text-white">
      <ChatAside />
      <Outlet />
    </main>
  )
}
