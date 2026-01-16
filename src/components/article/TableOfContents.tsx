import { motion } from "framer-motion";

const tocItems = [
  { id: "comparatif", label: "Comparatif Produits" },
  { id: "definition", label: "Qu'est-ce que c'est ?" },
  { id: "bienfaits", label: "Bienfaits" },
  { id: "stress", label: "Stress & Cortisol" },
  { id: "dosage", label: "Dosage" },
  { id: "securite", label: "Sécurité" },
  { id: "associations", label: "Associations" },
  { id: "faq", label: "FAQ" },
];

const TableOfContents = () => {
  return (
    <nav className="mb-12 pt-8" aria-label="Table des matières">
      <h2 className="text-center text-2xl font-display font-bold text-primary mb-6">
        Table des matières
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {tocItems.map((item, index) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center gap-2 px-4 py-3 bg-muted/50 rounded-lg text-foreground text-sm font-semibold transition-all hover:bg-accent/20 hover:text-accent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <span className="text-primary">→</span>
            {item.label}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContents;
