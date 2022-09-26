import React from "react"
import {useParams} from "react-router-dom"
interface Props {}

const Chat: React.FC<Props> = ({}) => {
  const {chatId} = useParams()

  return <div>{chatId}</div>
}

export default Chat
