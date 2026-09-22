

import { SectionHeading } from '../components/ui/SectionHeading';
import { activeAreas } from '../data/config';
import { MapPin, CheckCircle, Clock } from 'lucide-react';

export const Areas = () => {
  const active = activeAreas.filter(a => a.status === 'ACTIVE');
  const comingSoon = activeAreas.filter(a => a.status === 'COMING SOON');

  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20">
        <SectionHeading
          title="Where We're Serving"
          subtitle="We only take customers in areas where we can reliably arrange both food and transportation. If your area isn't listed, we're not there yet."
          centered
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-serif font-medium text-nk-text-primary mb-6 flex items-center">
            <CheckCircle className="text-nk-green mr-2" size={24} />
            Currently Active Areas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {active.map((area) => (
              <div key={area.name} className="bg-nk-surface border border-nk-green/30 rounded-lg p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-nk-green"></div>
                <h4 className="text-lg font-medium text-nk-text-primary mb-4">{area.name}</h4>
                <ul className="space-y-2 text-sm text-nk-text-secondary">
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-nk-green mr-2" />
                    {area.regularMealsAvailable ? 'Regular meals available' : 'Regular meals unavailable'}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={14} className="text-nk-green mr-2" />
                    {area.deliveryAvailable ? 'Delivery available' : 'Delivery unavailable'}
                  </li>
                  {area.note && (
                    <li className="flex items-center mt-4 pt-4 border-t border-nk-border">
                      <span className="font-medium text-nk-text-primary">{area.note}</span>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {comingSoon.length > 0 && (
            <>
              <h3 className="text-xl font-serif font-medium text-nk-text-primary mb-6 flex items-center">
                <Clock className="text-nk-accent mr-2" size={24} />
                Coming Soon
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {comingSoon.map((area) => (
                  <div key={area.name} className="bg-nk-bg border border-nk-border border-dashed rounded-lg p-6 relative overflow-hidden">
                    <h4 className="text-lg font-medium text-nk-text-primary/70 mb-2">{area.name}</h4>
                    <p className="text-sm text-nk-text-secondary">{area.note}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="bg-nk-surface border-t border-nk-border py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <MapPin className="mx-auto text-nk-accent mb-4" size={32} />
          <h2 className="text-2xl font-serif font-medium text-nk-text-primary mb-4">Don't see your area?</h2>
          <p className="text-nk-text-secondary mb-8">
            We are expanding area by area. Contact us and we'll let you know when we reach your neighborhood.
          </p>
          <a
            href="https://wa.me/923001234567?text=Hi,%20I'd%20like%20to%20know%20when%20you'll%20start%20delivering%20to%20my%20area."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-nk-border text-nk-text-primary rounded-md font-medium hover:bg-nk-bg/50 transition-colors"
          >
            Ask when we reach your area
          </a>
        </div>
      </section>
    </div>
  );
};
