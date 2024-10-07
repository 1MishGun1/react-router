import { useParams, Link, useNavigate } from "react-router-dom";
import { data } from "../data/data";

export const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = data.find((item) => item.id === parseInt(id));

  const goBack = () => navigate(-1);

  if (!item) {
    return <h1>Not Found</h1>;
  }

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <h2>{item.title}</h2>
      <h3>Developer: {item.developer}</h3>
      <p>Description: {item.description}</p>
      <iframe
        src={item.link}
        width={1000}
        height={700}
        title={item.title}
      ></iframe>
      <Link to={item.link} className="item_link">
        Play
      </Link>
    </div>
  );
};
