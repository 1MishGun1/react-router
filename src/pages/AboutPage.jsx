import { Link } from 'react-router-dom';
import { data } from '../data/data';

export const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias
        corrupti deleniti. Commodi, voluptatibus incidunt. Corporis rem, dicta
        obcaecati incidunt deleniti amet labore itaque voluptates cum aut, nobis
        commodi accusamus!
      </p>
      <img
        src="https://img.freepik.com/free-vector/about-us-page-concept-illustration_114360-3931.jpg"
        alt="about img"
      />
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.image} alt="" />
          <p>{item.maxWeight}</p>
          <Link to={`details/${item.id}`}>View</Link>
        </div>
      ))}
    </>
  );
};
