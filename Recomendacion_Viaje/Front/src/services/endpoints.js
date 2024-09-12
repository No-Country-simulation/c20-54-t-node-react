const URL_BASE= `https://c20-54-t-node-react.onrender.com/api/v1/`

const endpoints ={
    getPackages:`${URL_BASE}package`,
    getPackagesById:(idCard)=>`${URL_BASE}package/${idCard}`
}

export default endpoints