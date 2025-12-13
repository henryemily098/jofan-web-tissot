import {
  Route,
  Routes
} from "react-router-dom";

import Landing from "./pages/landing";
import Collection from "./pages/collection";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Landing />
        }
      />
      <Route
        path="/collection"
        element={
          <Collection />
        }
      />
    </Routes>
  );
}

export default App;
