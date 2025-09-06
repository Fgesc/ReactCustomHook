import { useState, useEffect } from "react";

type UseLocalStorage<Type> = [
    Type,
    (value: Type | ((prev: Type) => Type)) => void
];

export const useLocalStorage = <Type>(key: string, initialValue: Type): UseLocalStorage<Type> => {
    const [value, setValue] = useState<Type>(() => {

        if (typeof window === "undefined") return;

        try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
        } catch (error) {
        console.warn(`Не удалось прочитать ключ "${key}"`, error);
        return initialValue;
        }
    });

    useEffect(() => {
        
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.warn(`Ошибка при записи "${key}":`, err);
        }
    }, [key, value]);

    return [value, setValue];
};



































//Это я делал изначально только для строк, пусть побудет пока тут
// type UseLocalStorage = [
//     string,
//     (value : string) => void,
// ]

// export const useLocalStorage = (key: string, initialValue: string ): UseLocalStorage => {

//     const getValue = (): string  => {

//         try {
//             const item = window.localStorage.getItem(key);
//             return item ?? initialValue;
//         } catch (err) {
//             console.warn(`Не удалось прочитать ключ "${key}"`, err);
//             return initialValue;
//         }

//     };

//     const [value, setValue] = useState<string>(getValue);

//     useEffect(() => {

//         if (typeof window === "undefined") return;

//         try {
//             window.localStorage.setItem(key, value);
//         } catch (err) {
//             console.warn(`Ошибка при записи "${key}":`, err);
//         }

//     }, [key, value]);

//     return [value, setValue];
// }