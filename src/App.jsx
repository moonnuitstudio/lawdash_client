import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"

import store from "./store"

import { ToastContainer } from "react-toastify"

import DashboardLayout from "./layouts/DashboardLayout"

import Dashboard from "./pages/Dashboard"
import MattersPage from "./pages/MattersPage"
import ClientsPage from "./pages/ClientsPage"
import ContactsPage from "./pages/ContactsPage"
import IntakePage from "./pages/IntakePage"
import TasksPage from "./pages/TasksPage"

import LoadScreen from "./components/gui/LoadScreen"

import "react-toastify/dist/ReactToastify.min.css"
import './App.css'

function App() {

  const { loginWithPopup, loginWithRedirect, logout, isLoading, error, user, isAuthenticated} = useAuth0()
  
  if (error) {
    return <div>Oops... {error.message}</div>;
  }


  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="matters" element={<MattersPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="intakes" element={<IntakePage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="tasks" element={<TasksPage />} />
          </Route>
        </Routes>

        <LoadScreen />
        <ToastContainer />
      </Provider>
    </Router>
  )
}

export default App
