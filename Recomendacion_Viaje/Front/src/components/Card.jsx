
const Card = () =>{

    return(
        
            <div className="w-1/2 h-max rounded overflow-hidden shadow-lg mt-0">
                <h1 className="text-3xl font-extrabold dark:text-black mb-4">Tour antiguo en autobús de dos pisos
                <br />Y crucero por el río Támesis </h1>
                <figure className=" mb-2 w-full  relative"  >
                    <img src="https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="montanias" />
                    
                </figure>
                <div className="flex">
                    <figure className="w-50 ml-0 mb-1 mr-1" >
                        <img src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>
                    <figure className="w-50 ml-0 mb-1 mr-1">
                        <img src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>
                    <figure className="w-50 ml-0 mb-1 mr-1">
                        <img src="https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>
                    <figure className="w-50 ml-0 mb-1 mr-1">
                        <img src= "https://images.pexels.com/photos/18785919/pexels-photo-18785919/free-photo-of-londres-desde-the-shard.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </figure>

                </div>
                <article className="flex flex-wrap p-2">
                    
                    <div className="w-1/2 p-2 text-sm ">
                        <div className="flex" >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M12 20.5c-4.688 0-8.5-3.812-8.5-8.5s3.812-8.5 8.497-8.5c4.69 0 8.503 3.812 8.503 8.5s-3.812 8.5-8.5 8.5zm0-15c-3.586 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zM12.003 8.5c1.929 0 3.497 1.57 3.497 3.5 0 .206-.02.412-.057.615l-4.057-4.059c.203-.036.408-.056.614-.056m.003-1c-.882 0-1.696.262-2.39.697l6.188 6.188c.438-.692.699-1.508.699-2.387 0-2.48-2.014-4.498-4.497-4.498zM8.557 11.384l4.059 4.06c-.204.036-.409.056-.616.056-1.93 0-3.5-1.57-3.5-3.502 0-.206.02-.412.057-.614m-.358-1.773c-.435.694-.699 1.508-.699 2.387 0 2.486 2.016 4.502 4.5 4.502.879 0 1.693-.264 2.387-.699l-6.188-6.19z"></path></svg>
                            <h1 className="font-bold">Free Cancellation</h1>
                        </div>
                        <p>Cancel up to 24 hours in advance to receive a full refund</p>
                    </div>
                    <div className="w-1/2 p-2 text-sm">
                        <div className="flex">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M196 16a30 30 0 0 0-30 30v120H46a30 30 0 0 0-30 30v120a30 30 0 0 0 30 30h120v120a30 30 0 0 0 30 30h120a30 30 0 0 0 30-30V346h120a30 30 0 0 0 30-30V196a30 30 0 0 0-30-30H346V46a30 30 0 0 0-30-30H196z"></path></svg>
                            <h1 className="font-bold"><span></span>Health Precautions</h1>
                        </div>    
                        <p>Special health and safety measures apply. Learn more</p>
                    </div>
                    <div className="w-1/2 p-2 text-sm">
                        <div className="flex">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>
                            <h1 className="font-bold"><span></span>Mobile Ticketing</h1>
                        </div>                    
                        <p>Use your phone or print your voucher</p>
                    </div>
                    <div className="w-1/2 p-2 text-sm">
                        <div className="flex">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path><path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path></svg>
                            <h1 className="font-bold"><span></span>Duration 3.5 Hours</h1>
                        </div>
                        <p>Chek accesibility to see starting times</p>
                    </div>

                </article>
            </div>

    )
}

export default Card