const URL_BASE= `https://c20-54-t-node-react.onrender.com/api/v1/`

const endpoints ={
    getPackages:`${URL_BASE}package`,
    getUser: (userId) => `${URL_BASE}users/${userId}`,
    getPackagesById:(idCard)=>`${URL_BASE}package/${idCard}`,
    getBookingById:(idReservation)=>`${URL_BASE}reservation/${idReservation}`,
    getBooking:`${URL_BASE}reservation`,
}

export default endpoints