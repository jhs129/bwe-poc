function CardSection(props) {
  return (
    <section className="container flex flex-col px-6">
      <div className="w-full lg:w-2/3 xl:w-1/2"><h2>{props.headline}</h2></div>
      <div className="flex flex-col md:flex-row">
      {props.children}
      </div>
    </section>
  );
}

export default CardSection;