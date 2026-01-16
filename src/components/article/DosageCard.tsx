interface DosageCardProps {
  label: string;
  value: string;
  description: string;
  highlighted?: boolean;
}

const DosageCard = ({ label, value, description, highlighted = false }: DosageCardProps) => {
  return (
    <div className={`rounded-xl p-6 text-center ${
      highlighted 
        ? "bg-primary/10 border border-primary/30" 
        : "bg-muted/50 border border-border"
    }`}>
      <span className={`text-xs font-bold uppercase tracking-wider ${highlighted ? "text-primary" : "text-muted-foreground"}`}>
        {label}
      </span>
      <div className={`text-3xl md:text-4xl font-extrabold mt-2 mb-1 ${highlighted ? "text-foreground" : "text-foreground"}`}>
        {value}
      </div>
      <p className="text-sm text-muted-foreground m-0">{description}</p>
    </div>
  );
};

export default DosageCard;
