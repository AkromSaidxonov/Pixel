import Reac from "react";
import { ToastContainer } from "react-toastify";

//
import Routes from "./routes/Routes";
const App = () => {
  return (
    <div className="App">
      <Routes />
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
