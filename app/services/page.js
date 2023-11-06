import CounterUp from '@/components/about/CounterUp';
import CustomerFeedback from '@/components/about/CustomerFeedback';
import Banner from '@/components/global/Banner';
import InsuranceForm from '@/components/home/InsuranceForm';
import Services from '@/components/services/Services';

export const metadata = {
    title: 'Policyhut | Services',
};

const page = () => {
    return (
        <div className="team-page">
            <Banner />
            <Services />
            <CounterUp />
            <CustomerFeedback />
            <InsuranceForm/>
        </div>
    );
};

export default page;