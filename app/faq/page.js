import Faq from "@/components/faq/Faq";
import Solutions from "@/components/faq/Solutions";
import Banner from "@/components/global/Banner";
import InsuranceForm from "@/components/home/InsuranceForm";

export const metadata = {
    title: 'Policyhut | FAQ',
};

const page = () => {
    return (
        <div
            id="faqsPage"
            className="faqsPage"
        >
            <Banner />
            <Faq />
            <Solutions/>
            <InsuranceForm/>
        </div>
    );
};

export default page;
