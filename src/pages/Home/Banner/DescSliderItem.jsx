import PropTypes from 'prop-types';
const DescSliderItem = ({ item }) => {
    const Icon = item.icon;
    return (
        <div className="banner-desc-item flex mt-10">
            <div className="banner-desc-icon pr-8 border-r border-black flex self-center">
                <Icon className="md:w-[5.8rem] w-20" />
            </div>
            <div className="banner-desc-content pl-6 flex flex-col self-center">
                <h4 className="font-extrabold text-lg xl:text-2xl">{item.title}</h4>
                <p className="mt-1 text-[13px] text-sm xl:text-base">{item.description}</p>
            </div>
        </div>
    );
};

DescSliderItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default DescSliderItem;
