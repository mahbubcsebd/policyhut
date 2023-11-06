import Faq from '@/components/faq/Faq';
import Banner from '@/components/global/Banner';
import InsuranceForm from '@/components/home/InsuranceForm';
import Coverage from '@/components/services/Coverage';
import InsuranceCost from '@/components/services/InsuranceCost';
import InsuranceType from '@/components/services/InsuranceType';
import ServicesDetails from '@/components/services/ServicesDetails';

export const metadata = {
    title: 'Policyhut | Service Details',
};

const ServiceDetailsPage = () => {

    return (
        <div
            id="serviceDetailsPage"
            className="serviceDetailsPage"
        >
            <Banner />
            <ServicesDetails />
            <Coverage />
            <InsuranceType />
            <InsuranceCost />
            <InsuranceForm />
            <Faq />
        </div>
    );
};

export default ServiceDetailsPage;
