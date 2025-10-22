import Banner from "@/components/Banner";
import FeatureCard from "@/components/FeatureCard";
import StatsSection from "@/components/StatsSection";

export default function Products() {
  const products = [
    {
      icon: (
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      ),
      title: "Analytics Pro",
      description: "Advanced analytics and reporting tools to help you understand your business performance and make data-driven decisions."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      ),
      title: "Security Suite",
      description: "Comprehensive security solutions to protect your data and ensure compliance with industry standards."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      title: "Performance Boost",
      description: "Optimize your applications and infrastructure for maximum speed and efficiency."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      ),
      title: "Team Collaboration",
      description: "Streamline teamwork with powerful collaboration tools and project management features."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      title: "Quality Assurance",
      description: "Ensure your products meet the highest standards with our comprehensive testing and QA tools."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8" />
          </svg>
        </div>
      ),
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions that grow with your business needs and requirements."
    }
  ];

  const features = [
    {
      icon: (
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      title: "Lightning Fast Setup",
      description: "Get started in minutes with our intuitive setup process and comprehensive documentation."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
          </svg>
        </div>
      ),
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team to help you succeed with our products."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      ),
      title: "Flexible Pricing",
      description: "Choose the plan that fits your needs with our flexible pricing options and no hidden fees."
    }
  ];

  const stats = [
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable service"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Always here to help"
    },
    {
      number: "30 Days",
      label: "Free Trial",
      description: "Try risk-free"
    },
    {
      number: "100+",
      label: "Integrations",
      description: "Connect everything"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="Our Products & Solutions"
        subtitle="Powerful Tools"
        description="Discover our comprehensive suite of products designed to help your business grow, scale, and succeed in today's competitive market."
        primaryButtonText="Start Free Trial"
        primaryButtonLink="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonLink="/contact"
      />

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Product Suite</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              Comprehensive solutions designed to address every aspect of your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FeatureCard
                key={index}
                icon={product.icon}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Why Choose Our Products?</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              We've designed our products with your success in mind, focusing on ease of use, reliability, and performance.
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
            Join thousands of businesses already using our products to drive growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Start Free Trial
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
