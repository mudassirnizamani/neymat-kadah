

import { SectionHeading } from '../components/ui/SectionHeading';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { businessConfig } from '../data/config';
import { MessageCircle, Phone, Mail, Camera, Share2 } from 'lucide-react';

export const Contact = () => {
  const contactFields = [
    { name: 'name', label: 'Name', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel' as const, required: true },
    { name: 'subject', label: 'Subject', required: true },
    { name: 'message', label: 'Message', type: 'textarea' as const, required: true }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20">
        <SectionHeading
          title="Let's talk about food."
          subtitle="Whether you want to order food, discuss office catering, or become a supplier, we're here."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-16">
          <div className="bg-nk-surface border border-nk-border rounded-xl p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-nk-green/10 text-nk-green rounded-full flex items-center justify-center mb-4">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-lg font-medium text-nk-text-primary mb-2">WhatsApp</h3>
            <p className="text-sm text-nk-text-secondary mb-4 flex-grow">Fastest way to reach us for orders and quick queries.</p>
            <WhatsAppButton message="Hi, I have a question about Neymat Kadah." text="WhatsApp Us" variant="outline" />
          </div>

          <div className="bg-nk-surface border border-nk-border rounded-xl p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-nk-text-primary/10 text-nk-text-primary rounded-full flex items-center justify-center mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-medium text-nk-text-primary mb-2">Phone</h3>
            <p className="text-sm text-nk-text-secondary mb-4 flex-grow">Prefer to talk? Give us a call during working hours.</p>
            <a href={`tel:${businessConfig.phone}`} className="inline-flex items-center justify-center px-6 py-3 border border-nk-border text-nk-text-primary rounded-md font-medium hover:bg-nk-bg/50 transition-colors w-full">
              {businessConfig.phone}
            </a>
          </div>

          <div className="bg-nk-surface border border-nk-border rounded-xl p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-nk-accent/10 text-nk-accent rounded-full flex items-center justify-center mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-medium text-nk-text-primary mb-2">Email</h3>
            <p className="text-sm text-nk-text-secondary mb-4 flex-grow">For partnerships, corporate accounts, or general inquiries.</p>
            <a href={`mailto:${businessConfig.email}`} className="inline-flex items-center justify-center px-6 py-3 border border-nk-border text-nk-text-primary rounded-md font-medium hover:bg-nk-bg/50 transition-colors w-full">
              Email Us
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-medium text-nk-text-primary mb-6 text-center">Send an Enquiry</h3>
          <EnquiryForm
            fields={contactFields}
            onSuccessMessage="Thanks for reaching out. We've received your message and will get back to you shortly."
            whatsappMessagePrefix="Hi, I'm reaching out from your website contact form:"
          />
        </div>
      </section>

      <section className="bg-nk-surface border-t border-nk-border py-12 text-center">
        <h3 className="text-lg font-medium text-nk-text-primary mb-6">Find us on Social Media</h3>
        <div className="flex justify-center space-x-4">
          <a href={businessConfig.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-nk-bg border border-nk-border rounded-full text-nk-text-primary hover:text-nk-accent hover:border-nk-accent transition-colors">
            <Camera size={24} />
          </a>
          <a href={businessConfig.facebook} target="_blank" rel="noopener noreferrer" className="p-4 bg-nk-bg border border-nk-border rounded-full text-nk-text-primary hover:text-nk-accent hover:border-nk-accent transition-colors">
            <Share2 size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};
