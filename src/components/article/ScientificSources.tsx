import { ExternalLink } from "lucide-react";

const sources = [
  {
    name: "PubMed (NIH)",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=ashwagandha",
    description: "Base de données de la National Library of Medicine",
    icon: "🔬"
  },
  {
    name: "Examine.com",
    url: "https://examine.com/supplements/ashwagandha/",
    description: "Analyses indépendantes basées sur la science",
    icon: "📊"
  },
  {
    name: "ScienceDirect",
    url: "https://www.sciencedirect.com/topics/pharmacology-toxicology-and-pharmaceutical-science/withania-somnifera",
    description: "Articles peer-reviewed Elsevier",
    icon: "📚"
  },
  {
    name: "National Center for Complementary and Integrative Health (NCCIH)",
    url: "https://www.nccih.nih.gov/health/ashwagandha",
    description: "Institut national américain de santé",
    icon: "🏛️"
  },
  {
    name: "Cochrane Library",
    url: "https://www.cochranelibrary.com/search?q=ashwagandha",
    description: "Revues systématiques et méta-analyses",
    icon: "🧪"
  },
  {
    name: "Journal of Ethnopharmacology",
    url: "https://www.sciencedirect.com/journal/journal-of-ethnopharmacology",
    description: "Recherche sur les plantes médicinales",
    icon: "🌿"
  }
];

const ScientificSources = () => {
  return (
    <section className="bg-card border-2 border-accent/30 rounded-xl p-6 md:p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/15 border border-accent/30">
          <span className="text-2xl">🔗</span>
        </div>
        <div>
          <h2 className="font-display text-xl md:text-2xl font-bold text-primary m-0">Preuves Cliniques</h2>
          <p className="text-muted-foreground text-sm m-0">Sources scientifiques et universitaires</p>
        </div>
      </div>

      <p className="text-foreground mb-6">
        Pour approfondir vos recherches et vérifier les données présentées dans cet article, 
        consultez ces sources scientifiques reconnues internationalement :
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {sources.map((source, index) => (
          <a
            key={index}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 bg-muted/50 hover:bg-accent/20 border border-border hover:border-accent/50 rounded-xl p-4 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent/15 border border-accent/30 shrink-0">
              <span className="text-xl">{source.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors m-0">
                  {source.name}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground m-0 mt-1">{source.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
        <p className="text-sm text-foreground m-0">
          <strong className="text-primary">💡 Note :</strong> Ces liens mènent vers des bases de données scientifiques 
          et des institutions de recherche reconnues. Les études citées font l'objet d'une évaluation par les pairs (peer-review).
        </p>
      </div>
    </section>
  );
};

export default ScientificSources;
