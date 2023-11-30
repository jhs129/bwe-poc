import Image from "next/image";


function TextImageHero(props) {
    const { text, image, height, width, altText,lazyLoad } = props;
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex" dangerouslySetInnerHTML={text} />
            <div className="flex">
                <Image src={image} height={height} width={width} alt={altText} loading={lazyLoad} />
            </div>
        </div>
    );
}


export default TextImageHero;
