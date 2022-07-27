import React, {createContext,useState} from "react";


interface AppContextData {
    theme: unknown 
   ToggleTheme: () => void
}


export const ThemeContext = createContext<AppContextData>({} as AppContextData);
const ThemeContextProvider = (props: any) => {
    
    const [theme,setTheme] = useState(true)
    const ToggleTheme = () => {
        
        setTheme(!theme);
    }
    if (theme) {
       document.body.classList.add('dark-body');
    }
    else {
        document.body.classList.remove('dark-body');
    }

    return(
        
        <ThemeContext.Provider value={{theme,ToggleTheme}}>
         {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;