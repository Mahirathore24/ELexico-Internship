import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          Back to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
