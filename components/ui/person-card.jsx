import Link from 'next/link';
import { useState } from 'react';


 function PersonCard(props) {
    const { name = '[name]', title = '[title]', image = '/images/people/sample-person.png', blurb = '[bio]' } = props;
        
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="relative md:w-44 lg:w-60 xl:w-80" onClick={flipCard}>
            <img src={image} alt={name} className="h-full w-full object-cover" />
            <div id="front" className={`${isFlipped ? 'hidden' : 'absolute inset-0 top-0 left-0'}`}>
                <div className="hidden left-0 top-10">
                    <h2>{name}</h2>
                    <p>{title}</p>
                </div>
            </div>
            <div id="back" className={`${isFlipped ? 'absolute inset-0 top-0 left-0' : 'hidden'} h-full w-full bg-primaryDark opacity-50 text-primaryLight transition duration-1000 `}>
                <div className="absolute p-4">
                <h5>{name}</h5>
                <p className="body-medium bold text-primaryLight">{title}</p>
                <p className="pt-4 body-small text-primaryLight line-clamp-6">{blurb}</p>
                <p className="pt-4 text-primaryLight">
                    <Link className="body-inline" href={`/people/${name}`}>Explore</Link>
                </p>
                </div>
            </div>
        </div>
    );
}

export default PersonCard;

