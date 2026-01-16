import { ArrowRight, Star } from "lucide-react";

interface ProductAdProps {
  badge: string;
  title: string;
  highlight: string;
  benefits: string[];
  link: string;
  ctaText: string;
}

const ProductAd = ({ badge, title, highlight, benefits, link, ctaText }: ProductAdProps) => {
  return (
    <div className="relative bg-gradient-to-br from-muted to-card border border-border rounded-xl p-6 md:p-8 my-8 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-accent/8 to-transparent pointer-events-none" />
      
      {/* Badge */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary to-gold-glow text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-primary/30 mb-6">
        <Star className="w-3.5 h-3.5" fill="currentColor" />
        {badge}
      </span>
      
      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Image placeholder */}
        <div className="w-32 h-40 bg-muted rounded-lg flex items-center justify-center shrink-0">
          <span className="text-4xl">🌿</span>
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              {title} <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">{highlight}</span>
            </h3>
            
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
            <a
              href={link}
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-blue rounded-lg text-accent-foreground font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-primary font-semibold">⚡ Contenu sponsorisé — Publicité</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAd;
