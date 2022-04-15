import './StyleAlbum.css'
import { Link } from 'react-router-dom'



export const Albums = ({posts, index}) => {
    
    
    return(

    <div className='posts'  >

                


                   <Link to={"/hey/"+posts.id}>  


                 
                  <p>{posts.title} </p>


                  </Link>
                   

                    
                

                
          
     </div>
    )
    
}
