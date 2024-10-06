import React, { createContext, useContext, useState } from 'react';

// Create a Context for the data
const DataContext = createContext();

// Create a Provider component
export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        quotePricing: '',
        packageSelection: '',
        cart: [],
        total: 0,
        contactInfo: {},
        companyInfo: {}
    });

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook for accessing data
export const useData = () => {
    const context = useContext(DataContext);

    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }

    return context;
};
