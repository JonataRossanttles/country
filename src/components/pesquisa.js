import React ,{ useState,useContext } from "react";
import lupa from '../imagens/lupa.png'
import lupa_branca from '../imagens/lupa-branca.png'
import seta_branca from '../imagens/seta-filtro-branca.png'
import seta from '../imagens/seta-filtro.png'
import { DataContext } from "../datacontext";

function Pesquisa(){

    const {data,tema,setnomeinput,nomefiltro,setNomefiltro} = useContext(DataContext)

const [estadocombobox,setestadocombobox] = useState(false)

function combobox(){
    setestadocombobox(!estadocombobox)
}
function option(obj){
    setNomefiltro( obj.target.id)
    setestadocombobox(!estadocombobox)
}

function addpais(event){
    setnomeinput(event.target.value)
}



    return(
    <>
    
        <div id="container-geral-pesquisa">
            <div className={tema ? 'container-pesquisa-light': 'container-pesquisa'}>
                <img src={tema ?  lupa_branca : lupa } className="lupa"></img>
                <input id={tema? 'input-light': 'input'} placeholder="Search for a country..." onChange={addpais}></input>
            </div>
        <div className="container-geral-filtro">
            <div className={tema ? 'container-filtro-light' : 'container-filtro' }  onClick={combobox}>
                <span className= {tema ? 'text-filter-light' : 'text-filter' } > {nomefiltro}</span>
                <img src={tema ?  seta_branca : seta } className="seta"></img>
            </div>
        <div id={tema ? 'lista-light' : 'lista' } style={{ display: estadocombobox ? 'flex':'none' }}>
                <span className={tema ? 'option-light' : 'option' } onClick={option} id="Todas">Todas</span>
                <span className={tema ? 'option-light' : 'option' }  onClick={option} id="Africa">Africa</span>
                <span className={tema ? 'option-light' : 'option' }  onClick={option} id="Americas">Americas</span>
                <span className={tema ? 'option-light' : 'option' }  onClick={option} id="Asia">Asia</span>
                <span className={tema ? 'option-light' : 'option' }  onClick={option} id="Europe">Europe</span>
                <span className={tema ? 'option-light' : 'option' }  onClick={option} id="Oceania">Oceania</span>
            </div>
        </div>
            
        </div>
       
    
    
    </>
    
)

}

export default Pesquisa