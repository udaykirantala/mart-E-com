import { serviceData } from "../assets/products"
import '../Componets/ServiceData.css'
export const Servicedata=()=>{
    return(
        <>
        <div className="serviceContainer">
            {serviceData.map((card)=>(
                <div style={{backgroundColor:card.bg,padding:'40px'}} className="serviceCard">
                    <span className="serviceCardImage"><img src={card.icon} alt={card.title} /></span>
                    <h3>{card.title}</h3>
                    <p>{card.subtitle}</p>
                </div>
            ))}
        </div>
        </>
    )
}