function CardSection(props) {
  return (
    <section className="container flex flex-col md:px-6">
      <div className="w-full md:w-2/3 lg:w-1/2"><h2>{props.headline}</h2></div>
      <div className="flex flex-col md:flex-row">
      {props.children}
      </div>
    </section>
  );
}

export default CardSection;