

import { SectionHeading } from '../components/ui/SectionHeading';
import { weeklyMenu } from '../data/config';
import { MapPin, Info } from 'lucide-react';

export const Menu = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20">
        <SectionHeading
          title="This Week's Menu"
          subtitle="Our regular meals are arranged around a predictable weekly schedule. This helps us ensure quality and reliable delivery."
          centered
        />

        <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-12 max-w-3xl mx-auto flex items-start">
          <Info className="text-orange-600 mt-0.5 mr-3 flex-shrink-0" size={18} />
          <p className="text-sm text-orange-800">
            <strong>Sample weekly menu.</strong> Exact dishes may vary based on ingredient availability and your specific area. Contact us to confirm today's availability.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {weeklyMenu.map((item, index) => (
            <div key={index} className="bg-nk-surface border border-nk-border rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-1/3 aspect-[4/3] md:aspect-auto h-48 md:h-auto overflow-hidden">
                <img
                  src={item.image}
                  alt={item.dish}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-bold tracking-wider text-nk-accent uppercase">{item.day}</span>
                  {item.price && <span className="font-medium text-nk-text-primary">Rs. {item.price}</span>}
                </div>
                <h3 className="text-2xl font-serif font-medium text-nk-text-primary mb-3">{item.dish}</h3>
                <p className="text-nk-text-secondary leading-relaxed mb-6">{item.description}</p>

                <div className="mt-auto">
                  <div className="flex items-center text-xs text-nk-text-secondary">
                    <MapPin size={14} className="mr-1.5" />
                    <span>Available in: {item.areas.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-nk-surface border-t border-nk-border py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-medium text-nk-text-primary mb-4">Just looking for a good homemade meal?</h2>
          <p className="text-nk-text-secondary mb-8">
            Individual customers can contact us for current meal availability in their area.
          </p>
          <a
            href="https://wa.me/923001234567?text=Hi,%20I'd%20like%20to%20check%20today's%20meal%20availability%20in%20my%20area."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-nk-text-primary text-nk-surface rounded-md font-medium hover:bg-nk-text-primary/90 transition-colors"
          >
            See Today's Availability
          </a>
        </div>
      </section>
    </div>
  );
};
