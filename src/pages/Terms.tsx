

import { SectionHeading } from '../components/ui/SectionHeading';
import { businessConfig } from '../data/config';

export const Terms = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-12 md:py-20">
        <SectionHeading
          title="Terms of Service"
          className="mb-12"
        />

        <div className="prose prose-nk text-nk-text-secondary leading-relaxed">
          <p className="mb-6"><em>Last updated: {new Date().toLocaleDateString()}</em></p>

          <h3 className="text-xl font-serif font-medium text-nk-text-primary mt-8 mb-4">1. Agreement to Terms</h3>
          <p className="mb-6">
            These Terms of Service constitute a legally binding agreement made between you and {businessConfig.name} concerning your access to and use of our website and our food delivery services.
          </p>

          <h3 className="text-xl font-serif font-medium text-nk-text-primary mt-8 mb-4">2. Services</h3>
          <p className="mb-6">
            We provide a platform connecting customers with home cooks and arranging food delivery. We reserve the right to withdraw or amend our service, and any service or material we provide, in our sole discretion without notice. We will not be liable if for any reason all or any part of our service is unavailable at any time or for any period.
          </p>

          <h3 className="text-xl font-serif font-medium text-nk-text-primary mt-8 mb-4">3. Ordering and Delivery</h3>
          <p className="mb-6">
            All orders are subject to acceptance and availability. We reserve the right to refuse any order you place with us. Delivery times are estimates and cannot be guaranteed. We are deliberately starting with selected areas and expanding gradually.
          </p>

          <h3 className="text-xl font-serif font-medium text-nk-text-primary mt-8 mb-4">4. Food Quality and Allergies</h3>
          <p className="mb-6">
            While we taste and review food before it becomes part of our regular offering, we cannot guarantee that any food is completely free from allergens. If you have a severe food allergy, you must inform us when placing your order, and we advise you to exercise caution.
          </p>

          <p className="mt-12 text-sm italic">
            Note: This is a placeholder terms of service document. The final content is subject to legal review.
          </p>
        </div>
      </section>
    </div>
  );
};
