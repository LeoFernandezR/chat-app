import {BrowserRouter, Route, Routes} from "react-router-dom"

import {Chatter, Home, Login, SignUp} from "../pages"
import Layout from "../components/commons/layout/Layout"
import {ChatProvider} from "../context/ChatContext"
import ChatHome from "../components/chat/ChatHome"
import Chat from "../components/chat/Chat"

import RequireAuth from "./RequireAuth/RequireAuth"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
        </Route>

        <Route element={<RequireAuth />}>
          <Route element={<ChatProvider />}>
            <Route element={<Chatter />} path="/chat">
              <Route index element={<ChatHome />} />
              <Route element={<Chat />} path=":chatId" />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
