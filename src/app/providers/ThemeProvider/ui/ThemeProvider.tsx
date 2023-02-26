
import {FC, PropsWithChildren, useMemo, useState} from "react";
import * as React from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext,Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

type Props = {
    children?:React.ReactNode
}

const ThemeProvider= ({children}:Props) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

    const defaultProps = useMemo(()=>({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return(
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider