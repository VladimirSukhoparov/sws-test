export const useLocalStorage = () => {
    const readLS = (key:string) => {
        try {
            return JSON.parse(localStorage.getItem(key)||'[]');
        } catch (error) {
            return localStorage.getItem(key);
        }
    };

    const writeLS = (key:string, value:[]| undefined) => {
        const storage = readLS(key) || [];
        Array.isArray(value) ? storage.push(...value) : storage.push(value);
        localStorage.setItem(key, JSON.stringify(storage));
    };

    

    return { readLS, writeLS };
};