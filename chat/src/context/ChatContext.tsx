import React, {createContext, useEffect, useState} from "react"
import {Outlet} from "react-router-dom"
import {io, Socket} from "socket.io-client"

import useAuthContext from "../hooks/useAuthContext"

export interface Message {
  value: string
  username?: string
  roomId: string
}

export interface NewRoom {
  name: string
  description?: string
}
export interface Room extends NewRoom {
  id: string
}

interface IChatContext {
  rooms: Room[]
  messages: Message[]
  socket: Socket
  addNewRoom: ({name, description}: NewRoom) => void
  getRoomInfo: (roomId: string | undefined) => Room[] | undefined
}

export const ChatContext = createContext<IChatContext>(null!)

let socket: Socket

export const ChatProvider: React.FC = ({}) => {
  const {token} = useAuthContext()
  const [rooms, setRooms] = useState<Room[]>([])
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    socket = io("http://localhost:5000/", {
      auth: {
        token,
      },
    })

    socket.on("server:room-list", (roomList) => {
      setRooms(roomList)
    })
  }, [])

  const addNewRoom = ({name, description = ""}: NewRoom) => {
    if (!name) return

    socket.emit("client:create-room", {name, description})
  }

  const getRoomInfo = (roomId: string | undefined) => {
    if (!rooms.length || !roomId) return

    return rooms.filter((room) => room.id === roomId)
  }

  return (
    <ChatContext.Provider value={{rooms: [], messages: [], socket, addNewRoom, getRoomInfo}}>
      <Outlet />
    </ChatContext.Provider>
  )
}
