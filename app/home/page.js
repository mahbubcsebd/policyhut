import AboutPolicy from "@/components/about/AboutPolicy";
import CounterUp from "@/components/about/CounterUp";
import CustomerFeedback from "@/components/about/CustomerFeedback";
import ChooseUs from "@/components/home/ChooseUs";
import HeroTwo from "@/components/home/HeroTwo";
import Insurance from "@/components/home/Insurance";
import InsuranceForm from "@/components/home/InsuranceForm";
import InsurancePlan from "@/components/home/InsurancePlan";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";

export const metadata = {
    title: 'Policyhut | Home',
};

const page = () => {
  return (
      <div>
          <HeroTwo />
          <Insurance />
          <AboutPolicy />
          <Services />
          <ChooseUs />
          <CounterUp />
          <Team/>
          <InsurancePlan/>
          <CustomerFeedback/>
          <InsuranceForm/>
      </div>
  );
}

export default page