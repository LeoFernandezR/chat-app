import {Schema, model} from "mongoose"

export interface IMessage {
  value: string
  username: string
  roomId: string
}

export const messageSchema = new Schema<IMessage>(
  {
    username: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    roomId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
    versionKey: false,
  },
)

export const Message = model<IMessage>("Message", messageSchema)
