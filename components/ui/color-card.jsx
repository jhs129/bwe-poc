function ColorCard(props) {
    let { title, body, color } = props;

    // Extracting the unique r, g, b, a values from the color variable
    let colorClass = 'bg-primaryAccent';
    let r, g, b, a = [0,73,118,1];

    const colorPattern = /\d+/g;
    if (color && color.match(colorPattern)) {
        [r, g, b, a] = color.match(colorPattern);
        colorClass = `bg-[rgba(${r},${g},${b},${a})]`;
        console.log(colorClass);
    }

    let hexColor = rgbaToHex(r, g, b, a);

    const colorBarStyle = {
        backgroundColor: `rgba(${r},${g},${b},${a})`
    };

    return (
        <div className="flex flex-col relative">
            <div id="color-bar" className={`justify-center text-white text-center items-center px-16 py-3 max-md:px-5`} style={colorBarStyle}>
                <h3>{title}</h3>
            </div>
            <p className="justify-center self-center max-w-[264px] mt-11 max-md:mt-10" dangerouslySetInnerHTML={{ __html: body }}  />
        </div>
    );
};

function rgbaToHex(r, g, b, a) {
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    const hexA = Math.round(a * 255).toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}${hexA}`;
}

export default ColorCard;