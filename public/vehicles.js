const vehicles = [
  {
    id: 1,
    number: "AA 34 BB",
    brand: "Volvo",
    model: "FH16",
    year: 2020,
    color: "Black",
    vin: "YV2A2245XCB001234",
    imageUrl:
      "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-fh16-cgi-exterior-1?qlt=82&wid=1024&ts=1705310176284&dpr=off&fit=constrain&fmt=png-alpha",
    euroClass: "Euro 6",
    mileage: 148460,
    status: "active",

    documents: [
      {
        id: "d1",
        title: "Insurance Policy",
        number: "N1234-0932",
        validFrom: "2024-12-20",
        validTo: "2026-04-13",
        status: "active",
      },
      {
        id: "d2",
        title: "Leasing Contract",
        number: "LC-88921",
        validFrom: "2023-01-10",
        validTo: "2025-05-01",
        status: "expired",
      },
    ],

    telematics: {
      health: 75,
      fuelLevel: 30,
      battery: 90,
      mileage: 148460,
    },

    history: [
      {
        id: "h1",
        type: "updated",
        title: "Truck updated",
        date: "2026-02-20T10:24:00",
        user: "Andrii Ivanov",
        userImage: 'https://w7.pngwing.com/pngs/842/134/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png',
        email: 'andriivanov@gmail.com'
      },
      {
        id: "h2",
        type: "removed",
        title: "Truck removed",
        date: "2026-02-19",
        user: "Andrii Ivanov",
        userImage: 'https://w7.pngwing.com/pngs/842/134/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png',
        email: 'andriivanov@gmail.com'
      },
    ],
    gallery: [
  { id: "g1", size: "big", url: "https://s3-eu-west-1.amazonaws.com/lacuna2/commercialmotor/media/IMG_123920588506.jpg", title: "Front view" },
  { id: "g2", size: "big", url: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-trucks-59A1644-PR?wid=1024", title: "Interior" },
  { id: "g3", size: "small", url: "https://blog.truckscout24.com/de/wp-content/uploads/2013/10/Volvo-FH16-750-19-fotoshowImageNew-58e110e5-80060.jpg", title: "Side view" },
  { id: "g4", size: "small", url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Volvo_FH16_750_Globetrotter_XL_-_Mapima_-_Kysuck%C3%A9_Nov%C3%A9_Mesto%2C_SK.jpg", title: "Night view" },
  { id: "g5", size: "small", url: "https://imgcdn.oto.com/large/gallery/exterior/122/2087/volvo-fh16-front-angle-low-view-228552.jpg", title: "Night view" },
  { id: "g6", size: "small", url: "https://sctb-prod-media.s3.amazonaws.com/filer_public_thumbnails/filer_public/91/89/9189c89d-15fe-4e6f-8078-0454f5fddb89/500x300-volvo-fh16-780-heavy-loads.jpg__500x300_q85_subsampling-2.jpg", title: "Night view" }
]
  },

  {
    id: 2,
    number: "AB 12 RS",
    brand: "Mercedes-Benz",
    model: "Actros",
    imageUrl: "../vehicles/actrosMB.png",
    year: 2018,
    color: "White",
    vin: "WDB96340310293847",
    euroClass: "Euro 5",
    mileage: 312000,
    status: "inactive",

    documents: [
      {
        id: "d1",
        title: "Insurance Policy",
        number: "MB-77821",
        validFrom: "2023-06-01",
        validTo: "2024-06-01",
        status: "expired",
      },
      {
        id: "d2",
        title: "Leasing Contract",
        number: "LC-88921",
        validFrom: "2023-01-10",
        validTo: "2025-05-01",
        status: "expired",
      },
    ],

    telematics: {
      health: 40,
      fuelLevel: 30,
      battery: 50,
      mileage: 312000,
    },

    history: [
      {
        id: "h1",
        type: "removed",
        title: "Truck removed",
        date: "2026-02-19",
        user: "Andrii Ivanov",
        userImage: 'https://w7.pngwing.com/pngs/842/134/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png',
        email: 'andriivanov@gmail.com'
      },
    ],
    gallery: [
  { id: "g1", size: "big", url: "https://upload.wikimedia.org/wikipedia/commons/7/78/Transportplan_Mercedes-Benz_Actros_%28cropped%29.jpg", title: "Front view" },
  { id: "g2", size: "big", url: "https://exportandfreight.com/wp-content/uploads/2020/01/Mercedes-Benz-Actros-Is-2020-International-Truck-Of-The-Year.jpg", title: "Interior" },
  { id: "g3", size: "small", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/311898/hlv/original.jpg", title: "Front detail" },
  { id: "g4", size: "small", url: "https://transport.sk/wp-content/uploads/2020/09/aea.jpg", title: "Night view" },
  { id: "g5", size: "small", url: "https://www.classtrucks.com/wp-content/uploads/2025/01/MercedesBenzDSC09312-Enhanced-NR-Edit-4-scaled-1.jpg", title: "Night view" },
  { id: "g6", size: "small", url: "https://bigrigs.com.au/wp-content/uploads/2023/05/Actros-limited-edition-25-year-anniversary.jpg", title: "Night view" },
]
  },

  {
    id: 3,
    number: "AB 44 KM",
    brand: "Scania",
    model: "R450",
    imageUrl: "../vehicles/scania.png",
    year: 2021,
    color: "Blue",
    vin: "YS2R4X20005566778",
    euroClass: "Euro 6",
    mileage: 98000,
    status: "active",

    documents: [
      {
        id: "d1",
        title: "Insurance Policy",
        number: "SC-12345",
        validFrom: "2024-01-01",
        validTo: "2026-04-01",
        status: "active",
      },
      {
        id: "d2",
        title: "Leasing Contract",
        number: "LC-88921",
        validFrom: "2023-01-10",
        validTo: "2025-05-01",
        status: "expired",
      },
    ],

    telematics: {
      health: 90,
      fuelLevel: 80,
      battery: 95,
      mileage: 98000,
    },

    history: [
      {
        id: "h1",
        type: "added",
        title: "Truck added",
        date: "2026-02-18",
        user: "Andrii Ivanov",
        userImage: 'https://w7.pngwing.com/pngs/842/134/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png',
        email: 'andriivanov@gmail.com'
      },
    ],
     gallery: [
  { id: "g1", size: "big", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/305726/hrv/original.jpg", title: "Front view" },
  { id: "g2", size: "big", url: "https://img1.eurotransport.de/Scania-R-450-La-Topline-jsonLd1x1-914c84b2-242417.jpg", title: "Interior" },
  { id: "g3", size: "small", url: "https://www.bigwheels.my/wp-content/uploads/2018/06/scania-scaled.jpg", title: "Front detail" },
  { id: "g4", size: "small", url: "https://www.truck1.sk/img/xxl/1249/Tahac-Scania-R450-Streamline-Topline-Retarder-Standklima-ACC-Nemecko_1249_7719476242355.jpg", title: "Night view" },
  { id: "g5", size: "small", url: "https://ireland.apollo.olxcdn.com/v1/files/rw20pazg67933-UA/image;s=1813x1360", title: "Night view" },
  { id: "g6", size: "small", url: "https://dnge9sb91helb.cloudfront.net/imagetilewm/product/325c6bff/scania-r450,482e3e70-1.jpg", title: "Night view" },
]
   
  },

  {
    id: 4,
    number: "AB 33 XB",
    brand: "DAF",
    model: "XF",
    imageUrl: "../vehicles/DAF.png",
    year: 2019,
    color: "Red",
    vin: "XLRTE47MS0E123456",
    euroClass: "Euro 6",
    mileage: 210500,
    status: "active",

    documents: [
      {
        id: "d1",
        title: "Insurance Policy",
        number: "DAF-9988",
        validFrom: "2024-02-01",
        validTo: "2025-02-01",
        status: "expired",
      },
      {
        id: "d2",
        title: "Leasing Contract",
        number: "LC-88921",
        validFrom: "2023-01-10",
        validTo: "2025-05-01",
        status: "expired",
      },
    ],

    telematics: {
      health: 65,
      fuelLevel: 55,
      battery: 80,
      mileage: 210500,
    },

    history: [
      {
        id: "h1",
        type: "removed",
        title: "Truck removed",
        date: "2026-02-20",
        user: "Andrii Ivanov",
        userImage: 'https://w7.pngwing.com/pngs/842/134/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png',
        email: 'andriivanov@gmail.com'
      },
    ],
    gallery: [
  { id: "g1", size: "big", url: "https://www.daftrucks.sk/-/media/images/press-releases/awards/2023/new-generation-daf-xf-450-awarded-green-truck-2023.jpg?rev=12a53c122b264b3f9b196e22d0ee2f99", title: "Front view" },
  { id: "g2", size: "big", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DAF_-_XF.JPG/1280px-DAF_-_XF.JPG", title: "Interior" },
  { id: "g3", size: "small", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/303258/hlv/original.jpg", title: "Front detail" },
  { id: "g4", size: "small", url: "https://img.tipcars.com/fotky_velke/35127246_1/1741771050/E/daf-xf-480-4x2.jpg", title: "Night view" },
  { id: "g5", size: "small", url: "https://www.natroad.com.au/wp-content/uploads/2023/04/230214_DAF_XF350_42.jpg.webp", title: "Night view" },
  { id: "g6", size: "small", url: "https://res.cloudinary.com/daf-usedtrucks/image/upload/f_auto,c_limit,w_3840,q_auto:best/assets/HICppmNhxEFRvRSWKGnUb", title: "Night view" },
]
   
  },

  {
    id: 5,
    number: "AB 81 YT",
    brand: "MAN",
    model: "TGX",
    imageUrl: "../vehicles/mantgx.png",
    year: 2020,
    color: "Gray",
    vin: "WMA06XZZ7LM123456",
    euroClass: "Euro 6",
    mileage: 175000,
    status: "maintenance",

    documents: [
      {
        id: "d1",
        title: "Insurance Policy",
        number: "N1234-0932",
        validFrom: "2024-12-20",
        validTo: "2026-04-13",
        status: "active",
      },
      {
        id: "d2",
        title: "Leasing Contract",
        number: "LC-88921",
        validFrom: "2023-01-10",
        validTo: "2025-05-01",
        status: "expired",
      },
    ],
    telematics: {
      health: 50,
      fuelLevel: 45,
      battery: 60,
      mileage: 175000,
    },
    history: [
      {
        id: "h1",
        type: "added",
        title: "Truck added",
        date: "2026-02-18",
        user: "Andrii Ivanov",
        userImage: 'https://w7.pngwing.com/pngs/842/134/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png',

        email: 'andriivanov@gmail.com'
      },
    ],
    gallery: [
  { id: "g1", size: "big", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/307806/hlb/original.jpg", title: "Front view" },
  { id: "g2", size: "big", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/299266/hrv/original.jpg", title: "Interior" },
  { id: "g3", size: "small", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/302174/hlv/original.jpg", title: "Front detail" },
  { id: "g4", size: "small", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/315294/hlv/original.jpg", title: "Night view" },
  { id: "g5", size: "small", url: "https://logist.today/wp-content/uploads/2021/01/1920_p-tgx-eot-new-tg-etc-ett-1.jpg", title: "Night view" },
  { id: "g6", size: "small", url: "https://mantruck.com.ua/wp-content/uploads/2025/02/f1d30330-d32e-437b-8dc3-1e8cc446024f-768x432.jpg", title: "Night view" },
]
  },

  {
    id: 6,
    number: "BC 77 OP",
    brand: "Iveco",
    model: "Stralis",
    imageUrl: "../vehicles/iveco.png",
    year: 2017,
    color: "White",
    vin: "ZCFA71TJXH1234567",
    euroClass: "Euro 5",
    mileage: 420000,
    status: "inactive",

    documents: [
      {
        id: "d1",
        title: "Insurance Policy",
        number: "N1234-0932",
        validFrom: "2024-12-20",
        validTo: "2026-04-13",
        status: "active",
      },
      {
        id: "d2",
        title: "Leasing Contract",
        number: "LC-88921",
        validFrom: "2023-01-10",
        validTo: "2025-05-01",
        status: "expired",
      },
    ],
    telematics: {
      health: 30,
      fuelLevel: 20,
      battery: 40,
      mileage: 420000,
    },
    history: [
      {
        id: "h1",
        type: "added",
        title: "Truck added",
        date: "2026-02-18",
        user: "Andrii Ivanov",
        userImage: 'https://w7.pngwing.com/pngs/842/134/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png',

        email: 'andriivanov@gmail.com'
      },
    ],
    gallery: [
  { id: "g1", size: "big", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/281643/hlv/original.jpg", title: "Front view" },
  { id: "g2", size: "big", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/321194/hlv/600.jpg", title: "Interior" },
  { id: "g3", size: "small", url: "https://www.bossmachinery.nl/data/images/vehicles/l_01_Iveco%20Stralis%20BM5880_01.jpg", title: "Front detail" },
  { id: "g4", size: "small", url: "https://upload.wikimedia.org/wikipedia/commons/6/60/2019_2019_Iveco_Stralis.jpg", title: "Night view" },
  { id: "g5", size: "small", url: "https://www.tempus.sk/public/media/1442/20220706_122226.jpg", title: "Night view" },
  { id: "g6", size: "small", url: "https://img.tipcars.com/fotky_velke/05945466_43/1769178011/E/iveco-stralis-480-euro-6-lowdeck.jpg", title: "Night view" },
]
  },

  {
    id: 7,
    number: "CE 90 LK",
    brand: "Renault",
    model: "T High",
    imageUrl: "../vehicles/renault.png",
    year: 2022,
    color: "Black",
    vin: "VF611A16300012345",
    euroClass: "Euro 6",
    mileage: 65000,
    status: "active",

    documents: [
      {
        id: "d1",
        title: "Insurance Policy",
        number: "N1234-0932",
        validFrom: "2024-12-20",
        validTo: "2026-04-13",
        status: "active",
      },
      {
        id: "d2",
        title: "Leasing Contract",
        number: "LC-88921",
        validFrom: "2023-01-10",
        validTo: "2025-05-01",
        status: "expired",
      },
    ],
    telematics: {
      health: 95,
      fuelLevel: 85,
      battery: 95,
      mileage: 65000,
    },
    history: [{
      id: "h1",
      type: "updated",
      title: "Truck updated",
      date: "2026-02-18",
      user: "Andrii Ivanov",
      userImage: 'https://w7.pngwing.com/pngs/842/134/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png',

      email: 'andriivanov@gmail.com'
    },],
   gallery: [
  { id: "g1", size: "big", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/303034/hlv/original.jpg", title: "Front view" },
  { id: "g2", size: "big", url: "https://www.used-renault-trucks.fr/sites/default/files/styles/utwp_pdp_zoom/public/2025-07/IMG_5899.JPEG?itok=O2AX5v0E", title: "Interior" },
  { id: "g3", size: "small", url: "https://www.lectura-specs.fr/models/renamed/orig/tracteurs-routiers-t-high-480-t4x2-e6-rhd-renault.jpg", title: "Front detail" },
  { id: "g4", size: "small", url: "https://cdn.truckscout24.com/data/listing/img/vga/ts/71/18/17024596-01.jpg?v=1725870685", title: "Night view" },
  { id: "g5", size: "small", url: "https://cdn.truckscout24.com/data/listing/img/vga/ts/12/56/18673516-08.jpg?v=1744727222", title: "Night view" },
  { id: "g6", size: "small", url: "https://www.renault-trucks.sk/sites/default/files/styles/illustration_mobile_x1/public/2024-09/P2763-T-High-EVO3-SmartRacer-FrontSideView.jpg.webp?itok=Q7kh-IJD", title: "Night view" },
]

  },

  {
    id: 8,
    number: "AA 55 TT",
    brand: "Volvo",
    model: "FMX",
    imageUrl: "../vehicles/volvo.png",
    year: 2021,
    color: "Yellow",
    vin: "YV2X922A0MB123456",
    euroClass: "Euro 6",
    mileage: 120000,
    status: "active",

    documents: [
      {
        id: "d1",
        title: "Insurance Policy",
        number: "N1234-0932",
        validFrom: "2024-12-20",
        validTo: "2026-04-13",
        status: "active",
      },
      {
        id: "d2",
        title: "Leasing Contract",
        number: "LC-88921",
        validFrom: "2023-01-10",
        validTo: "2025-05-01",
        status: "expired",
      },
    ],
    telematics: {
      health: 80,
      fuelLevel: 70,
      battery: 85,
      mileage: 120000,
    },
    history: [
      {
        id: "h1",
        type: "updated",
        title: "Truck updated",
        date: "2026-02-18",
        user: "Andrii Ivanov",
        userImage: 'https://w7.pngwing.com/pngs/842/134/png-transparent-avatar-face-man-boy-male-profile-smiley-avatar-icon.png',
        email: 'andriivanov@gmail.com'

      },
    ],
     gallery: [
  { id: "g1", size: "big", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/285583/hrv/original.jpg", title: "Front view" },
  { id: "g2", size: "big", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/320679/hrv/original.jpg", title: "Interior" },
  { id: "g3", size: "small", url: "https://volvoselected.com/assets/pages/truckModel/volvoFMX/image4.509c74c95d.webp", title: "Front detail" },
  { id: "g4", size: "small", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Volvo_FMX_10x4_dump_truck_2014._Spielvogel_1.JPG/330px-Volvo_FMX_10x4_dump_truck_2014._Spielvogel_1.JPG", title: "Night view" },
  { id: "g5", size: "small", url: "https://d2e5b8shawuel2.cloudfront.net/vehicle/311083/hrv/original.jpg", title: "Night view" },
  { id: "g6", size: "small", url: "https://www.truck1.sk/img/xxl/3287/Volvo-FMX-500-8x4-bordmatic-tipper-Slovinsko_3287_9856069384413.jpg", title: "Night view" },
]
  },
];

export default vehicles;