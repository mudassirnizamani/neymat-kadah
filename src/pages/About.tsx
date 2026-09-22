

import { SectionHeading } from '../components/ui/SectionHeading';
import { CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-12 md:py-20">
        <SectionHeading
          title="About Us"
          className="mb-12"
        />

        <div className="prose prose-nk text-nk-text-primary leading-relaxed text-lg">
          <p className="mb-6">
            The business started from a simple idea:
          </p>
          <p className="mb-6 font-medium text-xl font-serif text-nk-accent">
            There are many people who can cook good food at home or in small kitchens, while there are many people and organisations looking for good food without the cost and hassle of running a kitchen themselves.
          </p>
          <p className="mb-12">
            We want to connect the two. We start small, test what works, and expand area by area.
          </p>
        </div>
      </section>

      <section className="bg-nk-surface border-y border-nk-border py-16 md:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-medium text-nk-text-primary mb-8 text-center">
            Our Approach:<br/>Start small. Learn. Fix things. Grow.
          </h2>

          <div className="text-nk-text-secondary leading-relaxed space-y-6">
            <p>
              We are deliberately starting with selected areas. Before approaching customers in an area, we want to make sure we have:
            </p>

            <ul className="space-y-4 my-8 pl-4">
              {[
                "Suitable, high-quality food",
                "Reliable local suppliers and cooks",
                "Arranged transportation",
                "Realistic and manageable delivery times"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-nk-text-primary font-medium">
                  <CheckCircle className="text-nk-green mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <p>
              Once the operation works smoothly in one neighborhood, we can add more customers and eventually expand to another area. This ensures that when we say we can serve you, we actually mean it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-16 md:py-24">
        <h2 className="text-2xl font-serif font-medium text-nk-text-primary mb-6">
          We taste before we list.
        </h2>
        <div className="text-nk-text-secondary leading-relaxed space-y-6">
          <p>
            We don't want to put every cook on the menu. Food is reviewed before it becomes part of our regular offering.
          </p>
          <p>
            When evaluating new food, we look at:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              "Taste",
              "Portion",
              "Freshness",
              "Consistency",
              "Packaging",
              "Price",
              "Ability to prepare regularly",
              "Ability to handle larger quantities"
            ].map((criteria, i) => (
              <div key={i} className="bg-nk-bg border border-nk-border rounded p-4 text-center text-sm font-medium text-nk-text-primary">
                {criteria}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
