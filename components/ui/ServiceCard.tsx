import { BaggageClaim, HandCoins, HardHat, MessagesSquare } from "lucide-react";

const ServicesCard = () => {
  const iconStyle = "size-16 sm:size-20";
  const servicesContent = [
    {
      icon: <BaggageClaim className={iconStyle} strokeWidth={1.2} />,
      title: "PEMENUHAN KEBUTUHAN",
      desc: "Memenuhi kebutuhan proyek secara menyeluruh di sektor pemerintahan maupun swasta.",
    },
    {
      icon: <MessagesSquare className={iconStyle} strokeWidth={1.2} />,
      title: "LAYANAN KONSULTASI",
      desc: "Memberikan konsultasi profesional untuk jasa dan pengadaan sesuai kebutuhan proyek.",
    },
    {
      icon: <HardHat className={iconStyle} strokeWidth={1.2} />,
      title: "TENAGA AHLI",
      desc: "Didukung tenaga ahli berpengalaman sesuai bidang untuk hasil kerja yang optimal.",
    },
    {
      icon: <HandCoins className={iconStyle} strokeWidth={1.2} />,
      title: "HARGA KOMPETITIF",
      desc: "Menawarkan harga kompetitif yang fleksibel dan disesuaikan dengan anggaran klien.",
    },
  ];

  return (
    <div className="w-full grid grid-cols-12 gap-4 sm:gap-5">
      {servicesContent.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-6 col-span-12 sm:col-span-6 xl:col-span-3 p-4 rounded-xl bg-light/4"
        >
          {item.icon}
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl uppercase">{item.title}</p>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
