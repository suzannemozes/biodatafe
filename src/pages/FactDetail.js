import { useParams } from "react-router-dom";

const FactDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Fact Detail</h1>
      <p>{params.factId}</p>
    </section>
  );
};
export default FactDetail;