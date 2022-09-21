import {
  BrowserRouter, Navigate,
  Route, Routes,
} from "react-router-dom";
import { AppA } from "./apps/app-a/AppA";
import { AppB } from "./apps/app-b/AppB";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/app-a" replace/>}/>
        <Route path="/app-a" element={<AppA/>}/>
        <Route path="/app-b" element={<AppB/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
