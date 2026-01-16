interface AdSenseBlockProps {
  slot?: string;
  format?: "horizontal" | "vertical" | "rectangle";
  className?: string;
}

const AdSenseBlock = ({ slot = "XXXX", format = "horizontal", className = "" }: AdSenseBlockProps) => {
  const heightClass = format === "horizontal" ? "h-24" : format === "rectangle" ? "h-64" : "h-96";
  
  return (
    <div className={`my-8 ${className}`}>
      <div className={`relative bg-gradient-to-br from-muted to-card border border-border rounded-xl ${heightClass} flex items-center justify-center overflow-hidden`}>
        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
        
        <div className="text-center z-10">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Publicité</p>
          <p className="text-sm text-muted-foreground">
            Espace Google AdSense
          </p>
          {/* 
            Remplacer par le code AdSense réel :
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-XXXXX"
              data-ad-slot={slot}
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          */}
        </div>
      </div>
      <p className="text-[10px] text-muted-foreground text-center mt-1">Annonce sponsorisée</p>
    </div>
  );
};

export default AdSenseBlock;
