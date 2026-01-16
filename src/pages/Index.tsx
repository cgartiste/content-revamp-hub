import Hero from "@/components/article/Hero";
import TableOfContents from "@/components/article/TableOfContents";
import ProductComparison from "@/components/article/ProductComparison";
import Section from "@/components/article/Section";
import BenefitCard from "@/components/article/BenefitCard";
import DosageCard from "@/components/article/DosageCard";
import ProductAd from "@/components/article/ProductAd";
import AdSenseBlock from "@/components/article/AdSenseBlock";
import FAQ from "@/components/article/FAQ";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <article className="max-w-4xl mx-auto px-4 py-6">
        {/* Schema.org Article markup for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ashwagandha : Guide Scientifique Complet 2026",
            "description": "Découvrez les bienfaits prouvés de l'ashwagandha, le dosage optimal, les effets sur le stress et le cortisol. Guide complet basé sur plus de 100 études cliniques.",
            "author": { "@type": "Organization", "name": "Guide Santé Naturelle" },
            "datePublished": "2026-01-15",
            "dateModified": "2026-01-15"
          })
        }} />

        <Hero />
        
        <TableOfContents />
        
        {/* Comparatif des produits */}
        <ProductComparison />
        
        {/* AdSense Block */}
        <AdSenseBlock format="horizontal" />

        {/* Section Définition */}
        <Section id="definition" icon="🌿" title="Qu'est-ce que l'Ashwagandha ?" iconColor="green">
          <p className="text-lg text-foreground mb-6">
            L'Ashwagandha (Withania somnifera), également appelée <strong>ginseng indien</strong> ou <strong>cerise d'hiver</strong>, 
            est une plante adaptogène utilisée depuis plus de 5000 ans dans la médecine traditionnelle ayurvédique. 
            Son nom signifie "odeur de cheval" en sanskrit, faisant référence à la fois à son odeur caractéristique 
            et à la force qu'elle est censée procurer.
          </p>
          <p className="text-foreground mb-6">
            Les <strong>adaptogènes</strong> sont des substances naturelles qui aident l'organisme à s'adapter au stress 
            et à rétablir l'équilibre (homéostasie). L'ashwagandha est considérée comme l'une des plantes adaptogènes 
            les plus puissantes et les mieux étudiées scientifiquement.
          </p>
          
          <h3 className="font-display text-lg font-bold mb-4">Composés actifs principaux</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/50 rounded-xl p-5">
              <h4 className="font-bold mb-2">🧪 Withanolides</h4>
              <p className="text-sm text-muted-foreground m-0">Composés bioactifs principaux responsables de la majorité des effets thérapeutiques</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-5">
              <h4 className="font-bold mb-2">⚗️ Alcaloïdes</h4>
              <p className="text-sm text-muted-foreground m-0">Contribuent aux effets calmants et adaptogènes de la plante</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-5">
              <h4 className="font-bold mb-2">🍃 Saponines</h4>
              <p className="text-sm text-muted-foreground m-0">Renforcent l'immunité et possèdent des propriétés anti-inflammatoires</p>
            </div>
          </div>
        </Section>

        {/* Publicité Produit 1 */}
        <ProductAd
          badge="RECOMMANDÉ"
          title="Ashwagandha"
          highlight="Premium KSM-66"
          benefits={[
            "Extrait breveté haute concentration",
            "Réduit le stress et l'anxiété",
            "Améliore le sommeil naturellement"
          ]}
          link="https://amzn.to/4aZvHVu"
          ctaText="Découvrir maintenant"
        />

        {/* Section Bienfaits */}
        <Section id="bienfaits" icon="✨" title="Bienfaits prouvés scientifiquement" iconColor="green">
          <p className="text-lg text-foreground mb-8">
            Des dizaines d'études cliniques ont démontré les effets bénéfiques de l'ashwagandha sur de nombreux aspects de la santé.
            Voici les principaux bienfaits validés par la recherche scientifique.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-4 bg-muted/30 rounded-xl p-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green/15 border border-green/30 shrink-0">
                <span className="text-xl">🧘</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Réduction du stress</h4>
                <p className="text-sm text-muted-foreground m-0">Diminution significative du cortisol et des symptômes d'anxiété</p>
              </div>
            </div>
            <div className="flex gap-4 bg-muted/30 rounded-xl p-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/15 border border-accent/30 shrink-0">
                <span className="text-xl">😴</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Amélioration du sommeil</h4>
                <p className="text-sm text-muted-foreground m-0">Meilleure qualité du sommeil et endormissement facilité</p>
              </div>
            </div>
            <div className="flex gap-4 bg-muted/30 rounded-xl p-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-400/15 border border-purple-400/30 shrink-0">
                <span className="text-xl">🧠</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Fonctions cognitives</h4>
                <p className="text-sm text-muted-foreground m-0">Amélioration de la mémoire, concentration et clarté mentale</p>
              </div>
            </div>
            <div className="flex gap-4 bg-muted/30 rounded-xl p-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/15 border border-primary/30 shrink-0">
                <span className="text-xl">💪</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Performance physique</h4>
                <p className="text-sm text-muted-foreground m-0">Augmentation de la force, endurance et récupération</p>
              </div>
            </div>
            <div className="flex gap-4 bg-muted/30 rounded-xl p-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green/15 border border-green/30 shrink-0">
                <span className="text-xl">🛡️</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Système immunitaire</h4>
                <p className="text-sm text-muted-foreground m-0">Renforcement des défenses naturelles de l'organisme</p>
              </div>
            </div>
            <div className="flex gap-4 bg-muted/30 rounded-xl p-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red/15 border border-red/30 shrink-0">
                <span className="text-xl">❤️</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">Santé hormonale</h4>
                <p className="text-sm text-muted-foreground m-0">Équilibre hormonal et soutien de la thyroïde</p>
              </div>
            </div>
          </div>
        </Section>

        {/* AdSense Block */}
        <AdSenseBlock format="rectangle" />

        {/* Section Stress & Cortisol */}
        <Section id="stress" icon="⚡" title="Action sur le stress et le cortisol" iconColor="blue">
          <p className="text-lg text-foreground mb-8">
            L'effet le plus documenté de l'ashwagandha est sa capacité à <strong>réduire le cortisol</strong>, 
            l'hormone du stress. Des études montrent une réduction moyenne de 14 à 28% des niveaux de cortisol.
          </p>
          
          <h3 className="font-display text-lg font-bold mb-4">Mécanisme d'action</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 text-center">
              <h4 className="font-bold mb-2">Axe HPA</h4>
              <p className="text-sm text-muted-foreground m-0">Régulation de l'axe hypothalamo-hypophyso-surrénalien</p>
            </div>
            <div className="bg-green/10 border border-green/30 rounded-xl p-5 text-center">
              <h4 className="font-bold mb-2">GABA</h4>
              <p className="text-sm text-muted-foreground m-0">Effet modulateur sur les récepteurs GABAergiques</p>
            </div>
            <div className="bg-purple-400/10 border border-purple-400/30 rounded-xl p-5 text-center">
              <h4 className="font-bold mb-2">Neurotransmetteurs</h4>
              <p className="text-sm text-muted-foreground m-0">Équilibre sérotonine et dopamine</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
              <h3 className="font-display font-bold mb-3">📊 Résultats des études</h3>
              <p className="text-foreground m-0">
                Une méta-analyse de 2022 portant sur 12 études a confirmé que l'ashwagandha réduit significativement 
                les niveaux de <strong>cortisol sérique</strong> et améliore les scores d'anxiété et de qualité de vie.
              </p>
            </div>
            <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
              <h3 className="font-display font-bold mb-3">⏱️ Délai d'action</h3>
              <p className="text-foreground m-0">
                Les premiers effets sur le stress peuvent être ressentis dès <strong>2 semaines</strong>. 
                Les bénéfices optimaux sont généralement observés après <strong>8 à 12 semaines</strong> d'utilisation régulière.
              </p>
            </div>
          </div>
        </Section>

        {/* Publicité Produit 2 */}
        <ProductAd
          badge="TOP VENTE"
          title="Ashwagandha"
          highlight="Bio Haute Puissance"
          benefits={[
            "Formule bio certifiée",
            "Boost d'énergie naturel",
            "Soutien hormonal optimal"
          ]}
          link="https://amzn.to/4jOwHxV"
          ctaText="Voir le produit"
        />

        {/* Section Dosage */}
        <Section id="dosage" icon="⚖️" title="Dosage optimal basé sur la science" iconColor="blue">
          <p className="text-lg text-foreground mb-8">
            Le dosage optimal dépend de la forme utilisée (extrait standardisé vs poudre de racine) 
            et de l'objectif recherché. Voici les recommandations scientifiques.
          </p>

          {/* Protocoles de Dosage - Style image 2 */}
          <h3 className="font-display text-lg font-bold mb-4">Protocoles de Dosage</h3>
          <p className="text-muted-foreground mb-6">La stratégie repose sur la dose cumulée plutôt que sur une prise aiguë unique.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <DosageCard
              label="Charge Intensive"
              value="600 mg/jour"
              description="Phase de charge rapide (4-6 semaines)"
              highlighted
            />
            <DosageCard
              label="Maintenance"
              value="300-450 mg/jour"
              description="Après saturation (Usage long terme)"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-muted/50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">💊</div>
              <h4 className="text-sm font-bold mb-2">Extrait standardisé</h4>
              <div className="text-xl font-extrabold text-accent mb-1">300-600 mg/jour</div>
              <p className="text-xs text-muted-foreground m-0">Extrait KSM-66 ou Sensoril (5-10% withanolides)</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">🌿</div>
              <h4 className="text-sm font-bold mb-2">Poudre de racine</h4>
              <div className="text-xl font-extrabold text-accent mb-1">1-6 g/jour</div>
              <p className="text-xs text-muted-foreground m-0">Forme traditionnelle, concentration plus faible</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">📅</div>
              <h4 className="text-sm font-bold mb-2">Durée recommandée</h4>
              <div className="text-xl font-extrabold text-accent mb-1">8-12 sem.</div>
              <p className="text-xs text-muted-foreground m-0">Puis pause de 2-4 semaines conseillée</p>
            </div>
          </div>

          <h3 className="font-display text-lg font-bold mb-4">Moment de prise optimal</h3>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="flex items-center gap-3 bg-muted/50 px-5 py-3 rounded-lg">
              <span className="text-muted-foreground">🌙 Soir</span>
              <span className="font-bold text-accent">Pour le sommeil</span>
            </div>
            <div className="flex items-center gap-3 bg-muted/50 px-5 py-3 rounded-lg">
              <span className="text-muted-foreground">☀️ Matin</span>
              <span className="font-bold text-accent">Pour l'énergie</span>
            </div>
            <div className="flex items-center gap-3 bg-muted/50 px-5 py-3 rounded-lg">
              <span className="text-muted-foreground">🍽️ Avec repas</span>
              <span className="font-bold text-accent">Meilleure absorption</span>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
            <p className="m-0 text-foreground">
              <strong className="text-primary">Conseil :</strong> Commencez par une dose faible (150-300mg) 
              et augmentez progressivement pour évaluer votre tolérance. Les extraits standardisés (KSM-66, Sensoril) 
              sont préférables car leur concentration en principes actifs est garantie.
            </p>
          </div>
        </Section>

        {/* AdSense Block */}
        <AdSenseBlock format="horizontal" />

        {/* Section Sécurité */}
        <Section id="securite" icon="⚠️" title="Sécurité et précautions d'emploi" iconColor="gold">
          <p className="text-lg text-foreground mb-8">
            L'ashwagandha est généralement bien tolérée, mais certaines précautions sont nécessaires. 
            Voici ce qu'il faut savoir avant de commencer une supplémentation.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green/10 border border-green/30 rounded-xl p-5">
              <h4 className="font-bold text-green mb-2">✓ Généralement sûre</h4>
              <p className="text-sm text-foreground m-0">
                Les études cliniques montrent une bonne tolérance aux doses recommandées pendant 8-12 semaines.
                Les effets secondaires sont rares et généralement légers.
              </p>
            </div>
            <div className="bg-red/10 border border-red/30 rounded-xl p-5">
              <h4 className="font-bold text-red mb-2">✗ Effets secondaires possibles</h4>
              <p className="text-sm text-foreground m-0">
                À fortes doses : troubles digestifs, somnolence, maux de tête. 
                Très rarement : élévation des enzymes hépatiques.
              </p>
            </div>
          </div>

          <div className="bg-red/5 border border-red/30 rounded-xl p-6">
            <h4 className="font-bold text-red mb-4">Contre-indications importantes</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-red font-bold">✗</span>
                <span>Grossesse et allaitement</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-red font-bold">✗</span>
                <span>Troubles thyroïdiens (hyper/hypothyroïdie)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-red font-bold">✗</span>
                <span>Maladies auto-immunes</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-red font-bold">✗</span>
                <span>Avant une chirurgie (arrêter 2 semaines avant)</span>
              </div>
            </div>
            <p className="text-sm italic text-muted-foreground mt-4 mb-0">
              Consultez toujours un professionnel de santé avant de commencer, surtout si vous prenez des médicaments.
            </p>
          </div>
        </Section>

        {/* Section Associations */}
        <Section id="associations" icon="🔗" title="Associations synergiques" iconColor="purple">
          <p className="text-lg text-foreground mb-8">
            L'ashwagandha peut être combinée avec d'autres compléments pour potentialiser ses effets 
            selon vos objectifs spécifiques.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="relative bg-muted/50 border border-green/30 rounded-xl p-5">
              <span className="absolute -top-2 right-4 px-2 py-0.5 bg-green text-primary-foreground text-xs font-bold uppercase rounded">Excellent</span>
              <h4 className="font-bold mt-2">🧠 Rhodiola Rosea</h4>
              <p className="text-sm text-foreground m-0">Synergie anti-stress et énergie mentale. Deux adaptogènes complémentaires.</p>
            </div>
            <div className="relative bg-muted/50 border border-green/30 rounded-xl p-5">
              <span className="absolute -top-2 right-4 px-2 py-0.5 bg-green text-primary-foreground text-xs font-bold uppercase rounded">Excellent</span>
              <h4 className="font-bold mt-2">🍵 L-Théanine</h4>
              <p className="text-sm text-foreground m-0">Relaxation sans somnolence. Idéal pour la gestion du stress quotidien.</p>
            </div>
            <div className="relative bg-muted/50 border border-accent/30 rounded-xl p-5">
              <span className="absolute -top-2 right-4 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-bold uppercase rounded">Bon</span>
              <h4 className="font-bold mt-2">🌙 Magnésium</h4>
              <p className="text-sm text-foreground m-0">Améliore le sommeil et la relaxation musculaire. Effet synergique sur le stress.</p>
            </div>
            <div className="relative bg-muted/50 border border-purple-400/30 rounded-xl p-5">
              <span className="absolute -top-2 right-4 px-2 py-0.5 bg-purple-400 text-primary-foreground text-xs font-bold uppercase rounded">Avancé</span>
              <h4 className="font-bold mt-2">💪 Créatine</h4>
              <p className="text-sm text-foreground m-0">Pour les sportifs : améliore force et récupération. Stack performance optimale.</p>
            </div>
          </div>
        </Section>

        {/* Publicité Produit 3 */}
        <ProductAd
          badge="MEILLEUR RAPPORT QUALITÉ/PRIX"
          title="Complexe"
          highlight="Ashwagandha"
          benefits={[
            "Formule complète avec vitamines",
            "Favorise la relaxation profonde",
            "Excellent rapport qualité/prix"
          ]}
          link="https://amzn.to/49l6fIL"
          ctaText="Acheter maintenant"
        />

        {/* Méta-Analyse des Bénéfices - Style image 3 */}
        <Section id="meta-analyse" icon="📊" title="Méta-Analyse des Bénéfices Athlétiques" iconColor="blue">
          <p className="text-foreground mb-6">
            L'efficacité de l'ashwagandha a été validée par plus de 100 études cliniques, avec un effet ergogénique
            maximal pour les exercices de haute intensité.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <BenefitCard
              icon=""
              title="Seuil Lactique"
              description="Décale l'accumulation d'ions H+, permettant de maintenir une intensité élevée 15-20% plus longtemps."
              borderColor="border-l-primary"
            />
            <BenefitCard
              icon=""
              title="Puissance Anaérobie"
              description="Amélioration significative de la puissance moyenne lors de sprints répétés ou séries lourdes."
              borderColor="border-l-primary"
            />
            <BenefitCard
              icon=""
              title="Récupération"
              description="Accélère la restauration du pH intracellulaire entre les efforts explosifs."
              borderColor="border-l-primary"
            />
            <BenefitCard
              icon=""
              title="Volume de Travail"
              description="Augmentation de la charge totale soulevée par séance (+12% en moyenne)."
              borderColor="border-l-primary"
            />
          </div>
        </Section>

        {/* Classement */}
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-8">
          <h3 className="font-display text-xl font-bold text-center mb-6">Classement des adaptogènes les plus étudiés</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-5 py-3 bg-accent/20 border border-accent rounded-lg font-semibold">
              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Ashwagandha
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-muted/50 rounded-lg font-semibold">
              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Rhodiola
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-muted/50 rounded-lg font-semibold">
              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Ginseng
            </div>
          </div>
        </div>

        {/* Résumé */}
        <div className="bg-card border-2 border-border rounded-xl p-6 md:p-8 mb-8">
          <h3 className="font-display text-xl font-bold text-center text-primary mb-6">En résumé</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-green mb-4">L'Ashwagandha EST :</h4>
              <ul className="space-y-2 list-disc list-inside text-foreground">
                <li>Un adaptogène anti-stress puissant</li>
                <li>Un soutien naturel pour le sommeil</li>
                <li>Un booster de performance physique</li>
                <li>Scientifiquement validée</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red mb-4">L'Ashwagandha N'EST PAS :</h4>
              <ul className="space-y-2 list-disc list-inside text-foreground">
                <li>Un somnifère ou anxiolytique</li>
                <li>Un substitut aux médicaments</li>
                <li>Adaptée à tout le monde</li>
                <li>Un produit miracle instantané</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-lg mt-6 pt-6 border-t border-border mb-0">
            👉 Utilisée correctement, elle peut significativement améliorer votre gestion du stress et votre bien-être global.
          </p>
        </div>

        {/* AdSense Block */}
        <AdSenseBlock format="rectangle" />

        {/* FAQ */}
        <FAQ />

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-border mt-8">
          <p className="text-foreground"><strong>Temps de lecture estimé :</strong> 12 minutes</p>
          <p className="text-foreground"><strong>Dernière mise à jour :</strong> Janvier 2026</p>
          <p className="text-sm text-muted-foreground mt-6">
            <strong>Disclaimer :</strong> Cet article est fourni à titre informatif seulement. Les informations présentées ne constituent pas des conseils médicaux.
            Consultez toujours un professionnel de santé avant de commencer un nouveau supplément.
          </p>
        </footer>
      </article>
    </main>
  );
};

export default Index;
