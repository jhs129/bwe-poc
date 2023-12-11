function ColorCard(props) {
    let { title, body, color, textColor } = props;

    let txtColor = textColor ? textColor : 'text-black';

    // Extracting the unique r, g, b, a values from the color variable
    let r, g, b, a = [61,155,233,1];

    const colorPattern = /\d+/g;
    if (color && color.match(colorPattern)) {
        [r, g, b, a] = color.match(colorPattern);
    }

    const colorBarStyle = {
        backgroundColor: `rgba(${r},${g},${b},${a})`
    };

    return (
        <div className="flex flex-col relative">
            <div id="color-bar-desktop" className={`hidden md:flex justify-center text-center items-center ${txtColor}`} style={colorBarStyle}>
                <h5>{title}</h5>
            </div>
            <div id="color-bar-mobile" className="flex flex-row md:hidden justify-between items-center pl-6">
                <div><h5>{title}</h5></div>
                <div className={`h-2 w-10 ml-2  ${txtColor}`} style={colorBarStyle}></div>
            </div>
            <p className="justify-center self-center text-[10px] font-light leading-4 md:text-base md:leading-6 p-6" dangerouslySetInnerHTML={{ __html: body }}  />
        </div>
    );
};


export default ColorCard;