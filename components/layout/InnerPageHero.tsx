type Props = {
  title: string;
  subtitle?: string;
};

export function InnerPageHero({ title, subtitle }: Props) {
  return (
    <section className="bg-[#33414E] py-10 lg:py-14">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5 lg:px-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3 max-w-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
