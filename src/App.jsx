import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css'
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import SignUpForm from './components/SignUpForm';
import CreateEventForm from './components/CreateEventForm'
import ProtectedLayout from './components/ProtectedLayout';
import Layout from './components/Layout';
import Home from './components/Home'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='/signup' element={<SignUpForm />}/>
      <Route path='/eventlist' element={<EventList />}/>
      <Route path='/eventdetails/:id' element={<EventDetails />}/>
      <Route path="/protected" element={<ProtectedLayout />}>
        <Route path='createventform' element={<CreateEventForm />}/>
      </Route>
    </Route>
  ));


  return <RouterProvider router={router} />;
}

export default App
