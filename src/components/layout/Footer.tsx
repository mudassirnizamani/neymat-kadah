

import { Link } from 'react-router-dom';
import { businessConfig, activeAreas } from '../../data/config';

export const Footer = () => {
  return (
    <footer className="bg-nk-surface border-t border-nk-border pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif font-semibold text-nk-text-primary mb-4">
              {businessConfig.name}
            </h3>
            <p className="text-nk-text-secondary text-sm leading-relaxed">
              {businessConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-nk-text-primary mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/menu" className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">Menu</Link></li>
              <li><Link to="/offices" className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">Offices</Link></li>
              <li><Link to="/hostels" className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">Hostels</Link></li>
              <li><Link to="/events" className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">Events</Link></li>
              <li><Link to="/about" className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">Contact</Link></li>
              <li><Link to="/cooks" className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">For Home Cooks</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-medium text-nk-text-primary mb-4">Service Areas</h4>
            <ul className="space-y-3">
              {activeAreas.filter(a => a.status === 'ACTIVE').map(area => (
                <li key={area.name}>
                  <Link to="/areas" className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li><Link to="/areas" className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">View all areas &rarr;</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-nk-text-primary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`https://wa.me/${businessConfig.whatsapp}`} className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">
                  WhatsApp: {businessConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${businessConfig.email}`} className="text-sm text-nk-text-secondary hover:text-nk-accent transition-colors">
                  {businessConfig.email}
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href={businessConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-nk-text-secondary hover:text-nk-accent transition-colors">
                Instagram
              </a>
              <a href={businessConfig.facebook} target="_blank" rel="noopener noreferrer" className="text-nk-text-secondary hover:text-nk-accent transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-nk-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-nk-text-secondary">
            &copy; {new Date().getFullYear()} {businessConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-xs text-nk-text-secondary hover:text-nk-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-nk-text-secondary hover:text-nk-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
