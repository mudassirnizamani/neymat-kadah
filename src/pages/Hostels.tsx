

import { SectionHeading } from '../components/ui/SectionHeading';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { activeAreas } from '../data/config';
import { Check } from 'lucide-react';

export const Hostels = () => {
  const hostelFields = [
    { name: 'hostelName', label: 'Hostel Name', required: true },
    { name: 'contactPerson', label: 'Contact Person', required: true },
    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel' as const, required: true },
    {
      name: 'area',
      label: 'Area',
      type: 'select' as const,
      required: true,
      options: [...activeAreas.map(a => a.name), 'Other']
    },
    { name: 'residents', label: 'Number of Residents', type: 'number' as const, required: true },
    {
      name: 'mealsNeeded',
      label: 'Meals Needed',
      type: 'select' as const,
      required: true,
      options: ['Lunch only', 'Dinner only', 'Both Lunch & Dinner']
    },
    { name: 'startDate', label: 'Preferred Start Date', type: 'date' as const, required: true },
    { name: 'requirements', label: 'Additional Requirements', type: 'textarea' as const }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading
              title="Regular meals for hostels and student accommodation."
              className="mb-8"
            />

            <div className="prose prose-nk text-nk-text-secondary leading-relaxed mb-10">
              <p className="mb-6">
                Managing food every day is difficult. It means dealing with cooks, groceries, gas, utensils, wastage, changing menus, and complaints.
              </p>

              <p className="mb-6">
                We can arrange regular meals around a planned menu, removing the daily operational stress of running a kitchen.
              </p>

              <ul className="space-y-4 mt-8 list-none pl-0">
                {[
                  "Predictable weekly menus",
                  "Consistent quality and taste",
                  "Reliable timings",
                  "No kitchen management required"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-nk-green mr-3 mt-1 flex-shrink-0" size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[4/3] mt-8 bg-nk-border">
              <img
                src="https://images.unsplash.com/photo-1544025162-811c75c82a20?auto=format&fit=crop&q=80&w=800"
                alt="Homemade food served in portions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-medium text-nk-text-primary mb-6">Discuss Hostel Meals</h3>
            <EnquiryForm
              fields={hostelFields}
              onSuccessMessage="Thanks. We've received your enquiry regarding hostel meals. We'll get back to you shortly to discuss arrangements."
              whatsappMessagePrefix="Hi, I'm interested in arranging regular meals for my hostel. Here are the details:"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
