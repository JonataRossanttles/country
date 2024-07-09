import React, { useEffect,useState, useContext } from "react";
import { DataContext } from "../datacontext";
import seta_back from '../imagens/seta-back.png'
import seta_back_branca from '../imagens/seta-back-branca.png'
import  {Link,useParams} from 'react-router-dom';



function Descri(){
    
    const {pais} = useParams()
    const [borderCountries, setBorderCountries] = useState([]);
    const {data,tema} = useContext(DataContext)
   
    
        var information =  data.filter((element)=>element.translations.pt == pais)
    
       
    useEffect(()=>{
        if('borders' in  information[0]) {
            const siglaborder = information[0].borders  
        var bordercountry = siglaborder.map((element)=>{
           const elemento =  data.find((dados)=> dados.alpha3Code == element)
            return  <Link to={`/${elemento.translations.pt}`} className="link-descricao"> <button className= {tema ?  "button-paises-viz"   : "button-paises-viz-light"  }>{elemento.translations.pt}</button> </Link> 
          
        })  

        setBorderCountries(bordercountry)
        }else{
            setBorderCountries(<span  style={{ color: tema ? 'white' : 'black' }} >Não existe</span>)
            
        }
        
    },[pais,data,information])
   
    
    return(
    <>
    <section className="descricao">
        <Link to='/' className="link">
        <div className={tema ?  'button-back-dark' : 'button-back-light' }>
            <img src={tema ?   seta_back_branca  :  seta_back } className="seta_back"></img> 
            <span  className={tema ?  'text-voltar-dark' : 'text-voltar-light' }>Voltar</span>
        </div>
        </Link>
        
        <div className="container-informacao-pais">
            <img src={information[0].flags.svg} className="img-pais-descricao"></img>
            <div className="container-information-geral">
                <h3 className={tema ?  'nome-pais-light' : 'nome-pais' }>{information[0].translations.pt}</h3>
                <div className="container-information">
                    <div className="container-information1">
                        <div > 
                            <strong><span className={tema ?  'rotulo-light' : 'rotulo' }>Nome nativo:</span>  </strong>
                            <span className={tema ?  'rotulo-light' : 'rotulo' }>{information[0].nativeName}</span>
                        </div>
                        <div > 
                            <strong><span  className={tema ?  'rotulo-light' : 'rotulo' }>População:</span>  </strong>
                            <span className={tema ?  'rotulo-light' : 'rotulo' }>{information[0].population.toLocaleString('pt-BR')} </span>
                        </div>
                        <div > 
                            <strong><span  className={tema ?  'rotulo-light' : 'rotulo' }>Região:</span>  </strong>
                            <span className={tema ?  'rotulo-light' : 'rotulo' }>{information[0].region} </span>
                        </div>
                        <div > 
                            <strong><span  className={tema ?  'rotulo-light' : 'rotulo' }>Sub Região:</span>  </strong>
                            <span className={tema ?  'rotulo-light' : 'rotulo' }>{information[0].subregion}</span>
                        </div>
                        <div> 
                            <strong><span  className={tema ?  'rotulo-light' : 'rotulo' }>Capital:</span>  </strong>
                            <span className={tema ?  'rotulo-light' : 'rotulo' }>{information[0].capital}</span>
                        </div>

                    </div>
                    <div className="container-information2">
                        <div > 
                            <strong><span className={tema ?  'rotulo-light' : 'rotulo' }>Domínio de nível superior:</span>  </strong>
                            <span className={tema ?  'rotulo-light' : 'rotulo' }>{information[0].topLevelDomain}</span>
                        </div>
                        <div > 
                            <strong><span className={tema ?  'rotulo-light' : 'rotulo' }>Moeda:</span>  </strong>
                            <span className={tema ?  'rotulo-light' : 'rotulo' }>{information[0].currencies[0].name}</span>
                        </div>
                        <div> 
                            <strong><span className={tema ?  'rotulo-light' : 'rotulo' }>Língua:</span>  </strong>
                            <span className={tema ?  'rotulo-light' : 'rotulo' }>{information[0].languages[0].name}</span>
                        </div>
                    </div>
               
            </div>
                
            <div className="container-paises-vizinhos">
                   <strong> <span className="rotulo-paises-viz" style={{ color: tema ? 'white' : 'black' }}>Países vizinhos:</span> </strong> 
                   <div className="paises-vizinhos">
                   {borderCountries}
                   </div>
                  
                </div>
            </div>
            
        </div>


    </section>
   
    
    
    </>
    
)

}

export default Descri