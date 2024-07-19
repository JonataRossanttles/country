import React, { useEffect,useState, useContext } from "react";
import { DataContext } from '../datacontext';
import  {Link} from 'react-router-dom';



function Main(){

   
    
    const {data,tema,nomeinput,nomefiltro} = useContext(DataContext)
    const [arrayfiltrado,setArrayfiltrado] = useState(data)
    const [arrayregion,setArrayregion] = useState(data)

    if(tema){
        document.body.classList.add('body-dark')
        document.body.classList.remove('body-light')
    }else{
        document.body.classList.add('body-light')
        document.body.classList.remove('body-dark')
    }
    useEffect(()=>{
        if(nomefiltro ==='Filtro por região' || nomefiltro ==='Todas' ){
            setArrayregion(data)
        }else{
            setArrayregion(data.filter(element=> element.region.toLowerCase() === nomefiltro.toLowerCase()))
        }
        
    },[nomefiltro,data])
    

    useEffect(()=>{
       
        if(nomeinput){
            setArrayfiltrado(arrayregion.filter(element=> element.translations.pt.toLowerCase().startsWith(nomeinput.toLowerCase())))
        }else{
            setArrayfiltrado(arrayregion)
        }
       
    },[nomeinput,arrayregion])
    
    return(
    <>
    <main>
    {
        arrayfiltrado.map((element,index)=>(
            <>
        <Link to={`/${element.translations.pt}`} className="link "> 
            <div  key={element.translations.pt} className={tema ?  'card-dark':  'card-light'} >
            <img src={element.flags.png} className="img-pais" alt="pais"></img>
        <div className="container-information-card">
            <h3 className={tema ? 'nome-pais-light' :'nome-pais'}>{element.translations.pt}</h3>
            <div className="information-card"> 
                <strong>  <span className={tema ?  'rotulo-light' : 'rotulo' }>População:</span>  </strong>
                <span  className={tema ?  'rotulo-light' : 'rotulo' } >{element.population.toLocaleString('pt-BR')}</span>
            </div>
             <div className="information-card"> 
                <strong><span className={tema ?  'rotulo-light' : 'rotulo' }>Região:</span>  </strong>
                <span className={tema ?  'rotulo-light' : 'rotulo' }>{element.region}</span>
            </div>
             <div className="information-card"> 
                <strong><span className={tema ?  'rotulo-light' : 'rotulo' }>Capital:</span>  </strong>
                <span className={tema ?  'rotulo-light' : 'rotulo' }>{element.capital}</span>
            </div>
        </div>
            
            </div>
        </Link> 
        </>
        ))
           
    }     
        
    </main>
    
    </>
    
)

}

export default Main