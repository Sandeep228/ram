import { Utensils, Wifi, Car, MapPin, Flower2, Droplet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Amenities() {
  const { t } = useLanguage();

  const amenities = [
    {
      icon: Utensils,
      title: t('homeCooked'),
      description: t('homeCookedDesc'),
    },
    {
      icon: Wifi,
      title: t('wifi'),
      description: t('wifiDesc'),
    },
    {
      icon: Car,
      title: t('parking'),
      description: t('parkingDesc'),
    },
    {
      icon: MapPin,
      title: t('guided'),
      description: t('guidedDesc'),
    },
    {
      icon: Flower2,
      title: t('garden'),
      description: t('gardenDesc'),
    },
    {
      icon: Droplet,
      title: t('hotWater'),
      description: t('hotWaterDesc'),
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            {t('ourAmenities')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
