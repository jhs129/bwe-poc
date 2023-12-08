function Card(props) {
  let title = props?.title || "[Title]";
  let body = props?.body || "[Body]";
  let linkText = props?.linkText || "[Link Text]";
  let linkUrl = props?.linkUrl || "#";

  return (
    <div className="border-black border-t-2 border-b-0 w-[90%] lg:w-72 xl:w-80 mx-6">
      <div className="mt-4">
        <h4>{title}</h4>
        <div className="body-large mt-4">{body}</div>
        <div className="body-medium py-4">
          <a
            className="font-normal text-secondaryAccent hover:text-secondaryLight"
            href={linkUrl}
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
