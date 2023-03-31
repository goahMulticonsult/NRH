import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Home from "./pages/Home";
import "./app.css"

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Home />
    </LocalizationProvider>
  )
}

export default App;