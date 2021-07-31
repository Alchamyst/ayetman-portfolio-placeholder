import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <div>
      <Layout pageTitle="404 Page Not Found" bNoIndex={true} bNavbar={false}>
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </Layout>
    </div>
  )
};

export default NotFoundPage
