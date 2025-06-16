import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './assets/Pages/Events';
import EventDetailsP from './assets/Pages/EventDetailsP';
import BookingEvent from './assets/Pages/BookingEvent';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Events />} />
      <Route path='/events/:id' element={<EventDetailsP />} />
      <Route path='events/booking/:id' element={<BookingEvent />} />
    </Routes>
  )
}

export default App
