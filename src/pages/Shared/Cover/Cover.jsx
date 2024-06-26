import { Parallax } from 'react-parallax';


const Cover = ({ img, title, paragraph, width }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className={`hero ${width}`} >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{paragraph || 'Would you like to try a dish?'}</p>
                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;