import React, {createContext, useContext, useState} from "react";

export const ThemeModeContext =  createContext({
    themeMode: 'light',
    toggleThemeMode: () => {}
})

export const useThemeMode = () => useContext(ThemeModeContext)

export const ThemeModeProvider = ({children}: {children:React.JSX.Element}) => {

    const [themeMode, setThemeMode] = useState<'light'|'dark'>('light')
    const toggleThemeMode = () => setThemeMode(prev => prev==='light'?'dark':'light')
    
    return <ThemeModeContext.Provider value={{themeMode, toggleThemeMode}}>{children}</ThemeModeContext.Provider>
}