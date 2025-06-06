import '../Componets/BanerPage.css'
export const BanerPage=({title})=>{
    return(
        <div className='banerImageConatiner'>
            <div className='banerImage'><p>{title}</p></div>
        </div>
    )
}