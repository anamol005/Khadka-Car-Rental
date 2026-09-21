import { createContext, useContext } from "react";

export const LangContext = createContext({
  lang: "en",
  setLang: () => {},
});

export const useLang = () => useContext(LangContext);

export const TEL_LINK = "tel:+9779763743940";
export const WA_NUMBER = "9779802759592";

export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const FB_LINK = "https://www.facebook.com/sitaram.khadka.161";

export const IMG = {
  hero: "/images/hero-car.webp",
  side: "/images/car-side.webp",
  interior: "/images/car-interior.webp",
  nepal: "/images/nepal-road.webp",
};

export const translations = {
  en: {
    brand: "Khadka Car Rental Service",
    brandShort: "KHADKA CAR RENTAL",

    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      vehicle: "Vehicle",
      destinations: "Destinations",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      book: "Book a Trip",
    },

    hero: {
      eyebrow: "Khadka Car Rental Service · Itahari, Nepal",

      line1: "Travel Anywhere",
      line2: "in Nepal with",
      line3: "Comfort & Confidence",

      sub: "Reliable private car service from Itahari and nearby areas. Available for airport pickup, city rides, tours, family trips, weddings, business travel and long-distance journeys across Nepal.",

      callNow: "Call Now",
      whatsappNow: "WhatsApp Now",
      quote: "Get Trip Quote",

      priceNote: "Call or WhatsApp for Price",

      pills: [
        "Travel Across Nepal",
        "Tata Curvv EV",
        "Driven by Sitaram Khadka",
        "5-Star Bharat NCAP",
      ],
    },

    marquee: [
      "ITAHARI",
      "TATA CURVV EV",
      "AIRPORT PICKUP",
      "FAMILY TRIPS",
      "LONG-DISTANCE TRAVEL",
      "ANYWHERE IN NEPAL",
      "CALL FOR PRICE",
    ],

    about: {
      eyebrow: "About Us",

      title: "Reliable Car Rental Service in Nepal",

      sub: "Khadka Car Rental Service is operated by Sitaram Khadka from Itahari, Nepal. We provide comfortable and reliable private travel for trips across Nepal.",

      chapters: [
        {
          n: "01",
          t: "Owner-Driven Service",
          d: "Trips are personally driven by Sitaram Khadka, giving customers a direct and dependable service from booking to destination.",
        },
        {
          n: "02",
          t: "Comfortable Tata Curvv EV",
          d: "Travel in a modern Tata Curvv EV with comfortable seating, air conditioning, good luggage space and a smooth electric ride.",
        },
        {
          n: "03",
          t: "From Itahari to Across Nepal",
          d: "Based in Itahari, we provide trips from Itahari and nearby areas to destinations across Nepal.",
        },
        {
          n: "04",
          t: "Simple Booking",
          d: "Call or WhatsApp directly to check availability, discuss your route and get the price for your trip.",
        },
      ],

      quote:
        "“I always try to make every journey safe, comfortable and reliable for my passengers.”",

      quoteBy: "— Sitaram Khadka, Owner & Driver",
    },

    services: {
      eyebrow: "Our Services",

      title: "Travel Services for Every Journey",

      sub: "Whether it is a short local ride or a long trip across Nepal, call or WhatsApp to check availability and price.",

      enquire: "WhatsApp for Price",

      items: [
        {
          t: "Airport Pickup & Drop",
          d: "Reliable airport pickup and drop service for Biratnagar Airport and other locations depending on your trip.",
        },
        {
          t: "City Rides",
          d: "Comfortable private rides around Itahari, Dharan, Biratnagar and nearby areas.",
        },
        {
          t: "Long-Distance Travel",
          d: "Private long-distance journeys to Kathmandu, Pokhara, Chitwan and destinations across Nepal.",
        },
        {
          t: "Nepal Tours",
          d: "Travel to popular destinations such as Pokhara, Chitwan, Lumbini, Ilam and more.",
        },
        {
          t: "Weddings & Events",
          d: "Car service for weddings, family functions and other special events.",
        },
        {
          t: "Business Travel",
          d: "Reliable transport for meetings, work trips and business travel.",
        },
        {
          t: "Family Trips",
          d: "Comfortable private travel for families with seating and luggage space for your journey.",
        },
        {
          t: "Custom Trips",
          d: "Tell us your pickup point, destination and travel plan. Call or WhatsApp to arrange your trip.",
        },
      ],
    },

    vehicle: {
      eyebrow: "Our Vehicle",

      title: "Tata Curvv EV",

      sub: "A modern electric SUV designed for comfortable city rides and long-distance travel.",

      viewExterior: "Exterior 360°",
      viewInterior: "Interior 360°",
      dragHint: "Drag to rotate and look around",

      tabSpecs: "Vehicle Details",
      tabComfort: "Comfort & Safety",

      chips: [
        "55 kWh Battery",
        "98 kW Motor",
        "~380 km Range",
        "5 Seats",
        "500 L Boot",
        "6 Airbags",
        "5-Star Bharat NCAP",
      ],

      comfort: [
        {
          t: "Comfortable Seating",
          d: "Comfortable seating for up to 5 people for local and long-distance journeys.",
        },
        {
          t: "Luggage Space",
          d: "500 litres of boot space for suitcases, bags and other travel luggage.",
        },
        {
          t: "Air-Conditioned Cabin",
          d: "A comfortable air-conditioned cabin for travel in different weather conditions.",
        },
        {
          t: "Smooth Electric Ride",
          d: "Quiet electric driving provides a smooth and comfortable travel experience.",
        },
        {
          t: "Safety Features",
          d: "6 airbags and a 5-star Bharat NCAP safety rating for added passenger safety.",
        },
      ],

      cta: "Book This Car",
    },

    destinations: {
      eyebrow: "Travel Area",

      title: "From Itahari to Anywhere in Nepal",

      sub: "Trips can start from Itahari and nearby areas such as Dharan, Biratnagar and surrounding locations.",

      note: "Call or WhatsApp to confirm your route, availability and price.",

      approx: "Popular destinations",

      custom: "Any Other Destination",

      items: [
        {
          name: "Kathmandu",
          info: "Call for trip details",
        },
        {
          name: "Pokhara",
          info: "Call for trip details",
        },
        {
          name: "Dharan",
          info: "Call for trip details",
        },
        {
          name: "Biratnagar",
          info: "Call for trip details",
        },
        {
          name: "Janakpur",
          info: "Call for trip details",
        },
        {
          name: "Chitwan",
          info: "Call for trip details",
        },
        {
          name: "Lumbini",
          info: "Call for trip details",
        },
        {
          name: "Birtamode",
          info: "Call for trip details",
        },
        {
          name: "Ilam",
          info: "Call for trip details",
        },
      ],
    },

    reviews: {
      eyebrow: "Reviews",

      title: "Customer Reviews",

      sub: "Real customer reviews will be added here soon.",

      sampleTag: "",

      shareCta: "Travelled with us? Share your experience",

      items: [],
    },

    faq: {
      eyebrow: "FAQ",

      title: "Frequently Asked Questions",

      sub: "Useful information before booking your trip.",

      items: [
        {
          q: "Do you travel outside Itahari?",
          a: "Yes. We are based in Itahari and can also start trips from nearby areas depending on availability. We provide travel to destinations across Nepal.",
        },
        {
          q: "Can I book airport pickup?",
          a: "Yes. Airport pickup and drop services are available. Call or WhatsApp with your airport, date and arrival or departure time.",
        },
        {
          q: "How do I know the price?",
          a: "The price depends on your pickup location, destination, trip duration and travel requirements. Call 9763743940 or WhatsApp 9802759592 for the price.",
        },
        {
          q: "Can I book for weddings or events?",
          a: "Yes. You can book the car for weddings, family functions and other events. Contact us early to check availability.",
        },
        {
          q: "Is the car suitable for family travel?",
          a: "Yes. The Tata Curvv EV has 5 seats, air conditioning, luggage space, 6 airbags and a 5-star Bharat NCAP safety rating.",
        },
        {
          q: "How can I contact you quickly?",
          a: "You can call 9763743940 or WhatsApp 9802759592 directly.",
        },
        {
          q: "Do you provide service anywhere in Nepal?",
          a: "Yes. Trips are available to destinations across Nepal depending on road conditions and availability.",
        },
      ],
    },

    booking: {
      eyebrow: "Booking & Enquiry",

      title: "Plan Your Trip",

      sub: "Send your trip details through WhatsApp or call us directly to check availability and price.",

      name: "Full Name",
      phone: "Phone Number",
      pickup: "Pickup Location",
      destination: "Destination",
      date: "Date",
      time: "Time",
      tripType: "Trip Type",
      passengers: "Passengers",
      message: "Message / Trip Details",

      messagePh: "Add any additional information about your trip...",

      submit: "Send Enquiry via WhatsApp",

      call: "Call Now",
      wa: "WhatsApp Now",

      successTitle: "Thank you!",

      success: "Your trip details are ready to send through WhatsApp.",

      tripTypes: [
        "Airport Transfer",
        "City Ride",
        "Long Distance",
        "Nepal Tour",
        "Wedding / Event",
        "Business Travel",
        "Family Trip",
        "Custom Trip",
      ],

      waIntro: "New Trip Enquiry — Khadka Car Rental Service",
    },

    contact: {
      eyebrow: "Contact",

      title: "Contact Us",

      sub: "Call or WhatsApp Sitaram Khadka directly for booking, availability and price.",

      callLabel: "Call for Booking",
      waLabel: "WhatsApp for Price",
      fbLabel: "Facebook",
      baseLabel: "Location",

      base: "Itahari, Sunsari, Nepal",

      availability: "Available for trips across Nepal",
    },

    footer: {
      tagline:
        "Reliable private car service from Itahari to destinations across Nepal.",

      quickLinks: "Quick Links",
      contactTitle: "Contact",

      owner: "Owner & Driver: Sitaram Khadka",

      rights: "All rights reserved.",

      madeIn: "Itahari · Nepal",
    },

    floating: {
      call: "Call",
      wa: "WhatsApp",
    },
  },

  ne: {
    brand: "खड्का कार रेन्टल सेवा",
    brandShort: "खड्का कार रेन्टल",

    nav: {
      home: "गृह",
      about: "हाम्रो बारेमा",
      services: "सेवाहरू",
      vehicle: "गाडी",
      destinations: "गन्तव्य",
      reviews: "समीक्षा",
      faq: "प्रश्नहरू",
      contact: "सम्पर्क",
      book: "यात्रा बुक गर्नुहोस्",
    },

    hero: {
      eyebrow: "खड्का कार रेन्टल सेवा · इटहरी, नेपाल",

      line1: "नेपालभरि यात्रा",
      line2: "आराम र",
      line3: "भरोसाका साथ",

      sub: "इटहरी र आसपासका क्षेत्रबाट भरपर्दो निजी कार सेवा। विमानस्थल पिकअप, शहर यात्रा, टुर, पारिवारिक यात्रा, विवाह, व्यवसायिक यात्रा र नेपालभरि लामो दूरीको यात्राका लागि उपलब्ध।",

      callNow: "अहिले कल गर्नुहोस्",
      whatsappNow: "व्हाट्सएप गर्नुहोस्",
      quote: "यात्राको मूल्य सोध्नुहोस्",

      priceNote: "मूल्यका लागि कल वा व्हाट्सएप गर्नुहोस्",

      pills: [
        "नेपालभरि यात्रा",
        "टाटा कर्भ ईभी",
        "चालक: सिताराम खड्का",
        "५-स्टार भारत NCAP",
      ],
    },

    marquee: [
      "इटहरी",
      "टाटा कर्भ ईभी",
      "विमानस्थल पिकअप",
      "पारिवारिक यात्रा",
      "लामो दूरी यात्रा",
      "नेपालभरि यात्रा",
      "मूल्यका लागि कल",
    ],

    about: {
      eyebrow: "हाम्रो बारेमा",

      title: "नेपालमा भरपर्दो कार रेन्टल सेवा",

      sub: "खड्का कार रेन्टल सेवा इटहरी, नेपालबाट सिताराम खड्काले सञ्चालन गर्नुहुन्छ। हामी नेपालभरि आरामदायी र भरपर्दो निजी यात्रा सेवा प्रदान गर्छौं।",

      chapters: [
        {
          n: "०१",
          t: "स्वयं मालिक चालक",
          d: "यात्रा सिताराम खड्का स्वयंले गर्नुहुन्छ। बुकिङदेखि गन्तव्यसम्म सिधा र भरपर्दो सेवा पाउनुहुन्छ।",
        },
        {
          n: "०२",
          t: "आरामदायी टाटा कर्भ ईभी",
          d: "आरामदायी सिट, एयर कन्डिसन, सामान राख्ने ठाउँ र सहज विद्युतीय यात्रासहितको आधुनिक टाटा कर्भ ईभी।",
        },
        {
          n: "०३",
          t: "इटहरीदेखि नेपालभरि",
          d: "इटहरीमा आधारित हाम्रो सेवा इटहरी र आसपासका क्षेत्रबाट नेपालका विभिन्न गन्तव्यसम्म उपलब्ध छ।",
        },
        {
          n: "०४",
          t: "सजिलो बुकिङ",
          d: "उपलब्धता, बाटो र मूल्य बुझ्न सीधै कल वा व्हाट्सएप गर्नुहोस्।",
        },
      ],

      quote:
        "“हरेक यात्रालाई सुरक्षित, आरामदायी र भरपर्दो बनाउने मेरो प्रयास हुन्छ।”",

      quoteBy: "— सिताराम खड्का, मालिक तथा चालक",
    },

    services: {
      eyebrow: "हाम्रा सेवाहरू",

      title: "हरेक यात्राका लागि सेवा",

      sub: "छोटो स्थानीय यात्रा होस् वा नेपालभरि लामो यात्रा, उपलब्धता र मूल्यका लागि कल वा व्हाट्सएप गर्नुहोस्।",

      enquire: "मूल्यका लागि व्हाट्सएप",

      items: [
        {
          t: "विमानस्थल पिकअप र ड्रप",
          d: "विराटनगर विमानस्थल तथा अन्य स्थानका लागि भरपर्दो पिकअप र ड्रप सेवा।",
        },
        {
          t: "शहर यात्रा",
          d: "इटहरी, धरान, विराटनगर र आसपासका क्षेत्रका लागि आरामदायी निजी यात्रा।",
        },
        {
          t: "लामो दूरी यात्रा",
          d: "काठमाडौं, पोखरा, चितवन तथा नेपालका अन्य गन्तव्यसम्म निजी लामो दूरी यात्रा।",
        },
        {
          t: "नेपाल टुर",
          d: "पोखरा, चितवन, लुम्बिनी, इलाम लगायतका स्थानमा निजी यात्रा सेवा।",
        },
        {
          t: "विवाह र कार्यक्रम",
          d: "विवाह, पारिवारिक कार्यक्रम तथा अन्य विशेष अवसरका लागि कार सेवा।",
        },
        {
          t: "व्यवसायिक यात्रा",
          d: "बैठक, काम तथा व्यवसायिक यात्राका लागि भरपर्दो सवारी सेवा।",
        },
        {
          t: "पारिवारिक यात्रा",
          d: "परिवारका लागि आरामदायी निजी यात्रा, पर्याप्त सिट र सामान राख्ने ठाउँसहित।",
        },
        {
          t: "आफ्नै योजना अनुसार यात्रा",
          d: "पिकअप स्थान, गन्तव्य र यात्रा योजना भन्नुहोस्। कल वा व्हाट्सएपबाट यात्रा मिलाउन सकिन्छ।",
        },
      ],
    },

    vehicle: {
      eyebrow: "हाम्रो गाडी",

      title: "टाटा कर्भ ईभी",

      sub: "शहर तथा लामो दूरीको आरामदायी यात्राका लागि आधुनिक विद्युतीय SUV।",

      viewExterior: "बाहिरी ३६०°",
      viewInterior: "भित्री ३६०°",
      dragHint: "घुमाएर हेर्न ड्र्याग गर्नुहोस्",

      tabSpecs: "गाडीको विवरण",
      tabComfort: "आराम र सुरक्षा",

      chips: [
        "५५ kWh ब्याट्री",
        "९८ kW मोटर",
        "~३८० किमी रेञ्ज",
        "५ सिट",
        "५०० लिटर बुट",
        "६ एयरब्याग",
        "५-स्टार भारत NCAP",
      ],

      comfort: [
        {
          t: "आरामदायी सिट",
          d: "स्थानीय तथा लामो यात्राका लागि ५ जनासम्म आरामदायी सिट।",
        },
        {
          t: "सामान राख्ने ठाउँ",
          d: "सुटकेस र अन्य यात्रा सामानका लागि ५०० लिटर बुट स्पेस।",
        },
        {
          t: "एयर कन्डिसन",
          d: "विभिन्न मौसममा आरामदायी यात्राका लागि एयर कन्डिसन भएको केबिन।",
        },
        {
          t: "सहज विद्युतीय यात्रा",
          d: "शान्त र सहज विद्युतीय ड्राइभले यात्रालाई आरामदायी बनाउँछ।",
        },
        {
          t: "सुरक्षा",
          d: "६ एयरब्याग र ५-स्टार भारत NCAP सुरक्षा रेटिङ।",
        },
      ],

      cta: "यो गाडी बुक गर्नुहोस्",
    },

    destinations: {
      eyebrow: "सेवा क्षेत्र",

      title: "इटहरीदेखि नेपालभरि",

      sub: "इटहरी तथा धरान, विराटनगर लगायत आसपासका क्षेत्रबाट यात्रा सुरु गर्न सकिन्छ।",

      note: "बाटो, उपलब्धता र मूल्यका लागि कल वा व्हाट्सएप गर्नुहोस्।",

      approx: "लोकप्रिय गन्तव्य",

      custom: "अन्य कुनै गन्तव्य",

      items: [
        {
          name: "काठमाडौं",
          info: "यात्रा विवरणका लागि कल गर्नुहोस्",
        },
        {
          name: "पोखरा",
          info: "यात्रा विवरणका लागि कल गर्नुहोस्",
        },
        {
          name: "धरान",
          info: "यात्रा विवरणका लागि कल गर्नुहोस्",
        },
        {
          name: "विराटनगर",
          info: "यात्रा विवरणका लागि कल गर्नुहोस्",
        },
        {
          name: "जनकपुर",
          info: "यात्रा विवरणका लागि कल गर्नुहोस्",
        },
        {
          name: "चितवन",
          info: "यात्रा विवरणका लागि कल गर्नुहोस्",
        },
        {
          name: "लुम्बिनी",
          info: "यात्रा विवरणका लागि कल गर्नुहोस्",
        },
        {
          name: "विर्तामोड",
          info: "यात्रा विवरणका लागि कल गर्नुहोस्",
        },
        {
          name: "इलाम",
          info: "यात्रा विवरणका लागि कल गर्नुहोस्",
        },
      ],
    },

    reviews: {
      eyebrow: "समीक्षा",

      title: "ग्राहक समीक्षा",

      sub: "वास्तविक ग्राहक समीक्षा चाँडै यहाँ राखिनेछ।",

      sampleTag: "",

      shareCta: "हामीसँग यात्रा गर्नुभयो? आफ्नो अनुभव साझा गर्नुहोस्",

      items: [],
    },

    faq: {
      eyebrow: "प्रश्नहरू",

      title: "धेरै सोधिने प्रश्नहरू",

      sub: "यात्रा बुक गर्नुअघि उपयोगी जानकारी।",

      items: [
        {
          q: "के इटहरी बाहिरबाट पनि यात्रा गर्न सकिन्छ?",
          a: "हो। हाम्रो आधार इटहरी हो तर उपलब्धताअनुसार आसपासका क्षेत्रबाट पनि यात्रा सुरु गर्न सकिन्छ। नेपालका विभिन्न गन्तव्यसम्म सेवा उपलब्ध छ।",
        },
        {
          q: "के विमानस्थल पिकअप बुक गर्न सकिन्छ?",
          a: "हो। विमानस्थल पिकअप र ड्रप सेवा उपलब्ध छ। विमानस्थल, मिति र समय कल वा व्हाट्सएपमा पठाउनुहोस्।",
        },
        {
          q: "मूल्य कसरी थाहा पाउने?",
          a: "मूल्य पिकअप स्थान, गन्तव्य, यात्राको अवधि र आवश्यकताअनुसार फरक हुन्छ। ९७६३७४३९४० मा कल वा ९८०२७५९५९२ मा व्हाट्सएप गर्नुहोस्।",
        },
        {
          q: "के विवाह वा कार्यक्रमका लागि बुक गर्न सकिन्छ?",
          a: "हो। विवाह, पारिवारिक कार्यक्रम र अन्य विशेष अवसरका लागि गाडी बुक गर्न सकिन्छ।",
        },
        {
          q: "के गाडी पारिवारिक यात्राका लागि उपयुक्त छ?",
          a: "हो। टाटा कर्भ ईभीमा ५ सिट, एयर कन्डिसन, सामान राख्ने ठाउँ, ६ एयरब्याग र ५-स्टार भारत NCAP सुरक्षा रेटिङ छ।",
        },
        {
          q: "छिटो सम्पर्क कसरी गर्ने?",
          a: "९७६३७४३९४० मा कल वा ९८०२७५९५९२ मा व्हाट्सएप गर्नुहोस्।",
        },
        {
          q: "के नेपालभरि यात्रा सेवा उपलब्ध छ?",
          a: "हो। सडक अवस्था र उपलब्धताअनुसार नेपालका विभिन्न गन्तव्यसम्म यात्रा सेवा उपलब्ध छ।",
        },
      ],
    },

    booking: {
      eyebrow: "बुकिङ र सोधपुछ",

      title: "आफ्नो यात्रा योजना गर्नुहोस्",

      sub: "यात्राको विवरण व्हाट्सएपबाट पठाउनुहोस् वा उपलब्धता र मूल्यका लागि सीधै कल गर्नुहोस्।",

      name: "पूरा नाम",
      phone: "फोन नम्बर",
      pickup: "पिकअप स्थान",
      destination: "गन्तव्य",
      date: "मिति",
      time: "समय",
      tripType: "यात्रा प्रकार",
      passengers: "यात्रु संख्या",
      message: "सन्देश / यात्रा विवरण",

      messagePh: "यात्राबारे थप जानकारी लेख्नुहोस्...",

      submit: "व्हाट्सएपबाट सोधपुछ पठाउनुहोस्",

      call: "अहिले कल गर्नुहोस्",
      wa: "व्हाट्सएप गर्नुहोस्",

      successTitle: "धन्यवाद!",

      success: "तपाईंको यात्रा विवरण व्हाट्सएपबाट पठाउन तयार छ।",

      tripTypes: [
        "विमानस्थल यात्रा",
        "शहर यात्रा",
        "लामो दूरी",
        "नेपाल टुर",
        "विवाह / कार्यक्रम",
        "व्यवसायिक यात्रा",
        "पारिवारिक यात्रा",
        "अन्य यात्रा",
      ],

      waIntro: "नयाँ यात्रा सोधपुछ — खड्का कार रेन्टल सेवा",
    },

    contact: {
      eyebrow: "सम्पर्क",

      title: "हामीलाई सम्पर्क गर्नुहोस्",

      sub: "बुकिङ, उपलब्धता र मूल्यका लागि सिताराम खड्कालाई सीधै कल वा व्हाट्सएप गर्नुहोस्।",

      callLabel: "बुकिङका लागि कल",
      waLabel: "मूल्यका लागि व्हाट्सएप",
      fbLabel: "फेसबुक",
      baseLabel: "स्थान",

      base: "इटहरी, सुनसरी, नेपाल",

      availability: "नेपालभरि यात्राका लागि उपलब्ध",
    },

    footer: {
      tagline: "इटहरीदेखि नेपालका विभिन्न गन्तव्यसम्म भरपर्दो निजी कार सेवा।",

      quickLinks: "द्रुत लिङ्कहरू",

      contactTitle: "सम्पर्क",

      owner: "मालिक तथा चालक: सिताराम खड्का",

      rights: "सर्वाधिकार सुरक्षित।",

      madeIn: "इटहरी · नेपाल",
    },

    floating: {
      call: "कल",
      wa: "व्हाट्सएप",
    },
  },
};
