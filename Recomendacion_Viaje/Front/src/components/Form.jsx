const Form = () =>{

    return(
        <form className="w-full max-w-sm rounded overflow-hidden shadow-lg ml-6 p-4  " >
            <h1 className="mb-4 ml-4 font-bold">Booking</h1>
            <div className="md:w-1/3">
                <label className="block text-left mb-2 " >
                    From
                </label>
                </div>
            <div className="md:flex md:items-center mb-6">
               
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date-from" type="date" onChange={(e)=> (console.log(e.target.value))} />
                </div>
            </div>
            <div className="md:w-1/3">
                <label className="block text-left mb-2" >
                    To
                </label>
                </div>
            <div className="md:flex md:items-center mb-6">
                
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date-to" type="date" />
                </div>
            </div>
            <div className="md:w-1/3">
                <label className="block text-left mb-2" >
                    No of Guest
                </label>
                </div>
            <div className="md:flex md:items-center mb-6">
                
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="number-
companions" type="number" />
                </div>
            </div>
            
            <div>

                <h2 className="text-center text-2xl text-primary-color font-bold">
                    $ 345.50  
                </h2>
    
            </div>


            <div className="text-center" >
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                <button className=" flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full m-4 mt-4" type="buttton">
                    Confirm Booking
                </button>
                </div>

                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                <button className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full m-4" type="button">
                    Save to Wishlist
                </button>
                </div>

                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                <button className="flex text-sm bg-primary-color text-secondary-color font-bold py-2 px-4 rounded-full m-4" type="button">
                    Share the activity
                </button>
                </div>
            </div>
        </form>
        
    )

}

export default Form