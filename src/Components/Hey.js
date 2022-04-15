import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export const Hey = ({posts, photos, loading}) => {
    const params = useParams();
    const id = params.slug;

    return(
            <div>

                        
   

                    <>  
                <Link to='/'>
                <button>Voltar</button>
                </Link>
                {loading &&<h1> Loading </h1>}


                { <p> {posts[id-1].title}</p> }
               
                {photos.map((item, key)=>(

                

               
                    <Link to={'/photo/'+key}> 

                    <div>
                        <img src={item.thumbnailUrl} alt=""></img>
                    </div>

                    </Link>
               
                ))}
                </>


                
            </div>

    )
    
}

