// import { MyProvider } from "./components/contexto"
// import MyChildren from "./components/filho"

import { useState, createContext, useContext } from "react"

const PreferencesContext = createContext()

function App() {
  
  const [preferences, setPreferences] = useState({theme: 'light', language: 'pt-br'})
  
  const toggleTheme = () => {
    setPreferences(currentTheme => ({
      ...currentTheme,
      theme: currentTheme.theme === 'light' ? 'dark' : 'light'}))
  }

  const toggleLanguage = (language) => {
    setPreferences(currentLanguage => ({
      ...currentLanguage,
      language: language
    }))
    
  }

  return (
    <>
    

      <PreferencesContext.Provider value={{ preferences, toggleTheme, toggleLanguage}}>
        <div>
          <ToolBar />
          <button onClick={toggleTheme}>Mudar tema</button>
          <button onClick={ () => toggleLanguage('pt-br')}>PT-BR</button>
          <button onClick={ () => toggleLanguage('en')}>EN</button>
        </div>
      </PreferencesContext.Provider>

    </>
  )
}

function ToolBar () {
  const { preferences } = useContext(PreferencesContext);

  return (
    <div style={{backgroundColor: preferences.theme === 'light' ? 'white' : 'black', color: preferences.theme === 'light' ? 'black' : 'white'}}>
      Tema utilizado - {preferences.theme}, Idioma: {preferences.language}
    
      <p>{preferences.language === 'pt-br' ? 'Olá, meu nome é  Reinan' : 'Hello, my name is Reinan'}</p>
    </div>
  )
}

export default App
