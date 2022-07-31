const DescSliderItem = ({ item }) => {
    const Icon = item.icon;
    return (
        <div className="banner-desc-item flex mt-10">
            <div className="banner-desc-icon pr-8 border-r border-black flex self-center">
                <Icon className="md:w-[5.8rem] w-20" />
            </div>
            <div className="banner-desc-content pl-6 flex flex-col self-center">
                <h4 className="font-extrabold text-[24px]">{item.title}</h4>
                <p className="mt-1">{item.description}</p>
            </div>
        </div>
    );
};

DescSliderItem.propTypes = {};

export default DescSliderItem;
