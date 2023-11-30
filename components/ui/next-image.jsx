import Image from "next/image";

function NextImage(props) {
    const { image, height, width, altText,lazyLoad } = props;

    let priority;
    if (lazyLoad === "eager") {
        priority = "priority";
    } else {
        priority = "";
    }


    if (lazyLoad === "eager") {
        return <Image src={image} height={height} width={width} alt={altText} loading="eager" priority="true"/>
    } 

    return <Image src={image} height={height} width={width} alt={altText} loading="lazy"/>

}

export default NextImage;