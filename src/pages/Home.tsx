import { useState } from "react";


import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { activeAreas, weeklyMenu, services } from '../data/config';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '../utils';

export const Home = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [areaMessage, setAreaMessage] = useState<{type: 'success' | 'error' | '', text: string}>({type: '', text: ''});

  const handleAreaCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedArea) return;

    if (selectedArea === 'other') {
      setAreaMessage({
        type: 'error',
        text: "We're not serving this area yet. Leave your details and we'll let you know when we expand."
      });
      return;
    }

    const area = activeAreas.find(a => a.name === selectedArea);
    if (area && area.status === 'ACTIVE') {
      setAreaMessage({
        type: 'success',
        text: "Good — we currently serve this area. You can proceed with your order."
      });
    } else {
      setAreaMessage({
        type: 'error',
        text: "We're not serving this area yet. Leave your details and we'll let you know when we expand."
      });
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-nk-text-primary mb-6">
              Good Food, Made Close to Home.
            </h1>
            <p className="text-lg md:text-xl text-nk-text-secondary mb-8 leading-relaxed max-w-lg">
              Homemade meals, regular food service, and event catering — arranged around your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                to="/menu"
                className="px-8 py-3.5 bg-nk-text-primary text-nk-surface rounded-md font-medium text-center hover:bg-nk-text-primary/90 transition-colors"
              >
                Explore the Menu
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 border border-nk-border text-nk-text-primary rounded-md font-medium text-center hover:bg-nk-bg/50 transition-colors"
              >
                Talk to Us
              </Link>
            </div>
            <p className="text-sm text-nk-text-secondary flex items-center">
              <MapPin size={16} className="mr-2 text-nk-accent" />
              Currently serving selected areas of Islamabad & Rawalpindi.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-nk-border">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=1200"
                alt="Authentic Pakistani homemade food"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 md:py-24 border-t border-nk-border/50">
        <SectionHeading
          title="Food for everyday life, and the occasions that matter."
          subtitle="We work with home cooks and small kitchens to arrange good food for offices, hostels, families and events."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service) => (
            <Link key={service.id} to={service.link} className="group block h-full">
              <div className="bg-nk-surface border border-nk-border rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-nk-text-primary mb-2">{service.title}</h3>
                  <p className="text-nk-text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-sm font-medium text-nk-accent flex items-center group-hover:text-nk-accent/80 transition-colors">
                    Learn more <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-nk-surface border-y border-nk-border/50 py-16 md:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <SectionHeading title="Simple from your side." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-nk-border -z-10"></div>

            {[
              { num: "01", title: "Tell us what you need", desc: "Tell us the number of people, area, food requirements and date." },
              { num: "02", title: "We arrange the food", desc: "We work with suitable cooks and kitchens based on your requirements." },
              { num: "03", title: "We organise delivery", desc: "Food and transportation are coordinated before the order is confirmed." },
              { num: "04", title: "Food arrives", desc: "The food is delivered at the agreed time." }
            ].map((step, i) => (
              <div key={i} className="bg-nk-bg p-6 rounded-xl border border-nk-border relative z-10 h-full">
                <span className="text-sm font-bold text-nk-accent mb-4 block">{step.num}</span>
                <h3 className="text-lg font-serif font-medium text-nk-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-nk-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Selection / Order Flow */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 md:py-24 border-b border-nk-border/50">
        <div className="max-w-2xl mx-auto bg-nk-surface border border-nk-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-serif font-medium text-nk-text-primary mb-2 text-center">Where are you located?</h2>
          <p className="text-nk-text-secondary text-center mb-8">We start with selected areas to ensure quality and reliable delivery.</p>

          <form onSubmit={handleAreaCheck} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedArea}
                onChange={(e) => {
                  setSelectedArea(e.target.value);
                  setAreaMessage({type: '', text: ''});
                }}
                className="flex-grow px-4 py-3 border border-nk-border rounded-md focus:outline-none focus:ring-2 focus:ring-nk-accent/20 bg-nk-bg/50"
                required
              >
                <option value="" disabled>Select your area</option>
                {activeAreas.map(area => (
                  <option key={area.name} value={area.name}>{area.name}</option>
                ))}
                <option value="other">Other Area</option>
              </select>
              <button
                type="submit"
                className="px-6 py-3 bg-nk-text-primary text-nk-surface rounded-md font-medium hover:bg-nk-text-primary/90 transition-colors whitespace-nowrap"
              >
                Check Availability
              </button>
            </div>
          </form>

          {areaMessage.text && (
            <div className={cn(
              "mt-6 p-4 rounded-md flex items-start",
              areaMessage.type === 'success' ? "bg-green-50 border border-green-200" : "bg-orange-50 border border-orange-200"
            )}>
              {areaMessage.type === 'success' ? (
                <CheckCircle className="text-green-600 mt-0.5 mr-3 flex-shrink-0" size={18} />
              ) : (
                <MapPin className="text-orange-600 mt-0.5 mr-3 flex-shrink-0" size={18} />
              )}
              <div>
                <p className={cn(
                  "text-sm font-medium",
                  areaMessage.type === 'success' ? "text-green-800" : "text-orange-800"
                )}>
                  {areaMessage.text}
                </p>
                {areaMessage.type === 'success' && (
                  <Link to="/menu" className="inline-block mt-3 text-sm font-medium text-green-700 hover:text-green-800 underline">
                    View this week's menu &rarr;
                  </Link>
                )}
                {areaMessage.type === 'error' && (
                  <Link to="/contact" className="inline-block mt-3 text-sm font-medium text-orange-700 hover:text-orange-800 underline">
                    Leave your details &rarr;
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Weekly Menu Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            title="This Week's Menu"
            subtitle="Sample weekly menu. Contact us for current availability in your area."
            className="mb-0"
          />
          <Link to="/menu" className="text-nk-accent font-medium hover:text-nk-accent/80 transition-colors whitespace-nowrap">
            See Full Menu &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {weeklyMenu.slice(0, 5).map((item, i) => (
            <div key={i} className="bg-nk-surface border border-nk-border rounded-lg p-5 flex flex-col h-full hover:border-nk-accent/30 transition-colors">
              <span className="text-xs font-bold tracking-wider text-nk-text-secondary uppercase mb-3 block">{item.day}</span>
              <h3 className="text-lg font-serif font-medium text-nk-text-primary mb-2">{item.dish}</h3>
              <p className="text-sm text-nk-text-secondary leading-relaxed flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Office & Hostel CTAs */}
      <section className="bg-nk-surface border-y border-nk-border/50">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-nk-border/50">
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-medium text-nk-text-primary mb-4">
              Need lunch for your office?
            </h2>
            <p className="text-lg text-nk-text-secondary mb-8 leading-relaxed">
              Tell us your area and how many people you need to feed. We'll discuss the menu and arrangements with you.
            </p>
            <div>
              <Link to="/offices" className="inline-flex items-center justify-center px-6 py-3 bg-nk-text-primary text-nk-surface rounded-md font-medium hover:bg-nk-text-primary/90 transition-colors">
                Arrange Office Lunch
              </Link>
            </div>
          </div>

          <div className="p-12 lg:p-20 flex flex-col justify-center bg-nk-bg/30">
            <h2 className="text-3xl font-serif font-medium text-nk-text-primary mb-4">
              Planning an event?
            </h2>
            <p className="text-lg text-nk-text-secondary mb-8 leading-relaxed">
              Weddings, nikah, engagements, family gatherings, corporate lunches and more. Tell us what you're planning.
            </p>
            <div>
              <Link to="/events" className="inline-flex items-center justify-center px-6 py-3 border border-nk-border bg-nk-surface text-nk-text-primary rounded-md font-medium hover:bg-nk-bg/50 transition-colors">
                Plan an Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food Supplier Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-nk-green text-white rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle background pattern/texture could go here */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Do you cook from home?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              We're looking to work with good home cooks and small kitchens who can consistently prepare quality food. We taste the food first, understand your menu and capacity, and then discuss whether there is a fit.
            </p>
            <Link to="/cooks" className="inline-flex items-center justify-center px-6 py-3 bg-white text-nk-green rounded-md font-medium hover:bg-white/90 transition-colors">
              Join Our Food Network
            </Link>
          </div>

          <div className="relative z-10 w-full max-w-xs md:max-w-sm hidden sm:block">
             <img
                src="https://images.unsplash.com/photo-1556910103-1c02745a8e03?auto=format&fit=crop&q=80&w=800"
                alt="Home cooking"
                className="w-full aspect-square object-cover rounded-xl shadow-lg rotate-3"
                loading="lazy"
              />
          </div>
        </div>
      </section>
    </div>
  );
};
