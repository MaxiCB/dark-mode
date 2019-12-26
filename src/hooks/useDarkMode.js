import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [dark, setDark] = useLocalStorage(false);

    useEffect(() => {
        if(dark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [dark])
    return [dark, setDark];
}