import { useParams, Link } from 'react-router-dom';
import { data } from '../data/data';

export const DetailsPage = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h1>Not Found</h1>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <h3>Developer: {item.developer}</h3>
      <p>Description: {item.description}</p>
      <iframe src={item.link} width={1000} height={700}></iframe>
      <Link to={item.link}>Play</Link>
    </div>
  );
};
