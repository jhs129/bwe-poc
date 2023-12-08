function CardSection(props) {
  return (
    <section className="container flex flex-col">
      <div className="w-full lg:w-2/3 xl:w-1/2"><h2 className="px-2">{props.headline}</h2></div>
      <div className="flex flex-col md:flex-row lg:space-x-8">
      {props.children}
      </div>
    </section>
  );
}

export default CardSection;