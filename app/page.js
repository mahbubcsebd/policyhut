import CustomerFeedback from "@/components/about/CustomerFeedBackTwo";
import HomeBlog from "@/components/blog/HomeBlog";
import ChooseUs from "@/components/home/ChooseUs";
import Hero from "@/components/home/Hero";
import HomeServices from "@/components/home/HomeServices";
import Insurance from "@/components/home/Insurance";
import InsuranceForm from "@/components/home/InsuranceForm";
import InsurancePlan from "@/components/home/InsurancePlan";
import Policy from "@/components/home/Policy";
import PremiumClient from "@/components/home/PremiumClient";

export const metadata = {
    title: 'Policyhut | Home',
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Policy />
      <Insurance/>
      <InsurancePlan />
      <ChooseUs/>
      <PremiumClient/>
      <HomeServices/>
      <CustomerFeedback/>
      <HomeBlog/>
      <InsuranceForm/>
    </div>
  )
}
