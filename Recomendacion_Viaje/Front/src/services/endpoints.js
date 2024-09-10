const URL_BASE= `https://c20-54-t-node-react.onrender.com/api/v1/`

const endpoints ={
    getPackages: (price) => `${URL_BASE}/package?price=${price}`
}

export default endpoints