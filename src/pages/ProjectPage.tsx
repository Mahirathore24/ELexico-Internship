import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, AlertTriangle } from "lucide-react";
import Layout from "../components/Layout";

const ProjectPage = () => {
  const { id } = useParams();
  const projectNumber = id || "0";

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="max-w-2xl mx-auto text-center py-20">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary">
            <AlertTriangle className="h-10 w-10 text-accent" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-['Space_Grotesk']">
            Project {projectNumber}
          </h1>

          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 mb-8">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">In Progress</span>
          </div>

          <div className="rounded-2xl border border-border bg-card p-10 card-shadow">
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              This project is not completed yet
            </p>
            <p className="text-muted-foreground">
              The project submission is currently pending. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
