import Card from "../components/Card";
import Form from "../components/Form";
import Coments from "../components/Coments";
import { useEffect } from "react";
import useGetPackage from "../services/useGetPackage";
import { useParams } from "react-router-dom";

function DetailsCard() {
  const { idCard } = useParams();
  const { fetchData, data, loader } = useGetPackage(idCard);
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex ml-80 flex-col md:flex-row md:space-x-4">
        <Card data={data} loader={loader} />
        <Form data={data} />
      </div>
      <Coments packageId={data} />
    </>
  );
}

export default DetailsCard;
