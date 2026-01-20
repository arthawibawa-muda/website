function QuoteIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      content:
        "Pelayanan yang diberikan sangat profesional dan tepat waktu. Proses pengadaan berjalan lancar dan sesuai dengan kebutuhan kami.",
      location: "Kelurahan Grogol",
    },
    {
      content:
        "CV Arthawibawa Muda menjadi mitra yang responsif dan dapat dipercaya dalam mendukung kebutuhan kegiatan dan operasional.",
      location: "Balai Diklat Semarang",
    },
    {
      content:
        "Kerja sama berjalan baik dengan hasil yang memuaskan. Tim sangat komunikatif dan memahami kebutuhan instansi kami.",
      location: "MTsN 1 Klaten",
    },
    {
      content:
        "Layanan pengadaan dilakukan secara rapi dan profesional. Kami merasa terbantu dengan proses yang transparan.",
      location: "MTsN 1 Surakarta",
    },
    {
      content:
        "Pelayanan cepat, harga kompetitif, dan hasil sesuai harapan. Sangat direkomendasikan untuk kerja sama proyek.",
      location: "Travel Armada Hiace",
    },
    {
      content:
        "Mitra yang dapat diandalkan dengan layanan yang fleksibel dan tepat sasaran sesuai kebutuhan kegiatan kami.",
      location: "Aula di Peumping Solo",
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full font-sans max-w-[1440px] mx-auto px-4 sm:px-5 bg-light mt-16 sm:mt-[120px]"
    >
      <h3 className="max-w-3xl mx-auto text-xl sm:text-3xl lg:text-5xl text-center font-semibold">
        DIPERCAYA OLEH BERBAGAI INSTANSI DAN MITRA.
      </h3>
      <ul
        role="list"
        className="mx-auto mt-4 sm:mt-8 grid grid-cols-1 gap-4 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
      >
        {testimonials.map((item, columnIndex) => (
          <li key={columnIndex}>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-dark">
                    {item.content}
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="font-display text-base text-dark uppercase">
                    {item.location}
                  </div>
                </figcaption>
              </figure>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
