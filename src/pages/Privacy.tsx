

import { SectionHeading } from '../components/ui/SectionHeading';
import { businessConfig } from '../data/config';

export const Privacy = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-12 md:py-20">
        <SectionHeading
          title="Privacy Policy"
          className="mb-12"
        />

        <div className="prose prose-nk text-nk-text-secondary leading-relaxed">
          <p className="mb-6"><em>Last updated: {new Date().toLocaleDateString()}</em></p>

          <h3 className="text-xl font-serif font-medium text-nk-text-primary mt-8 mb-4">1. Introduction</h3>
          <p className="mb-6">
            Welcome to {businessConfig.name}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
          </p>

          <h3 className="text-xl font-serif font-medium text-nk-text-primary mt-8 mb-4">2. The Data We Collect About You</h3>
          <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
          </ul>

          <h3 className="text-xl font-serif font-medium text-nk-text-primary mt-8 mb-4">3. How We Use Your Personal Data</h3>
          <p className="mb-6">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, such as processing your food orders and managing delivery.
          </p>

          <h3 className="text-xl font-serif font-medium text-nk-text-primary mt-8 mb-4">4. Data Security</h3>
          <p className="mb-6">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
          </p>

          <p className="mt-12 text-sm italic">
            Note: This is a placeholder privacy policy. The final content is subject to legal review.
          </p>
        </div>
      </section>
    </div>
  );
};
