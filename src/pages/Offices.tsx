

import { SectionHeading } from '../components/ui/SectionHeading';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { activeAreas } from '../data/config';
import { Check } from 'lucide-react';

export const Offices = () => {
  const officeFields = [
    { name: 'name', label: 'Name', required: true },
    { name: 'company', label: 'Company / Office Name', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel' as const, required: true },
    { name: 'whatsapp', label: 'WhatsApp Number', type: 'tel' as const },
    {
      name: 'area',
      label: 'Area',
      type: 'select' as const,
      required: true,
      options: [...activeAreas.map(a => a.name), 'Other']
    },
    { name: 'peopleCount', label: 'Number of People', type: 'number' as const, required: true },
    { name: 'mealsRequired', label: 'Meals Required (e.g. Lunch Mon-Fri)', required: true },
    { name: 'deliveryTime', label: 'Preferred Delivery Time', required: true },
    { name: 'requirements', label: 'Additional Requirements', type: 'textarea' as const }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading
              title="Lunch for the whole office, without the daily hassle."
              subtitle="We can arrange regular lunch for offices using a planned weekly menu."
              className="mb-8"
            />

            <div className="prose prose-nk text-nk-text-secondary leading-relaxed mb-10">
              <p className="mb-6">
                Instead of employees having to decide what to order every day, the office can work around a predictable, homemade-style menu.
              </p>

              <ul className="space-y-4 mt-8 mb-8 list-none pl-0">
                {[
                  "No daily ordering decisions",
                  "Consistent homemade food quality",
                  "Reliable delivery times",
                  "Simple weekly billing"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-nk-green mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-nk-surface border border-nk-border rounded-lg p-6 mb-8">
              <h3 className="font-serif font-medium text-lg mb-4">Example Weekly Menu</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-nk-border/50 pb-2">
                  <span className="font-medium">Monday</span>
                  <span className="text-nk-text-secondary">Dal Chawal</span>
                </li>
                <li className="flex justify-between border-b border-nk-border/50 pb-2">
                  <span className="font-medium">Tuesday</span>
                  <span className="text-nk-text-secondary">Seasonal Sabzi</span>
                </li>
                <li className="flex justify-between border-b border-nk-border/50 pb-2">
                  <span className="font-medium">Wednesday</span>
                  <span className="text-nk-text-secondary">Chicken Karahi</span>
                </li>
                <li className="flex justify-between border-b border-nk-border/50 pb-2">
                  <span className="font-medium">Thursday</span>
                  <span className="text-nk-text-secondary">Naan Channay</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span className="font-medium">Friday</span>
                  <span className="text-nk-text-secondary">Biryani</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-medium text-nk-text-primary mb-6">Arrange Office Lunch</h3>
            <EnquiryForm
              fields={officeFields}
              onSuccessMessage="Thanks. We've received your enquiry regarding office lunch. We'll get back to you shortly to discuss the menu and arrangements."
              whatsappMessagePrefix="Hi, I'm interested in regular office lunch. Here are my details:"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
