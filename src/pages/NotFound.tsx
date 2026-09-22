

import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[60vh] px-4 text-center animate-in fade-in duration-500">
      <h1 className="text-6xl md:text-8xl font-serif font-bold text-nk-text-primary/20 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-serif font-medium text-nk-text-primary mb-6">
        Looks like this page took the wrong turn.
      </h2>
      <p className="text-nk-text-secondary mb-10 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-nk-text-primary text-nk-surface rounded-md font-medium hover:bg-nk-text-primary/90 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
};
