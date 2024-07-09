import React,{useContext} from "react";
import { DataContext } from "../datacontext";
import  { useEffect,useState } from "react";
import lua from '../imagens/lua.png'
import sol from '../imagens/sol.png'


function Header(){

    const {tema,setTema} = useContext(DataContext)
    function mode(){
        setTema(!tema)
    }


    return(
    <>
    <header className={tema ? 'header-dark':''}>
        <div className="header">
        <h1 className={tema ? 'logo-dark' : 'logo'}>Onde no mundo?</h1>
        <div className="container-darkmode" onClick={mode}>
            <img src={tema ? sol : lua} className="lua"></img>
            <span className={ tema ?  'dark-mode':   'light-mode' }> {tema ? 'Light mode': ' Dark mode'}</span>
        </div>
        </div>
        
    </header>
    
    </>
    
)

}

export default Header