import { Albums } from "./albums"

export const Main = ({posts}) => {
    
    return(

            <div>

                {posts.map((item, index)=>(
                <Albums posts={item} key={index}/>
                ))}
   
            </div>

    )
    
}