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
            <div id="color-bar" className={`justify-center text-center items-center ${txtColor}`} style={colorBarStyle}>
                <h5>{title}</h5>
            </div>
            <p className="justify-center self-center body-large p-6" dangerouslySetInnerHTML={{ __html: body }}  />
        </div>
    );
};


export default ColorCard;