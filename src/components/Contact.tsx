import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            {t('getInTouch')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('contactDesc')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/1876620/pexels-photo-1876620.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Village guest house"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{t('phone')}</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 98765 43211</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{t('email')}</h3>
                <p className="text-gray-600">info@villageguesthouse.com</p>
                <p className="text-gray-600">bookings@villageguesthouse.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{t('address')}</h3>
                <p className="text-gray-600">{t('addressValue')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
