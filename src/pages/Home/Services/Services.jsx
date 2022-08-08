// images
import { images } from '~/constants/images';

// hooks
import useGetData from '~/hooks/useGetData';

// components
import Heading from '~/components/Heading';
import ServiceItem from './ServiceItem';

const Services = () => {
    // Get service data
    const { data } = useGetData('serviceData');
    // Render Service List
    const renderServiceList = data.map((item) => <ServiceItem item={item} key={item.id} />);
    return (
        <section className="services relative pt-28 md:px-0 px-6" id="service">
            <div className="absolute left-0 top-0 -z-10">
                <img src={images.IMG_SERVICE_BG1} />
            </div>
            <div className="absolute md:block hidden right-0 top-0 -z-10">
                <img src={images.IMG_SERVICE_BG2} />
            </div>
            <div className="container mx-auto">
                <div className="section-heading md:w-1/2 w-auto text-center mx-auto">
                    <Heading
                        center
                        className="text-center"
                        title={' What were offering'}
                        heading={'We look after your pet with our best staffs'}
                        description={
                            'Grooming Supply provides grooming services for all dog and cat breeds. We are fully committed to the health.'
                        }
                    />
                </div>
                <div className="services-list grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 mt-[115px] gap-6">
                    {renderServiceList}
                </div>
            </div>
        </section>
    );
};

Services.propTypes = {};

export default Services;
