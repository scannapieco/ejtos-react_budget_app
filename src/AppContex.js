// src/AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [budget, setBudget] = useState(0);

    return (
        <AppContext.Provider value={{ budget, setBudget }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
