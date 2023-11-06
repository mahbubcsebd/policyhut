import AboutPolicy from "@/components/about/AboutPolicy";
import CustomerFeedback from "@/components/about/CustomerFeedback";
import Banner from "@/components/global/Banner";
import Insurance from "@/components/home/Insurance";
import PremiumClient from "@/components/home/PremiumClient";
import Team from "@/components/team/Team";
import CounterUp from "../../components/about/CounterUp";


export const metadata = {
    title: 'Policyhut | About',
};

const page = () => {
    return (
        <div>
            <Banner />
            <AboutPolicy />
            <Insurance />
            <CounterUp />
            <PremiumClient />
            <Team teamMember="4" />
            <CustomerFeedback />
        </div>
    );
};

export default page;
