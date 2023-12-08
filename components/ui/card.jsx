
function Card(props) {
 
  let title = props?.title || "[Title]";
  let body = props?.body || "[Body]";
  let linkText = props?.linkText || "[Link Text]";
  let linkUrl = props?.linkUrl || "#";

  return (
    <div className="items-stretch border-t-[color:var(--neutral-black,#000)] flex flex-col pt-8 border-t border-solid">
      <h4>{title}</h4>
      <div className="text-black text-base font-light leading-6 w-full mt-4" dangerouslySetInnerHTML={{ __html: body }}/>
      <a href={linkUrl}>
        {linkText}
      </a>
    </div>
  );
}

export default Card;
