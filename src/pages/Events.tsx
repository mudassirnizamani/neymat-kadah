

import { SectionHeading } from '../components/ui/SectionHeading';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { eventCategories } from '../data/config';

export const Events = () => {
  const eventFields = [
    { name: 'name', label: 'Name', required: true },
    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel' as const, required: true },
    {
      name: 'eventType',
      label: 'Event Type',
      type: 'select' as const,
      required: true,
      options: eventCategories
    },
    { name: 'date', label: 'Event Date', type: 'date' as const, required: true },
    { name: 'location', label: 'Location / Area', required: true },
    { name: 'guests', label: 'Number of Guests', type: 'number' as const, required: true },
    { name: 'cuisine', label: 'Preferred Cuisine / Dishes', required: true },
    {
      name: 'servingStyle',
      label: 'Serving Style',
      type: 'select' as const,
      options: ['Buffet / Donga style', 'Individual packed boxes', 'Not sure yet']
    },
    { name: 'details', label: 'Additional Details', type: 'textarea' as const }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Visual Header */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-nk-surface">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1530103862676-de8892bc952f?auto=format&fit=crop&q=80&w=1200"
            alt="Event food setup"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-nk-bg/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-nk-text-primary mb-6">
            Food for the days people remember.
          </h1>
          <p className="text-lg md:text-xl text-nk-text-primary/80 font-medium">
            For weddings, nikah, engagements, family gatherings, corporate events and private occasions.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          {eventCategories.map((category) => (
            <div key={category} className="px-6 py-3 bg-nk-surface border border-nk-border rounded-full text-nk-text-secondary text-sm md:text-base font-medium shadow-sm hover:border-nk-accent/30 transition-colors">
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-12 md:py-16 mb-12">
        <SectionHeading
          title="Plan an Event"
          subtitle="Tell us about your occasion. We'll discuss the menu, quantities, and arrangements with you to ensure everything is perfect."
          centered
        />

        <div className="mt-12">
          <EnquiryForm
            fields={eventFields}
            submitText="Request Event Details"
            onSuccessMessage="Thanks. We'll contact you shortly to discuss the menu, quantity, and arrangements for your event."
            whatsappMessagePrefix="Hi, I'm planning an event and would like to discuss catering. Here are the details:"
          />
        </div>
      </section>
    </div>
  );
};
