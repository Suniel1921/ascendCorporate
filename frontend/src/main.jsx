// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { AuthProvider } from './contexts/AuthContext.jsx'
// import { CartProvider } from './contexts/cartContext.jsx'
// import { DataProvider } from './contexts/DataStoringContext.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
  
//   <React.StrictMode>
//     <AuthProvider>
//       <CartProvider>
//         <DataProvider>
//     <App />
//         </DataProvider>
//     </CartProvider>
//     </AuthProvider>
//   </React.StrictMode>,
// )




// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { CartProvider } from './contexts/cartContext.jsx';
import { DataProvider } from './contexts/DataStoringContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <DataProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </DataProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
