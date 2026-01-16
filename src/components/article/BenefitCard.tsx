interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  borderColor?: string;
}

const BenefitCard = ({ icon, title, description, borderColor = "border-l-primary" }: BenefitCardProps) => {
  return (
    <div className={`bg-muted/30 rounded-lg p-5 border-l-4 ${borderColor}`}>
      <h4 className="font-display font-bold text-foreground mb-2 flex items-center gap-2">
        <span>{icon}</span>
        {title}
      </h4>
      <p className="text-sm text-muted-foreground m-0">{description}</p>
    </div>
  );
};

export default BenefitCard;
