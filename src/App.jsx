
import { GlobalStyle } from './pages/Vehicles/VehiclesStyled'
import { AppRouter } from './routes/AppRoutes'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { useState,useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  useEffect(()=>
  {
     localStorage.setItem('theme',theme)
    

  },[theme])
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >

        <GlobalStyle />
        <AppRouter setTheme={setTheme} theme={theme} />


      </ThemeProvider>

    </>

  )
}

export default App
