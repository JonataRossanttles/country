// DataContext.js
import React, { createContext, useState, useEffect } from 'react';

// Crie o contexto
export const DataContext = createContext();

// Crie um provedor para o contexto
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [tema,setTema] = useState(false)
    const [nomeinput,setnomeinput] = useState()
    const [nomefiltro,setNomefiltro] = useState('Filtro por região')
    
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {setData(data)
              localStorage.setItem('paises', JSON.stringify(data))} );
    }, []);

    if(tema){
        document.body.classList.add('body-dark')
        document.body.classList.remove('body-light')
    }else{
        document.body.classList.add('body-light')
        document.body.classList.remove('body-dark')
    }

   

    return (
        <DataContext.Provider value={{data,tema,setTema,nomeinput,setnomeinput,nomefiltro,setNomefiltro}}>
            {children}
        </DataContext.Provider>
    );
};