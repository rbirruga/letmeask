import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const TestContext = createContext({} as any);

function App() {
  const [value, setValue] = useState('teste');

  return (
    <BrowserRouter>
      <TestContext.Provider value={{ value, setValue}}>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/rooms/new" Component={NewRoom}/>
        </Routes>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
