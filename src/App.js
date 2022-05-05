import { Router } from "./Router/Router";
import { GlobalState } from "./global/GlobalState";
import Header from "./Components/Header/Header";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
