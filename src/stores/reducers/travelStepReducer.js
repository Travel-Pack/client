import { FETCH_TRAVELSTEPS, GENERATES_TRAVELSTEPS } from "../actions/actionType"

const initiateState = {
  travelSteps: [],
  generatedTravelSteps: [
    {
      "hotel": {
        "id": 4,
        "name": "Livinn Hostel Surabaya",
        "slug": "livinn-hostel-surabaya",
        "image": "https://jenishotel.info/wp-content/uploads/2019/09/livinn-hostel.jpg",
        "address": "Jl. jalan sehat",
        "geocoding": "-7.263283,112.751178",
        "isRecommended": true,
        "price": 88000,
        "CityId": 3,
        "createdAt": "2023-01-09T05:59:58.430Z",
        "updatedAt": "2023-01-09T05:59:58.430Z"
      },
      "destination": [
        {
          "id": 14,
          "name": "Sanggar Agung Temple",
          "slug": "sanggar-agung-temple",
          "address": "Jl. Sukolilo No.100, Sukolilo Baru, Kec. Bulak, Kota Surabaya, Jawa Timur 60122",
          "mainImg": "https://www.surabayarollcake.com/wp-content/uploads/2019/01/Klenteng-Sanggar-Agung-Surabaya.jpg",
          "cost": 10000,
          "geocoding": "-7.247488948002271, 112.80180008459418",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 2,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        },
        {
          "id": 15,
          "name": "Food Junction Grand Pakuwon",
          "slug": "food-junction-grand-pakuwon",
          "address": "Jalan Grand Banjar Mutiara Asri No.1, Banjar Sugihan, Kec. Tandes, Kota Surabaya, Jawa Timur 60184",
          "mainImg": "https://www.pakuwonjati.com/upload/2020/05/5eb035d16732c-pkw-mall-com-08fj-gallery0.jpg",
          "cost": 0,
          "geocoding": "-7.250777204884361, 112.66208039993745",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 3,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        }
      ]
    },
    {
      "hotel": {
        "id": 4,
        "name": "Livinn Hostel Surabaya",
        "slug": "livinn-hostel-surabaya",
        "image": "https://jenishotel.info/wp-content/uploads/2019/09/livinn-hostel.jpg",
        "address": "Jl. jalan sehat",
        "geocoding": "-7.263283,112.751178",
        "isRecommended": true,
        "price": 88000,
        "CityId": 3,
        "createdAt": "2023-01-09T05:59:58.430Z",
        "updatedAt": "2023-01-09T05:59:58.430Z"
      },
      "destination": [
        {
          "id": 13,
          "name": "Hutan Bambu",
          "slug": "hutan-bambu",
          "address": "Jl. Raya Marina Asri, Keputih, Kec. Sukolilo, Kota Surabaya, Jawa Timur 60111",
          "mainImg": "https://www.pegipegi.com/travel/wp-content/uploads/2017/10/alamat-taman-sakura-keputih-surabaya.jpg",
          "cost": 13000,
          "geocoding": "-7.29398869645369, 112.8016808827438",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 1,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        },
        {
          "id": 15,
          "name": "Food Junction Grand Pakuwon",
          "slug": "food-junction-grand-pakuwon",
          "address": "Jalan Grand Banjar Mutiara Asri No.1, Banjar Sugihan, Kec. Tandes, Kota Surabaya, Jawa Timur 60184",
          "mainImg": "https://www.pakuwonjati.com/upload/2020/05/5eb035d16732c-pkw-mall-com-08fj-gallery0.jpg",
          "cost": 0,
          "geocoding": "-7.250777204884361, 112.66208039993745",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 3,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        }
      ]
    },
    {
      "hotel": {
        "id": 4,
        "name": "Livinn Hostel Surabaya",
        "slug": "livinn-hostel-surabaya",
        "image": "https://jenishotel.info/wp-content/uploads/2019/09/livinn-hostel.jpg",
        "address": "Jl. jalan sehat",
        "geocoding": "-7.263283,112.751178",
        "isRecommended": true,
        "price": 88000,
        "CityId": 3,
        "createdAt": "2023-01-09T05:59:58.430Z",
        "updatedAt": "2023-01-09T05:59:58.430Z"
      },
      "destination": [
        {
          "id": 12,
          "name": "Wisata Air Taman Prestasi",
          "slug": "wisata-air-taman-prestasi",
          "address": "Jl. Ketabang Kali No.2-B, Ketabang, Kec. Genteng, Kota Surabaya, Jawa Timur 60272",
          "mainImg": "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/02/25/1658474457.jpg",
          "cost": 15000,
          "geocoding": "-7.261706410257518, 112.74315998274346",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 6,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        },
        {
          "id": 15,
          "name": "Food Junction Grand Pakuwon",
          "slug": "food-junction-grand-pakuwon",
          "address": "Jalan Grand Banjar Mutiara Asri No.1, Banjar Sugihan, Kec. Tandes, Kota Surabaya, Jawa Timur 60184",
          "mainImg": "https://www.pakuwonjati.com/upload/2020/05/5eb035d16732c-pkw-mall-com-08fj-gallery0.jpg",
          "cost": 0,
          "geocoding": "-7.250777204884361, 112.66208039993745",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 3,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        }
      ]
    },
    {
      "hotel": {
        "id": 4,
        "name": "Livinn Hostel Surabaya",
        "slug": "livinn-hostel-surabaya",
        "image": "https://jenishotel.info/wp-content/uploads/2019/09/livinn-hostel.jpg",
        "address": "Jl. jalan sehat",
        "geocoding": "-7.263283,112.751178",
        "isRecommended": true,
        "price": 88000,
        "CityId": 3,
        "createdAt": "2023-01-09T05:59:58.430Z",
        "updatedAt": "2023-01-09T05:59:58.430Z"
      },
      "destination": [
        {
          "id": 15,
          "name": "Food Junction Grand Pakuwon",
          "slug": "food-junction-grand-pakuwon",
          "address": "Jalan Grand Banjar Mutiara Asri No.1, Banjar Sugihan, Kec. Tandes, Kota Surabaya, Jawa Timur 60184",
          "mainImg": "https://www.pakuwonjati.com/upload/2020/05/5eb035d16732c-pkw-mall-com-08fj-gallery0.jpg",
          "cost": 0,
          "geocoding": "-7.250777204884361, 112.66208039993745",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 3,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        },
        {
          "id": 16,
          "name": "Surabaya Submarine Monument",
          "slug": "surabaya-submarine-monument",
          "address": "Jl. Pemuda No.39, Embong Kaliasin, Kec. Genteng, Kota Surabaya, Jawa Timur 60271",
          "mainImg": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9f/62/87/most-visit-in-town.jpg?w=1200&h=-1&s=1",
          "cost": 15000,
          "geocoding": "-7.26550489357184, 112.75026228274366",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 4,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        }
      ]
    },
    {
      "hotel": {
        "id": 4,
        "name": "Livinn Hostel Surabaya",
        "slug": "livinn-hostel-surabaya",
        "image": "https://jenishotel.info/wp-content/uploads/2019/09/livinn-hostel.jpg",
        "address": "Jl. jalan sehat",
        "geocoding": "-7.263283,112.751178",
        "isRecommended": true,
        "price": 88000,
        "CityId": 3,
        "createdAt": "2023-01-09T05:59:58.430Z",
        "updatedAt": "2023-01-09T05:59:58.430Z"
      },
      "destination": [
        {
          "id": 13,
          "name": "Hutan Bambu",
          "slug": "hutan-bambu",
          "address": "Jl. Raya Marina Asri, Keputih, Kec. Sukolilo, Kota Surabaya, Jawa Timur 60111",
          "mainImg": "https://www.pegipegi.com/travel/wp-content/uploads/2017/10/alamat-taman-sakura-keputih-surabaya.jpg",
          "cost": 13000,
          "geocoding": "-7.29398869645369, 112.8016808827438",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 1,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        },
        {
          "id": 14,
          "name": "Sanggar Agung Temple",
          "slug": "sanggar-agung-temple",
          "address": "Jl. Sukolilo No.100, Sukolilo Baru, Kec. Bulak, Kota Surabaya, Jawa Timur 60122",
          "mainImg": "https://www.surabayarollcake.com/wp-content/uploads/2019/01/Klenteng-Sanggar-Agung-Surabaya.jpg",
          "cost": 10000,
          "geocoding": "-7.247488948002271, 112.80180008459418",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 2,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        }
      ]
    },
    {
      "hotel": {
        "id": 4,
        "name": "Livinn Hostel Surabaya",
        "slug": "livinn-hostel-surabaya",
        "image": "https://jenishotel.info/wp-content/uploads/2019/09/livinn-hostel.jpg",
        "address": "Jl. jalan sehat",
        "geocoding": "-7.263283,112.751178",
        "isRecommended": true,
        "price": 88000,
        "CityId": 3,
        "createdAt": "2023-01-09T05:59:58.430Z",
        "updatedAt": "2023-01-09T05:59:58.430Z"
      },
      "destination": [
        {
          "id": 12,
          "name": "Wisata Air Taman Prestasi",
          "slug": "wisata-air-taman-prestasi",
          "address": "Jl. Ketabang Kali No.2-B, Ketabang, Kec. Genteng, Kota Surabaya, Jawa Timur 60272",
          "mainImg": "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/02/25/1658474457.jpg",
          "cost": 15000,
          "geocoding": "-7.261706410257518, 112.74315998274346",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 6,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        },
        {
          "id": 14,
          "name": "Sanggar Agung Temple",
          "slug": "sanggar-agung-temple",
          "address": "Jl. Sukolilo No.100, Sukolilo Baru, Kec. Bulak, Kota Surabaya, Jawa Timur 60122",
          "mainImg": "https://www.surabayarollcake.com/wp-content/uploads/2019/01/Klenteng-Sanggar-Agung-Surabaya.jpg",
          "cost": 10000,
          "geocoding": "-7.247488948002271, 112.80180008459418",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 2,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        }
      ]
    },
    {
      "hotel": {
        "id": 4,
        "name": "Livinn Hostel Surabaya",
        "slug": "livinn-hostel-surabaya",
        "image": "https://jenishotel.info/wp-content/uploads/2019/09/livinn-hostel.jpg",
        "address": "Jl. jalan sehat",
        "geocoding": "-7.263283,112.751178",
        "isRecommended": true,
        "price": 88000,
        "CityId": 3,
        "createdAt": "2023-01-09T05:59:58.430Z",
        "updatedAt": "2023-01-09T05:59:58.430Z"
      },
      "destination": [
        {
          "id": 14,
          "name": "Sanggar Agung Temple",
          "slug": "sanggar-agung-temple",
          "address": "Jl. Sukolilo No.100, Sukolilo Baru, Kec. Bulak, Kota Surabaya, Jawa Timur 60122",
          "mainImg": "https://www.surabayarollcake.com/wp-content/uploads/2019/01/Klenteng-Sanggar-Agung-Surabaya.jpg",
          "cost": 10000,
          "geocoding": "-7.247488948002271, 112.80180008459418",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 2,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        },
        {
          "id": 16,
          "name": "Surabaya Submarine Monument",
          "slug": "surabaya-submarine-monument",
          "address": "Jl. Pemuda No.39, Embong Kaliasin, Kec. Genteng, Kota Surabaya, Jawa Timur 60271",
          "mainImg": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9f/62/87/most-visit-in-town.jpg?w=1200&h=-1&s=1",
          "cost": 15000,
          "geocoding": "-7.26550489357184, 112.75026228274366",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 4,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        }
      ]
    },
    {
      "hotel": {
        "id": 4,
        "name": "Livinn Hostel Surabaya",
        "slug": "livinn-hostel-surabaya",
        "image": "https://jenishotel.info/wp-content/uploads/2019/09/livinn-hostel.jpg",
        "address": "Jl. jalan sehat",
        "geocoding": "-7.263283,112.751178",
        "isRecommended": true,
        "price": 88000,
        "CityId": 3,
        "createdAt": "2023-01-09T05:59:58.430Z",
        "updatedAt": "2023-01-09T05:59:58.430Z"
      },
      "destination": [
        {
          "id": 12,
          "name": "Wisata Air Taman Prestasi",
          "slug": "wisata-air-taman-prestasi",
          "address": "Jl. Ketabang Kali No.2-B, Ketabang, Kec. Genteng, Kota Surabaya, Jawa Timur 60272",
          "mainImg": "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/02/25/1658474457.jpg",
          "cost": 15000,
          "geocoding": "-7.261706410257518, 112.74315998274346",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 6,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        },
        {
          "id": 13,
          "name": "Hutan Bambu",
          "slug": "hutan-bambu",
          "address": "Jl. Raya Marina Asri, Keputih, Kec. Sukolilo, Kota Surabaya, Jawa Timur 60111",
          "mainImg": "https://www.pegipegi.com/travel/wp-content/uploads/2017/10/alamat-taman-sakura-keputih-surabaya.jpg",
          "cost": 13000,
          "geocoding": "-7.29398869645369, 112.8016808827438",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 1,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        }
      ]
    },
    {
      "hotel": {
        "id": 4,
        "name": "Livinn Hostel Surabaya",
        "slug": "livinn-hostel-surabaya",
        "image": "https://jenishotel.info/wp-content/uploads/2019/09/livinn-hostel.jpg",
        "address": "Jl. jalan sehat",
        "geocoding": "-7.263283,112.751178",
        "isRecommended": true,
        "price": 88000,
        "CityId": 3,
        "createdAt": "2023-01-09T05:59:58.430Z",
        "updatedAt": "2023-01-09T05:59:58.430Z"
      },
      "destination": [
        {
          "id": 13,
          "name": "Hutan Bambu",
          "slug": "hutan-bambu",
          "address": "Jl. Raya Marina Asri, Keputih, Kec. Sukolilo, Kota Surabaya, Jawa Timur 60111",
          "mainImg": "https://www.pegipegi.com/travel/wp-content/uploads/2017/10/alamat-taman-sakura-keputih-surabaya.jpg",
          "cost": 13000,
          "geocoding": "-7.29398869645369, 112.8016808827438",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 1,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        },
        {
          "id": 16,
          "name": "Surabaya Submarine Monument",
          "slug": "surabaya-submarine-monument",
          "address": "Jl. Pemuda No.39, Embong Kaliasin, Kec. Genteng, Kota Surabaya, Jawa Timur 60271",
          "mainImg": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9f/62/87/most-visit-in-town.jpg?w=1200&h=-1&s=1",
          "cost": 15000,
          "geocoding": "-7.26550489357184, 112.75026228274366",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 4,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        }
      ]
    },
    {
      "hotel": {
        "id": 4,
        "name": "Livinn Hostel Surabaya",
        "slug": "livinn-hostel-surabaya",
        "image": "https://jenishotel.info/wp-content/uploads/2019/09/livinn-hostel.jpg",
        "address": "Jl. jalan sehat",
        "geocoding": "-7.263283,112.751178",
        "isRecommended": true,
        "price": 88000,
        "CityId": 3,
        "createdAt": "2023-01-09T05:59:58.430Z",
        "updatedAt": "2023-01-09T05:59:58.430Z"
      },
      "destination": [
        {
          "id": 12,
          "name": "Wisata Air Taman Prestasi",
          "slug": "wisata-air-taman-prestasi",
          "address": "Jl. Ketabang Kali No.2-B, Ketabang, Kec. Genteng, Kota Surabaya, Jawa Timur 60272",
          "mainImg": "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/02/25/1658474457.jpg",
          "cost": 15000,
          "geocoding": "-7.261706410257518, 112.74315998274346",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 6,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        },
        {
          "id": 16,
          "name": "Surabaya Submarine Monument",
          "slug": "surabaya-submarine-monument",
          "address": "Jl. Pemuda No.39, Embong Kaliasin, Kec. Genteng, Kota Surabaya, Jawa Timur 60271",
          "mainImg": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9f/62/87/most-visit-in-town.jpg?w=1200&h=-1&s=1",
          "cost": 15000,
          "geocoding": "-7.26550489357184, 112.75026228274366",
          "description": "this is destination DESCRIPTIONS SECTION!",
          "CityId": 3,
          "UserId": 4,
          "createdAt": "2023-01-09T05:59:58.426Z",
          "updatedAt": "2023-01-09T05:59:58.426Z"
        }
      ]
    }
  ]
}

export default function travelStepsReducer(state = initiateState, action) {
  switch (action.type) {
    case FETCH_TRAVELSTEPS:
      return { ...state, travelSteps: action.payload }
    case GENERATES_TRAVELSTEPS:
      return { ...state, generatedTravelSteps: action.payload }
    default:
      return state
  }
}