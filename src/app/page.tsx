import HeroBanner from "@/components/heroBanner";
import FeatureCard from "@/components/FeatureCard";
import StatsSection from "@/components/StatsSection";
import { Company } from "@/components";

export default function Home() {
  const features = [
    {
      icon: (
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure and cutting-edge technology."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security and 99.9% uptime guarantee."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      ),
      title: "User Friendly",
      description: "Intuitive design and seamless user experience that makes complex tasks simple."
    }
  ];

  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
      description: "Trusted by businesses worldwide"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable service guarantee"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Always here to help"
    },
    {
      number: "50+",
      label: "Countries",
      description: "Global presence"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />

      <Company />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Why Choose GrowTemplate?</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              We provide everything you need to scale your business and achieve your goals with confidence.
            </p>
          </div>
          
          <div className="grid-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust GrowTemplate to power their growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Contact Us Today
            </a>
            <a
              href="/about"
              className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
