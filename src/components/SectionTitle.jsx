
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-1/3 mx-auto my-8">
            <p className="text-[#D99904] mb-3">--- {subHeading} ---</p>
            <h3 className="text-3xl border-b-2 border-t-2 py-2 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;