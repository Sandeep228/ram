import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    rooms: 'Rooms',
    amenities: 'Amenities',
    contact: 'Contact',
    welcome: 'Welcome to Village Guest House',
    welcomeSubtitle: 'Experience authentic village hospitality in the heart of rural India',
    bookNow: 'Book Now',
    learnMore: 'Learn More',
    aboutTitle: 'About Our Guest House',
    aboutDesc1: 'Nestled in the serene countryside, our guest house offers a perfect escape from city life. Experience traditional village living with modern comforts.',
    aboutDesc2: 'We pride ourselves on providing warm hospitality, home-cooked meals, and an authentic glimpse into rural Indian culture. Our family has been welcoming guests for generations.',
    ourRooms: 'Our Rooms',
    roomsDesc: 'Comfortable and clean accommodations with a rustic charm',
    deluxeRoom: 'Deluxe Room',
    deluxeDesc: 'Spacious room with attached bathroom and village views',
    standardRoom: 'Standard Room',
    standardDesc: 'Cozy room with all basic amenities',
    familyRoom: 'Family Room',
    familyDesc: 'Large room perfect for families with children',
    ourAmenities: 'Our Amenities',
    homeCooked: 'Home-Cooked Meals',
    homeCookedDesc: 'Traditional village cuisine made with fresh local ingredients',
    wifi: 'Free WiFi',
    wifiDesc: 'Stay connected with complimentary internet access',
    parking: 'Free Parking',
    parkingDesc: 'Ample parking space for your vehicles',
    guided: 'Guided Village Tours',
    guidedDesc: 'Explore the village with our knowledgeable local guides',
    garden: 'Garden Area',
    gardenDesc: 'Relax in our beautiful traditional garden',
    hotWater: '24/7 Hot Water',
    hotWaterDesc: 'Round-the-clock hot water facility',
    getInTouch: 'Get In Touch',
    contactDesc: 'We would love to hear from you and help plan your village stay',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    addressValue: 'Village Guest House, Main Road, Village Name, District, State - 123456',
    rights: 'All rights reserved.',
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    rooms: 'कमरे',
    amenities: 'सुविधाएं',
    contact: 'संपर्क',
    welcome: 'गाँव गेस्ट हाउस में आपका स्वागत है',
    welcomeSubtitle: 'ग्रामीण भारत के दिल में प्रामाणिक गाँव की मेहमाननवाजी का अनुभव करें',
    bookNow: 'अभी बुक करें',
    learnMore: 'और जानें',
    aboutTitle: 'हमारे गेस्ट हाउस के बारे में',
    aboutDesc1: 'शांत ग्रामीण इलाके में बसा, हमारा गेस्ट हाउस शहर के जीवन से एक आदर्श पलायन प्रदान करता है। आधुनिक सुविधाओं के साथ पारंपरिक गाँव के जीवन का अनुभव करें।',
    aboutDesc2: 'हम गर्मजोशी से स्वागत, घर का बना खाना और ग्रामीण भारतीय संस्कृति की प्रामाणिक झलक प्रदान करने पर गर्व करते हैं। हमारा परिवार पीढ़ियों से मेहमानों का स्वागत कर रहा है।',
    ourRooms: 'हमारे कमरे',
    roomsDesc: 'देहाती आकर्षण के साथ आरामदायक और स्वच्छ आवास',
    deluxeRoom: 'डीलक्स रूम',
    deluxeDesc: 'अटैच्ड बाथरूम और गाँव के दृश्यों के साथ विशाल कमरा',
    standardRoom: 'स्टैंडर्ड रूम',
    standardDesc: 'सभी बुनियादी सुविधाओं के साथ आरामदायक कमरा',
    familyRoom: 'फैमिली रूम',
    familyDesc: 'बच्चों के साथ परिवारों के लिए बड़ा कमरा',
    ourAmenities: 'हमारी सुविधाएं',
    homeCooked: 'घर का बना खाना',
    homeCookedDesc: 'ताजा स्थानीय सामग्री से बना पारंपरिक गाँव का भोजन',
    wifi: 'फ्री वाईफाई',
    wifiDesc: 'मुफ्त इंटरनेट एक्सेस के साथ जुड़े रहें',
    parking: 'फ्री पार्किंग',
    parkingDesc: 'आपके वाहनों के लिए पर्याप्त पार्किंग स्थान',
    guided: 'गाइडेड गाँव टूर',
    guidedDesc: 'हमारे जानकार स्थानीय गाइड के साथ गाँव का अन्वेषण करें',
    garden: 'बगीचा क्षेत्र',
    gardenDesc: 'हमारे सुंदर पारंपरिक बगीचे में आराम करें',
    hotWater: '24/7 गर्म पानी',
    hotWaterDesc: 'चौबीसों घंटे गर्म पानी की सुविधा',
    getInTouch: 'संपर्क में रहें',
    contactDesc: 'हम आपसे सुनना पसंद करेंगे और आपके गाँव के प्रवास की योजना बनाने में मदद करेंगे',
    phone: 'फोन',
    email: 'ईमेल',
    address: 'पता',
    addressValue: 'विलेज गेस्ट हाउस, मेन रोड, गाँव का नाम, जिला, राज्य - 123456',
    rights: 'सर्वाधिकार सुरक्षित।',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
