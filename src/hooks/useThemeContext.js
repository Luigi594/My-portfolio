import { useContext } from "react";
import { ThemeContext } from '../Context/ThemeContext';

export const useThemeContext = () => {

    const context = useContext(ThemeContext);

    if(!context){
        throw Error("UseWorkoutsContext must be used inside on WorkoutProvider")
    }

    return context;
}