import './App.css';
import Header from "./Components/Header/Header";
import {RouterProvider} from "react-router-dom";
import router from "./routes/routes";


function App() {
    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
