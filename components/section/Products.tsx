import Image from "next/image";
import Button from "../ui/Button";

export default function Products() {
  const productsContent = [
    {
      imgUrl: "/videotron.webp",
      title: "VIDEOTRON",
      desc: "Indoor dan outdoor.",
    },
    {
      imgUrl: "/hardware.webp",
      title: "HARDWARE",
      desc: "Laptop, PC, Smart Board.",
    },
    {
      imgUrl: "/retail.webp",
      title: "RETAIL",
      desc: "Kebutuhan pokok & ATK",
    },
    {
      imgUrl: "/jasa.webp",
      title: "JASA TRAINING",
      desc: "Untuk dewasa maupun anak-anak.",
    },
  ];

  return (
    <section
      id="products"
      className="w-full max-w-[1440px] mx-auto py-8 sm:py-20 px-4 sm:px-5 bg-light"
    >
      <div className="w-full flex flex-col gap-10 lg:gap-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <p>PRODUK KAMI</p>
          <h3 className="max-w-3xl text-xl sm:text-3xl lg:text-5xl text-center font-semibold">
            SOLUSI PRODUK BERKUALITAS UNTUK SETIAP KEBUTUHAN.
          </h3>
          <p className="max-w-xl text-center">
            Produk berkualitas untuk mendukung kebutuhan operasional dan proyek
            di sektor swasta maupun pemerintahan.
          </p>
        </div>
        <div className="w-full grid grid-cols-12 gap-4 sm:gap-5">
          {/*<div className="col-span-7">
            <div className="w-full flex flex-col rounded-[20px] overflow-hidden shadow-xl/5">
              <div className="relative w-full h-[440px]">
                <Image
                  alt=""
                  src="/tentang.webp"
                  fill
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="p-10 bg-white flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                    VIDEOTRON
                  </h3>
                  <p>Indoor dan outdoor.</p>
                </div>
                <Button url="/">KONSULTASI SEKARANG</Button>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="w-full flex flex-col rounded-[20px] overflow-hidden shadow-xl/5">
              <div className="relative w-full h-[440px]">
                <Image
                  alt=""
                  src="/tentang.webp"
                  fill
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="p-10 bg-white flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                    HARDWARE
                  </h3>
                  <p>Laptop, PC, Smart Board.</p>
                </div>
                <Button url="/">KONSULTASI SEKARANG</Button>
              </div>
            </div>
          </div>*/}
          {productsContent.map((product, index) => (
            <div
              key={product.title}
              className={`col-span-12 md:col-span-6 ${
                index % 4 === 0 || index % 4 === 3
                  ? "xl:col-span-7"
                  : "xl:col-span-5"
              }`}
            >
              <div className="w-full flex flex-col rounded-[20px] overflow-hidden shadow-xl/5">
                <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[440px]">
                  <Image
                    alt={product.title}
                    src={product.imgUrl}
                    fill
                    className="absolute h-full w-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-8 lg:p-10 bg-white flex flex-col lg:flex-row lg:justify-between items-start sm:items-center gap-4">
                  <div className="max-lg:w-full flex flex-col gap-1">
                    <h3 className="text-2xl xl:text-3xl font-semibold">
                      {product.title}
                    </h3>
                    <p className="text-base">{product.desc}</p>
                  </div>
                  <Button url="/" className="w-full lg:w-fit">
                    KONSULTASI SEKARANG
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
