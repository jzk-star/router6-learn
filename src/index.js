import App from "./App"
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import Test1 from "./components/Test1"
 
ReactDOM.render(
    // <BrowserRouter>
    //     <App/>
    // </BrowserRouter>
    <BrowserRouter>
        <Test1/>
    </BrowserRouter>
    

    ,document.getElementById('root')
)