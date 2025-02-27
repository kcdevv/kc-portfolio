
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6 animate-fade-in">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary text-5xl font-bold mb-8">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
        >
          <ArrowLeft size={18} />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
