import { Routes, Route } from "react-router-dom"
import Home from "./components/routes/home/home.component"
import Navigation from "./components/routes/navigation/navigation.component"
import Authentication from "./components/routes/authentication/authentication.component"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
