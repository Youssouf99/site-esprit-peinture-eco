import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Contactez Nos <span className="text-yellow-500">Experts</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Coordonnées */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Siège Social</h3>
                  <p className="text-gray-600">
                    123 Rue des Artisans
                    <br />
                    75000 Paris, France
                    <br />
                    Bureau International : Casablanca, Dubai
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                  <p className="text-gray-600">
                    France : +33 1 23 45 67 89
                    <br />
                    International : +33 6 12 34 56 78
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-600">
                    contact@renoartpro.com
                    <br />
                    commercial@renoartpro.com
                  </p>
                </div>
              </div>
            </div>
            {/* Formulaire */}
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nom complet *"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400">
                  <option>Sélectionnez un service</option>
                  <option>Peinture & Rénovation</option>
                  <option>Revêtements de Sol</option>
                  <option>Location de Matériel</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Votre message *"
                  rows="5"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
                style={{ backgroundColor: "#FFB400" }}
              >
                Envoyer la Demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
