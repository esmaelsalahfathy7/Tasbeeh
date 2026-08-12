export type City = {
  id: number;
  name: string;
  nameAr: string;
};

export type Country = {
  id: number;
  name: string;
  nameAr: string;
  cities: City[];
};

const countries: Country[] = [
  {
    id: 1,
    name: "Egypt",
    nameAr: "مصر",
    cities: [
      {
        id: 101,
        name: "Cairo",
        nameAr: "القاهرة",
      },
      {
        id: 102,
        name: "Alexandria",
        nameAr: "الإسكندرية",
      },
      {
        id: 103,
        name: "Giza",
        nameAr: "الجيزة",
      },
      {
        id: 104,
        name: "Port Said",
        nameAr: "بورسعيد",
      },
      {
        id: 105,
        name: "Suez",
        nameAr: "السويس",
      },
      {
        id: 106,
        name: "Mansoura",
        nameAr: "المنصورة",
      },
      {
        id: 107,
        name: "Tanta",
        nameAr: "طنطا",
      },
      {
        id: 108,
        name: "Zagazig",
        nameAr: "الزقازيق",
      },
      {
        id: 109,
        name: "Damietta",
        nameAr: "دمياط",
      },
      {
        id: 110,
        name: "Fayoum",
        nameAr: "الفيوم",
      },
      {
        id: 111,
        name: "Beni Suef",
        nameAr: "بني سويف",
      },
      {
        id: 112,
        name: "Minya",
        nameAr: "المنيا",
      },
      {
        id: 113,
        name: "Asyut",
        nameAr: "أسيوط",
      },
      {
        id: 114,
        name: "Sohag",
        nameAr: "سوهاج",
      },
      {
        id: 115,
        name: "Qena",
        nameAr: "قنا",
      },
      {
        id: 116,
        name: "Luxor",
        nameAr: "الأقصر",
      },
      {
        id: 117,
        name: "Aswan",
        nameAr: "أسوان",
      },
      {
        id: 118,
        name: "Hurghada",
        nameAr: "الغردقة",
      },
      {
        id: 119,
        name: "Sharm El Sheikh",
        nameAr: "شرم الشيخ",
      },
      {
        id: 120,
        name: "Marsa Matruh",
        nameAr: "مرسى مطروح",
      },
      {
        id: 121,
        name: "Arish",
        nameAr: "العريش",
      },
    ],
  },

  {
    id: 2,
    name: "Saudi Arabia",
    nameAr: "السعودية",
    cities: [
      {
        id: 201,
        name: "Riyadh",
        nameAr: "الرياض",
      },
      {
        id: 202,
        name: "Jeddah",
        nameAr: "جدة",
      },
      {
        id: 203,
        name: "Mecca",
        nameAr: "مكة المكرمة",
      },
      {
        id: 204,
        name: "Medina",
        nameAr: "المدينة المنورة",
      },
      {
        id: 205,
        name: "Dammam",
        nameAr: "الدمام",
      },
      {
        id: 206,
        name: "Khobar",
        nameAr: "الخبر",
      },
      {
        id: 207,
        name: "Taif",
        nameAr: "الطائف",
      },
      {
        id: 208,
        name: "Tabuk",
        nameAr: "تبوك",
      },
      {
        id: 209,
        name: "Abha",
        nameAr: "أبها",
      },
      {
        id: 210,
        name: "Jazan",
        nameAr: "جازان",
      },
      {
        id: 211,
        name: "Hail",
        nameAr: "حائل",
      },
      {
        id: 212,
        name: "Najran",
        nameAr: "نجران",
      },
      {
        id: 213,
        name: "Al Hofuf",
        nameAr: "الهفوف",
      },
      {
        id: 214,
        name: "Yanbu",
        nameAr: "ينبع",
      },
      {
        id: 215,
        name: "Jubail",
        nameAr: "الجبيل",
      },
    ],
  },

  {
    id: 3,
    name: "United Arab Emirates",
    nameAr: "الإمارات العربية المتحدة",
    cities: [
      {
        id: 301,
        name: "Abu Dhabi",
        nameAr: "أبو ظبي",
      },
      {
        id: 302,
        name: "Dubai",
        nameAr: "دبي",
      },
      {
        id: 303,
        name: "Sharjah",
        nameAr: "الشارقة",
      },
      {
        id: 304,
        name: "Ajman",
        nameAr: "عجمان",
      },
      {
        id: 305,
        name: "Al Ain",
        nameAr: "العين",
      },
      {
        id: 306,
        name: "Ras Al Khaimah",
        nameAr: "رأس الخيمة",
      },
      {
        id: 307,
        name: "Fujairah",
        nameAr: "الفجيرة",
      },
      {
        id: 308,
        name: "Umm Al Quwain",
        nameAr: "أم القيوين",
      },
      {
        id: 309,
        name: "Khor Fakkan",
        nameAr: "خورفكان",
      },
      {
        id: 310,
        name: "Dibba Al-Fujairah",
        nameAr: "دبا الفجيرة",
      },
    ],
  },

  {
    id: 4,
    name: "Jordan",
    nameAr: "الأردن",
    cities: [
      {
        id: 401,
        name: "Amman",
        nameAr: "عمّان",
      },
      {
        id: 402,
        name: "Zarqa",
        nameAr: "الزرقاء",
      },
      {
        id: 403,
        name: "Irbid",
        nameAr: "إربد",
      },
      {
        id: 404,
        name: "Aqaba",
        nameAr: "العقبة",
      },
      {
        id: 405,
        name: "Madaba",
        nameAr: "مادبا",
      },
      {
        id: 406,
        name: "Salt",
        nameAr: "السلط",
      },
      {
        id: 407,
        name: "Jerash",
        nameAr: "جرش",
      },
      {
        id: 408,
        name: "Karak",
        nameAr: "الكرك",
      },
      {
        id: 409,
        name: "Mafraq",
        nameAr: "المفرق",
      },
      {
        id: 410,
        name: "Tafilah",
        nameAr: "الطفيلة",
      },
    ],
  },

  {
    id: 5,
    name: "Lebanon",
    nameAr: "لبنان",
    cities: [
      {
        id: 501,
        name: "Beirut",
        nameAr: "بيروت",
      },
      {
        id: 502,
        name: "Tripoli",
        nameAr: "طرابلس",
      },
      {
        id: 503,
        name: "Sidon",
        nameAr: "صيدا",
      },
      {
        id: 504,
        name: "Tyre",
        nameAr: "صور",
      },
      {
        id: 505,
        name: "Zahle",
        nameAr: "زحلة",
      },
      {
        id: 506,
        name: "Jounieh",
        nameAr: "جونية",
      },
      {
        id: 507,
        name: "Byblos",
        nameAr: "جبيل",
      },
      {
        id: 508,
        name: "Baalbek",
        nameAr: "بعلبك",
      },
      {
        id: 509,
        name: "Nabatieh",
        nameAr: "النبطية",
      },
      {
        id: 510,
        name: "Batroun",
        nameAr: "البترون",
      },
    ],
  },
];

export default countries;
