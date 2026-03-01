import { useState } from "react";
import { tabCarsType as tabs } from "../mockdata";
import { api } from "@/libs/trpc/react";
import { CarItemValue } from "@/interface/landing";

export function useLanding() {
  const [tabActive, setTabActive] = useState("all");
  const [openModalBook, setOpenModalBook] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [detailData, setDetailData] = useState<CarItemValue>();

  const { data, isLoading: loadingCar } = api.landing.getCarLanding.useQuery();

  const cars: CarItemValue[] = data?.data ?? [];

  const visibleCars = showAll ? cars : cars.slice(0, 8);
  const shouldShowToggle = cars.length > 8;

  const handleOpenModalBook = (data: CarItemValue) => {
    setDetailData(data);
    setOpenModalBook(!openModalBook);
  };

  const handleCloseModalBook = () => {
    setOpenModalBook(!openModalBook);
  };

  const handleChangeTab = (tabId: string) => {
    setTabActive(tabId);
  };

  const handleToggleShow = () => {
    setShowAll((prev) => !prev);
  };

  const onSubmitRent = (values: any) => {
    const phoneNumber = "6281234567890";

    const message = `
    Halo Admin Rental 👋
    
    Saya ingin booking unit dengan detail berikut:
    
    🚗 Mobil: ${values?.car_name}
    📅 Tanggal Mulai: ${values.start_date}
    📅 Tanggal Selesai: ${values.end_date}
    📍 Lokasi Jemput: ${values.address}
    👤 Nama: ${values.name}
    📞 No HP: ${values.contact}
    
    Mohon info ketersediaan dan total harga ya 🙏
      `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return {
    tabs,
    tabActive,
    handleChangeTab,
    openModalBook,
    handleOpenModalBook,
    handleCloseModalBook,
    loadingCar,
    cars,
    visibleCars,
    shouldShowToggle,
    showAll,
    handleToggleShow,
    detailData,
    onSubmitRent,
  };
}
