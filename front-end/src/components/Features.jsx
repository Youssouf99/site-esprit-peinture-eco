import { CheckCircle } from "lucide-react";

const Features = () => {
  const reasons = [
    "Plus de 15 ans d'expérience",
    "Équipe qualifiée et professionnelle",
    "Matériaux de haute qualité",
    "Respect des délais",
    "Garantie sur tous nos travaux",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=2069&q=80"
          alt="Work in progress"
          className="rounded-lg shadow-xl"
        />
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Pourquoi Nous Choisir?</h2>
          {reasons.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-yellow-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
