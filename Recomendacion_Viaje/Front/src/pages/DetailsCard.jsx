import Layout from "../components/Layout/Layout"
import Card from "../components/Card"
import Form from "../components/Form"
import Coments from "../components/Coments"

function DetailsCard() {
  
    return (
      <>
        <div className="flex ml-80" >
          <Card/>
          <Form/>
        </div>
        <Coments/>
      </>
    )
  }
  
  export default DetailsCard
  