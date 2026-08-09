export type City = {
  id: number;
  name: string;
};

export type Country = {
  id: number;
  name: string;
  cities: City[];
};

const countries: Country[] = [
  {
    id: 1,
    name: "Egypt",
    cities: [
      {
        id: 101,
        name: "Cairo",
      },
      {
        id: 102,
        name: "Alexandria",
      },
      {
        id: 103,
        name: "Giza",
      },
      {
        id: 104,
        name: "Port Said",
      },
      {
        id: 105,
        name: "Suez",
      },
      {
        id: 106,
        name: "Mansoura",
      },
      {
        id: 107,
        name: "Tanta",
      },
      {
        id: 108,
        name: "Zagazig",
      },
      {
        id: 109,
        name: "Damietta",
      },
      {
        id: 110,
        name: "Fayoum",
      },
      {
        id: 111,
        name: "Beni Suef",
      },
      {
        id: 112,
        name: "Minya",
      },
      {
        id: 113,
        name: "Asyut",
      },
      {
        id: 114,
        name: "Sohag",
      },
      {
        id: 115,
        name: "Qena",
      },
      {
        id: 116,
        name: "Luxor",
      },
      {
        id: 117,
        name: "Aswan",
      },
      {
        id: 118,
        name: "Hurghada",
      },
      {
        id: 119,
        name: "Sharm El Sheikh",
      },
      {
        id: 120,
        name: "Marsa Matruh",
      },
      {
        id: 121,
        name: "Arish",
      },
    ],
  },
  {
    id: 2,
    name: "Saudi Arabia",
    cities: [
      {
        id: 201,
        name: "Riyadh",
      },
      {
        id: 202,
        name: "Jeddah",
      },
      {
        id: 203,
        name: "Mecca",
      },
      {
        id: 204,
        name: "Medina",
      },
      {
        id: 205,
        name: "Dammam",
      },
      {
        id: 206,
        name: "Khobar",
      },
      {
        id: 207,
        name: "Taif",
      },
      {
        id: 208,
        name: "Tabuk",
      },
      {
        id: 209,
        name: "Abha",
      },
      {
        id: 210,
        name: "Jazan",
      },
      {
        id: 211,
        name: "Hail",
      },
      {
        id: 212,
        name: "Najran",
      },
      {
        id: 213,
        name: "Al Hofuf",
      },
      {
        id: 214,
        name: "Yanbu",
      },
      {
        id: 215,
        name: "Jubail",
      },
    ],
  },
  {
    id: 3,
    name: "United Arab Emirates",
    cities: [
      {
        id: 301,
        name: "Abu Dhabi",
      },
      {
        id: 302,
        name: "Dubai",
      },
      {
        id: 303,
        name: "Sharjah",
      },
      {
        id: 304,
        name: "Ajman",
      },
      {
        id: 305,
        name: "Al Ain",
      },
      {
        id: 306,
        name: "Ras Al Khaimah",
      },
      {
        id: 307,
        name: "Fujairah",
      },
      {
        id: 308,
        name: "Umm Al Quwain",
      },
      {
        id: 309,
        name: "Khor Fakkan",
      },
      {
        id: 310,
        name: "Dibba Al-Fujairah",
      },
    ],
  },
  {
    id: 4,
    name: "Jordan",
    cities: [
      {
        id: 401,
        name: "Amman",
      },
      {
        id: 402,
        name: "Zarqa",
      },
      {
        id: 403,
        name: "Irbid",
      },
      {
        id: 404,
        name: "Aqaba",
      },
      {
        id: 405,
        name: "Madaba",
      },
      {
        id: 406,
        name: "Salt",
      },
      {
        id: 407,
        name: "Jerash",
      },
      {
        id: 408,
        name: "Karak",
      },
      {
        id: 409,
        name: "Mafraq",
      },
      {
        id: 410,
        name: "Tafilah",
      },
    ],
  },
  {
    id: 5,
    name: "Lebanon",
    cities: [
      {
        id: 501,
        name: "Beirut",
      },
      {
        id: 502,
        name: "Tripoli",
      },
      {
        id: 503,
        name: "Sidon",
      },
      {
        id: 504,
        name: "Tyre",
      },
      {
        id: 505,
        name: "Zahle",
      },
      {
        id: 506,
        name: "Jounieh",
      },
      {
        id: 507,
        name: "Byblos",
      },
      {
        id: 508,
        name: "Baalbek",
      },
      {
        id: 509,
        name: "Nabatieh",
      },
      {
        id: 510,
        name: "Batroun",
      },
    ],
  },
];

export default countries;
