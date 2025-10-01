import { BedDouble } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Rooms() {
  const { t } = useLanguage();

  const rooms = [
    {
      title: t('deluxeRoom'),
      description: t('deluxeDesc'),
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: t('standardRoom'),
      description: t('standardDesc'),
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: t('familyRoom'),
      description: t('familyDesc'),
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            {t('ourRooms')}
          </h2>
          <p className="text-lg text-gray-600">{t('roomsDesc')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <BedDouble className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{room.title}</h3>
                <p className="text-gray-600">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
