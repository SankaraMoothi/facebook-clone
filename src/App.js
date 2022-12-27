import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.value);
  return <div>{user ? <Dashboard /> : <Login />}</div>;
}

export default App;
