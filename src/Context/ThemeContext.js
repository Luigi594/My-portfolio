import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext();

const getInitialTheme = () => {

    /** what this is doing first is, to check if the type of the theme
     * is undefined and if there's an item in localStorage
     */
    if (typeof window !== 'undefined' && window.localStorage) {

        // if it's true will grab the item
        const storedPrefs = window.localStorage.getItem('theme');

        // checks if the type is equal to string
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        // here we can check the user preferences
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (userMedia) {
            return 'light';
        }
    }

   return 'dark' // light theme as the default;
};

export const ThemeProvider = ({ initialTheme, children }) => {

    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = (rawTheme) => {

        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('theme', rawTheme)
    }

    if(initialTheme){
        rawSetTheme(initialTheme)
    }

    useEffect(() => {

        rawSetTheme(theme)

    }, [theme])

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}