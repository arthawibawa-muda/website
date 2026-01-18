type TNumberProps = {
  number: string;
  desc: string;
};

const Number = ({ number, desc }: TNumberProps) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <p className="text-2xl md:text-3xl lg:text-5xl font-semibold">{number}</p>
      <p className="text-sm text-center md:text-base text-light/80">{desc}</p>
    </div>
  );
};

export default Number;
