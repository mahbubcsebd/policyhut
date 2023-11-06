import Billing from '@/components/billing/Billing';
import Faq from '@/components/faq/Faq';
import Banner from '@/components/global/Banner';

export const metadata = {
    title: 'Policyhut | Billing & Payment',
};

const page = () => {
  return (
    <div>
      <Banner />
      <Billing/>
      <Faq/>
    </div>
  )
}

export default page