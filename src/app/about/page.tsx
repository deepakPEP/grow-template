import Banner from "@/components/Banner";
import FeatureCard from "@/components/FeatureCard";
import StatsSection from "@/components/StatsSection";

export default function About() {
  const teamMembers = [
    {
      icon: (
        <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      ),
      title: "John Smith",
      description: "CEO & Founder - Leading the vision and strategy for GrowTemplate's future growth."
    },
    {
      icon: (
        <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      ),
      title: "Sarah Johnson",
      description: "CTO - Driving innovation and technical excellence across all our products."
    },
    {
      icon: (
        <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      ),
      title: "Mike Chen",
      description: "Head of Design - Creating beautiful and intuitive user experiences."
    }
  ];

  const values = [
    {
      icon: (
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      ),
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible, embracing new technologies and creative solutions."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      ),
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product quality to customer service."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      ),
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong relationships with our customers and partners."
    }
  ];

  const stats = [
    {
      number: "5+",
      label: "Years Experience",
      description: "Building innovative solutions"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Passionate professionals"
    },
    {
      number: "100+",
      label: "Projects Completed",
      description: "Successful deliveries"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Happy customers"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="About GrowTemplate"
        subtitle="Our Story"
        description="We're passionate about building innovative solutions that help businesses grow and succeed in the digital age."
        primaryButtonText="Join Our Team"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Products"
        secondaryButtonLink="/products"
      />

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Our Story</h2>
            <p className="body-large text-secondary mb-8">
              Founded in 2019, GrowTemplate started as a small team with a big vision: to democratize 
              access to cutting-edge technology and help businesses of all sizes thrive in the digital economy.
            </p>
            <p className="body-base text-secondary mb-8">
              What began as a passion project has grown into a comprehensive platform trusted by thousands 
              of businesses worldwide. Weve learned that success comes from listening to our customers, 
              staying ahead of technology trends, and maintaining our commitment to excellence.
            </p>
            <p className="body-base text-secondary">
              Today, we continue to innovate and expand our offerings, always keeping our 
              needs at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Values</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid-3">
            {values.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Meet Our Team</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              The passionate people behind GrowTemplates success.
            </p>
          </div>
          
          <div className="grid-3">
            {teamMembers.map((member, index) => (
              <FeatureCard
                key={index}
                icon={member.icon}
                title={member.title}
                description={member.description}
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Lets discuss how we can help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Get In Touch
            </a>
            <a
              href="/products"
              className="btn btn-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg font-semibold"
            >
              View Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
