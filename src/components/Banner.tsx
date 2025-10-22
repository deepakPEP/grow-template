import Link from 'next/link';

interface BannerProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
  className?: string;
}

const Banner = ({
  title,
  subtitle,
  description,
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/about",
  backgroundImage,
  className = "",
}: BannerProps) => {
  return (
    <section className={`relative py-20 lg:py-32 ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-primary-600 font-semibold text-lg mb-4 uppercase tracking-wide">
            {subtitle}
          </p>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          
          {/* Description */}
          {description && (
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryButtonLink}
              className="btn btn-primary btn-lg px-8 py-4 text-lg font-semibold"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonLink}
              className="btn btn-outline btn-lg px-8 py-4 text-lg font-semibold"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Banner;
