import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import AddUser from './users/AddUser'
import EditUser from './users/EditUser'
import ViewUser from './users/ViewUser'

function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/Home" element={<Home/>}></Route>
          <Route exact path="/addUser" element={<AddUser/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/edituser/:id" element={<EditUser/>}></Route>
          <Route exact path="/viewuser/:id" element={<ViewUser/>}></Route>
        </Routes>

      </Router>
      
    </div>
  )
}

export default App
