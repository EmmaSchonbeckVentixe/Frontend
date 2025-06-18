import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './assets/pages/Events';
import EventDetailsP from './assets/pages/EventDetailsP';
import BookingEvent from './assets/pages/BookingEvent';


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
