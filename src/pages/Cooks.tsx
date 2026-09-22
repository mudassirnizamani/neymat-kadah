

import { SectionHeading } from '../components/ui/SectionHeading';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { CheckCircle } from 'lucide-react';

export const Cooks = () => {
  const cookFields = [
    { name: 'name', label: 'Name', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel' as const, required: true },
    { name: 'whatsapp', label: 'WhatsApp Number', type: 'tel' as const, required: true },
    { name: 'area', label: 'Area / Location', required: true },
    { name: 'dishes', label: 'What do you cook best?', type: 'textarea' as const, required: true },
    { name: 'capacity', label: 'How many meals can you prepare daily?', type: 'number' as const, required: true },
    {
      name: 'selling',
      label: 'Do you already sell food?',
      type: 'select' as const,
      required: true,
      options: ['Yes, regularly', 'Yes, sometimes', 'No, not yet']
    },
    { name: 'priceRange', label: 'Typical price range per meal' },
    { name: 'additional', label: 'Any other details', type: 'textarea' as const }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading
              title="We're looking for good home cooks and small kitchens."
              className="mb-8"
            />

            <div className="prose prose-nk text-nk-text-secondary leading-relaxed mb-10">
              <p className="mb-6">
                If you can consistently prepare quality food, we want to work with you. We handle the customers, the orders, and the delivery. You focus on cooking.
              </p>

              <h3 className="font-serif font-medium text-nk-text-primary text-xl mt-8 mb-4">How it works:</h3>
              <ul className="space-y-4 mb-8 list-none pl-0">
                {[
                  "You tell us what you cook and your capacity.",
                  "We taste the food to ensure quality.",
                  "We discuss pricing and arrangements.",
                  "You join our network for specific days or menus.",
                  "We coordinate orders and arrange pickup/delivery."
                ].map((step, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-nk-accent font-bold mr-3 mt-0.5">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-nk-bg border border-nk-border rounded-lg p-6 mt-8">
                <h4 className="font-medium text-nk-text-primary mb-3 flex items-center">
                  <CheckCircle size={18} className="text-nk-green mr-2" />
                  What we look for
                </h4>
                <p className="text-sm">
                  Taste, portion size, freshness, consistency, proper packaging, fair pricing, and the ability to prepare meals regularly.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-medium text-nk-text-primary mb-6">Join Our Food Network</h3>
            <p className="text-nk-text-secondary mb-6 text-sm">Fill out the details below. If you have photos of your food, you can send them to us on WhatsApp after submitting this form.</p>
            <EnquiryForm
              fields={cookFields}
              submitText="Send Details"
              onSuccessMessage="Thanks. We've received your details. We'll review them and get in touch to discuss further and arrange a tasting."
              whatsappMessagePrefix="Hi, I'm interested in joining the Neymat Kadah food network as a home cook. Here are my details:"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
