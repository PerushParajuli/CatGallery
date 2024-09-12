import React, { createContext, useState } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [inputText, setInputText] = useState("");
    const [favorite, setFavorite]  = useState([]);

    return (
        <DataContext.Provider
            value={{ inputText, setInputText, favorite, setFavorite }}
        >
            {children}
        </DataContext.Provider>
    );
};
