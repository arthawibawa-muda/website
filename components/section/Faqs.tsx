import Accordion from "../ui/Accordion";

export function Faqs() {
  const faqs = [
    {
      question:
        "Apakah layanan CV Arthawibawa Muda mencakup seluruh Indonesia?",
      answer:
        "Ya, kami melayani jasa dan pengadaan barang untuk kebutuhan klien di seluruh wilayah Indonesia.",
    },
    {
      question: "Apakah melayani instansi pemerintahan?",
      answer:
        "Ya, kami melayani pengadaan barang dan jasa untuk instansi pemerintahan sesuai kebutuhan.",
    },
    {
      question: "Apakah tersedia konsultasi sebelum kerja sama?",
      answer:
        "Tersedia. Kami memberikan konsultasi untuk menyesuaikan solusi dengan kebutuhan klien.",
    },
    {
      question: "Bagaimana sistem harga yang ditawarkan?",
      answer:
        "Harga bersifat kompetitif dan fleksibel, disesuaikan dengan kebutuhan dan anggaran.",
    },
    {
      question: "Apakah layanan dapat disesuaikan?",
      answer:
        "Ya, seluruh layanan kami dapat disesuaikan dengan kebutuhan proyek.",
    },
    {
      question: "Bagaimana cara mengajukan kerja sama?",
      answer:
        "Silakan hubungi kami melalui halaman kontak untuk memulai kerja sama.",
    },
  ];

  return (
    <section
      id="faqs"
      className="w-full font-sans max-w-[1440px] mx-auto px-4 sm:px-5 bg-light mt-16 sm:mt-[120px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10">
        <h3 className="text-xl sm:text-3xl lg:text-5xl font-semibold">
          PERTANYAAN UMUM
        </h3>
        <div className="w-full flex flex-col gap-1 sm:gap-4">
          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              title={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
