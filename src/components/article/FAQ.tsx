import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quand dois-je prendre l'ashwagandha ?",
    answer: "Pour le stress et l'anxiété : le matin ou en milieu de journée. Pour le sommeil : 1 à 2 heures avant le coucher. Toujours avec un repas pour une meilleure absorption."
  },
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer: "Les premiers effets sur le stress peuvent être ressentis après 2 semaines. Les bénéfices optimaux sont généralement observés après 8 à 12 semaines d'utilisation régulière."
  },
  {
    question: "Puis-je prendre l'ashwagandha tous les jours ?",
    answer: "Oui, mais il est conseillé de faire des pauses. Un cycle typique est de 8-12 semaines de prise, suivi de 2-4 semaines de pause, pour maintenir l'efficacité."
  },
  {
    question: "Quelle forme d'ashwagandha choisir ?",
    answer: "Les extraits standardisés comme KSM-66 ou Sensoril sont recommandés car leur concentration en withanolides est garantie. La poudre de racine est moins concentrée mais plus traditionnelle."
  },
  {
    question: "L'ashwagandha peut-elle aider à perdre du poids ?",
    answer: "Indirectement, oui. En réduisant le cortisol (hormone liée au stockage des graisses abdominales) et en améliorant le sommeil, elle peut favoriser un métabolisme plus sain. Mais ce n'est pas un brûleur de graisse direct."
  },
  {
    question: "Y a-t-il des interactions médicamenteuses ?",
    answer: "Oui, l'ashwagandha peut interagir avec les médicaments thyroïdiens, les immunosuppresseurs, les sédatifs et les médicaments pour le diabète. Consultez toujours votre médecin avant de commencer."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-8">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
        Questions Fréquentes
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer transition-colors hover:border-accent/50"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center p-5">
              <h3 className="font-bold text-foreground m-0 pr-4">{faq.question}</h3>
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`} 
              />
            </div>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-5 pb-5 pt-0 border-t border-border">
                    <p className="text-muted-foreground m-0 pt-4">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
