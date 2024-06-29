import { Routes, Route, Link } from 'react-router-dom';
import { TestPage } from './TestPage';

export const ContactPage = () => {
  return (
    <>
      <h1>This is Contact Page</h1>
      <img
        src="https://previews.123rf.com/images/shaihalud/shaihalud2006/shaihalud200600185/149021622-contact-us-form-template-for-web-and-landing-page-woman-with-headphones-and-microphone-with-laptop.jpg"
        alt="contact page"
      />
      <Link to="testpage">Go</Link>
      <Routes>
        <Route path="testpage" element={<TestPage />}></Route>
      </Routes>
    </>
  );
};
