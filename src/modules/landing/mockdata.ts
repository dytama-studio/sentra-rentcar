import {
  FaCar,
  FaClipboardCheck,
  FaMoneyBill,
  FaReceipt,
} from "react-icons/fa";

export const tabCarsType = [
  { id: "all", name: "All" },
  { id: "city car", name: "City Car" },
  { id: "sedan", name: "Sedan" },
  { id: "mpv", name: "MPV" },
  { id: "van", name: "Van" },
];

export const carList = [
  {
    id: "1",
    name: "Toyota Innova 2025",
    category: "MPV",
    transmission: "Automatic",
    capacity: 7,
    storage: 2,
    price: "Rp 620.000",
    url: "/assets/img/cars/toyotainnova.png",
  },
  {
    id: "2",
    name: "Toyota Avanza 2024",
    category: "MPV",
    transmission: "Manual",
    capacity: 6,
    storage: 2,
    price: "Rp 250.000",
    url: "/assets/img/cars/avanza.png",
  },
  {
    id: "3",
    name: "Honda Brio 2023",
    category: "City Car",
    transmission: "Automatic",
    capacity: 4,
    storage: 1,
    price: "Rp 250.000",
    url: "/assets/img/cars/brio.png",
  },
  {
    id: "4",
    name: "Pajero Sport 2025",
    category: "SUV",
    transmission: "Automatic",
    capacity: 7,
    storage: 2,
    price: "Rp 725.000",
    url: "/assets/img/cars/pajerosport.png",
  },
  {
    id: "5",
    name: "Toyota Raize",
    category: "Crossover",
    transmission: "Automatic",
    capacity: 4,
    storage: 1,
    price: "Rp 550.000",
    url: "/assets/img/cars/raize.png",
  },
  {
    id: "6",
    name: "Civic Turbo 2022",
    category: "Sedan",
    transmission: "Automatic",
    capacity: 4,
    storage: 1,
    price: "Rp 720.000",
    url: "/assets/img/cars/civicturbo.png",
  },
  {
    id: "7",
    name: "Toyota Voxy 2025",
    category: "MPV",
    transmission: "Automatic",
    capacity: 7,
    storage: 2,
    price: "Rp 400.000",
    url: "/assets/img/cars/toyotavoxy.png",
  },
  {
    id: "8",
    name: "Toyota Innova 2025",
    category: "MPV",
    transmission: "Automatic",
    capacity: 6,
    storage: 2,
    price: "Rp 620.000",
    url: "/assets/img/cars/toyotainnova.png",
  },
];

export const howToUseData = [
  {
    id: "1",
    title: "1. Pilih Mobil",
    subtitle:
      "Telusuri armada kami dan pilih mobil yang paling sesuai dengan kebutuhan perjalanan Anda—harian, bisnis, atau liburan.",
    icon: FaCar,
  },
  {
    id: "2",
    title: "1. Lakukan Pesanan",
    subtitle:
      "Hubungi kami melalui WhatsApp atau formulir pemesanan. Tim kami akan merespons cepat untuk konfirmasi ketersediaan.",
    icon: FaReceipt,
  },
  {
    id: "3",
    title: "3. Konfirmasi & Pembayaran",
    subtitle:
      "Setelah detail disepakati, lakukan pembayaran dengan aman dan transparan tanpa biaya tersembunyi.",
    icon: FaMoneyBill,
  },
  {
    id: "4",
    title: "4. Mobil Siap Digunakan",
    subtitle:
      "Mobil akan kami antar atau bisa Anda ambil sesuai kesepakatan. Tinggal nyalakan mesin dan nikmati perjalanan Anda.",
    icon: FaClipboardCheck,
  },
];
