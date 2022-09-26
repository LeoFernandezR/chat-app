import {Schema, model} from "mongoose"

export interface IRoom {
  name: string
  description?: string
}

const RoomSchema = new Schema<IRoom>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const Room = model<IRoom>("Room", RoomSchema)
