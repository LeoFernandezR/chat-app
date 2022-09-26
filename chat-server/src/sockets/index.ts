import {Server, Socket} from "socket.io"
import {DefaultEventsMap} from "socket.io/dist/typed-events"
import {Room, IRoom} from "../models/Room"

export default async (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  io.on("connection", (socket: Socket) => {
    console.log(`user has connected: ${socket.id}`)

    const emitRooms = async () => {
      const roomList = await Room.find({})
      socket.emit("server:room-list", roomList)
    }
    emitRooms()

    const refreshRooms = async () => {
      const roomList = await Room.find({})
      io.emit("server:room-list", roomList)
    }

    const createRoom = async (_newRoom: IRoom) => {
      const newRoom = new Room(_newRoom)

      try {
        await newRoom.save()
        refreshRooms()
      } catch (error) {
        console.error(error)
      }
    }

    socket.on("client:create-room", createRoom)

    socket.on("disconnect", () => {
      console.log(`user has disconnected: ${socket.id}`)
    })
  })
}
