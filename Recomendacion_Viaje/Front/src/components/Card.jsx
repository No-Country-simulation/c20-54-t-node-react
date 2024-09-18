import Stars from "./Stars";
import React, { useEffect } from 'react';


const Card = ({data={}}) =>{
console.log(data)
    return(
        
            <div className="w-2/3 h-max rounded overflow-hidden shadow-lg mt-10 -ml-20  ">
                <h1 className="text-3xl font-extrabold dark:text-black mb-4">{data?.package?.title} </h1>
                <div className="pb-3">
                 <Stars rating={data?.package?.rating}/>
                </div>
                <figure className=" mb-2 w-full h-96 object-cover relative mt-6"  >
                    <img className="transition-transform duration-300 transform hover:scale-110 w-full h-full object-cover"src={data?.package?.firstImage} alt="montanias" />
                    
                </figure>
                <div className="flex">
                   
                   {
                    data?.package?.image.map(data=>{
                        return(  
                        <figure className="w-50 ml-0 mb-1 mr-1" >
                            <img src={data} alt="" />
                        </figure>)
                    })
                   }

                </div>
                <article className="w-full h-26 rounded overflow-hidden shadow-lg mt-6 text-sm p-2 ">
                   <div>
                        <p>
                            {data?.package?.description?.content}
                        </p>
                   </div>
                  
                  
                </article>
                
            </div>

    )
}

export default Card