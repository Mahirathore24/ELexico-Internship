import { Link } from "react-router-dom";
import { ArrowRight, Zap, FolderOpen } from "lucide-react";
import Layout from "../components/Layout";

const projects = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Project ${i + 1}`,
  path: `/project/${i + 1}`,
}));

const Index = () => {
  return (
    <Layout>
      <section className="hero-gradient py-24 md:py-36">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 mb-6">
            <Zap className="h-3.5 w-3.5 text-primary-foreground" />
            <span className="text-xs font-medium text-primary-foreground/80 tracking-wide uppercase">
              Internship Program
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary-foreground mb-6 font-['Space_Grotesk']">
            ELEXICO INTERNSHIP
          </h1>
          <p className="mx-auto max-w-xl text-lg text-primary-foreground/70">
            Explore our portfolio of 20 ongoing internship projects. Each project showcases real-world learning and development.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 font-['Space_Grotesk']">
              Our Projects
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Browse through all 20 internship projects currently in progress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.path}
                className="group relative rounded-2xl border border-border bg-card p-6 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                  <FolderOpen className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">Click to view details</p>
                <div className="flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
