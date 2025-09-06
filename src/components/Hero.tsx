type HeroProps = {
  title: string;
  date: string;
  location: string;
  ticketUrl: string;
};

export default function Hero({ title, date, location, ticketUrl }: HeroProps) {
  return (
    <section className="">
      <h2 className="">{title}</h2>
      <p className="">{date} @ {location}</p>
      <a
        href={ticketUrl}
        className=""
      >
        チケットを予約する
      </a>
    </section>
  );
}