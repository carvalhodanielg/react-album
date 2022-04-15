import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export const Photos = ({photos}) => {
    const params = useParams();
    const id = params.slug;
    
    return(



            <div>

                <Link to='/'>
                    <br/>
                <button>Voltar</button>
                </Link>
                
                <img src={photos[id].url}></img>




                
                
            </div>

    )
    
}