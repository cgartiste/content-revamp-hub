import { motion } from "framer-motion";

const products = [
  {
    name: "Poudre Pure",
    target: "Économie & Pureté",
    purity: "100%",
    purityColor: "text-green",
    paresthesia: "Élevé",
    paresthesiaColor: "text-foreground",
    link: "https://amzn.to/4aZvHVu"
  },
  {
    name: "Performance Blend",
    target: "Force & Pump",
    purity: "Complex",
    purityColor: "text-primary",
    paresthesia: "Moyen",
    paresthesiaColor: "text-foreground",
    link: "https://amzn.to/4jOwHxV"
  },
  {
    name: "Gélules SR",
    target: "Zéro Inconfort",
    purity: "95%+",
    purityColor: "text-green",
    paresthesia: "Nulo",
    paresthesiaColor: "text-primary",
    link: "https://amzn.to/49l6fIL"
  },
];

const ProductComparison = () => {
  return (
    <section id="comparatif" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
          Comparatif des Solutions 2026
        </h2>
        
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-border bg-muted/30">
            <div className="text-xs font-bold text-primary uppercase tracking-wider">Format</div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Cible</div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Pureté</div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Paresthésie</div>
            <div className="text-xs font-bold text-primary uppercase tracking-wider">Amazon</div>
          </div>
          
          {/* Rows */}
          {products.map((product, index) => (
            <div 
              key={index}
              className="grid grid-cols-5 gap-4 px-6 py-5 border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors"
            >
              <div className="font-bold text-foreground italic">{product.name}</div>
              <div className="text-muted-foreground">{product.target}</div>
              <div className={product.purityColor + " font-semibold"}>{product.purity}</div>
              <div className={product.paresthesiaColor}>{product.paresthesia}</div>
              <a 
                href={product.link}
                target="_blank"
                rel="nofollow sponsored"
                className="text-primary font-semibold hover:underline italic"
              >
                Découvrir
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductComparison;
