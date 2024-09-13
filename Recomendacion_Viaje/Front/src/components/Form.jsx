const Form = () =>{

    return(
        <form className="w-full max-w-sm rounded overflow-hidden shadow-lg ml-6 p-4 h-1/3   " >
            <h2 className="mb-4 ml-14 font-bold text-xl">Reserva</h2>
            <div className="md:w-1/3">
                <label className="block text-left mb-2 ml-14" >
                    Origen
                </label>
                </div>
            <div className="md:flex md:items-center mb-6 items-center justify-center">
               
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date-from" type="date" onChange={(e)=> (console.log(e.target.value))} />
                </div>
            </div>
            <div className="md:w-1/3">
                <label className="block text-left mb-2 ml-14" >
                    Destino
                </label>
                </div>
            <div className="md:flex md:items-center mb-6 items-center justify-center">
                
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date-to" type="date" />
                </div>
            </div>
            <div className="md:w-1/3">
                <label className="block text-left mb-2 ml-14" >
                    Acompañantes
                </label>
                </div>
            <div className="md:flex md:items-center mb-6 items-center justify-center">
                
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="number-
                     companions" type="number" />
                </div>
            </div>
            
            <div className="items-center justify-cente">

                <h2 className="text-center text-2xl text-primary-color font-bold">
                    $ 345.50  
                </h2>
    
            </div>


            <div className="ml-20"  >
                
                <div>
                <button className=" bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-md m-4 mt-4 h-10 " type="buttton">
                    Confirmar Reserva
                </button>
                </div>               
            </div>
        </form>
        
    )

}

export default Form