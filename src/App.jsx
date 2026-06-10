import { Routes, Route} from "react-router-dom";
import Notifications from "./pages/Notifications";
import PriorityInbox from "./pages/PriorityInbox";
function App(){
  return(
    <Routes>
      <Route path="/" element={<PriorityInbox />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}
export default App;