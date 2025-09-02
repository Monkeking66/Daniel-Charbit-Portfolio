import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 for analytics (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.warn("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6 text-primary">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-gradient-hero text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
