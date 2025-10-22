interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className = "" }: FeatureCardProps) => {
  return (
    <div className={`card card-hover text-center ${className}`}>
      <div className="icon mb-6">
        {icon}
      </div>
      <h3 className="heading-4 mb-4">{title}</h3>
      <p className="body-base text-secondary">{description}</p>
    </div>
  );
};

export default FeatureCard;
