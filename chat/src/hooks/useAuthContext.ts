import {useContext} from "react"

import {AuthContext} from "../context/AuthContext"

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("AuthContext must be used within an AuthProvider")
  }

  return context
}

export default useAuthContext
