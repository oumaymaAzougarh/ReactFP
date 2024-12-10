
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from './Body.tsx';
import Header from './Header.tsx';
import MinsideBar from './MinsideBar.tsx';
import Alert from './Alert.tsx';
import StatusW from './StatusW.tsx';
import ListWorker from './ListWorker.tsx';
import Login from "./Login.tsx";
import ForgotPassword from "./ForgotPassword.tsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}L
        <Route path="/" element={<Login/>} /> {/* Default Route: Login */}
        <Route path="/ForgotPassword" element={<ForgotPassword/>} /> 
        

        {/* Other Routes with Sidebar and Header */}
        <Route
          path="*"
          element={
            <div className="flex flex-col md:flex-row overflow-hidden">
              {/* Small Sidebar for mobile */}
              <div className="w-full md:w-[60px] h-screen bg-black z-10">
                <MinsideBar />
              </div>

              {/* Main Content */}
              <div className="flex-1 h-screen">
                {/* Header */}
                <div className="h-[54px] bg-red-500 z-10">
                  <Header />
                </div>
                <StatusW/>
                <Alert/>
                <ListWorker/>
                

                {/* Other Routes */}
                <Routes>
                  <Route path="/dashboard" element={<Body/>} />
                  
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
