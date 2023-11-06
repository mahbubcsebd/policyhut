import CustomerFeedback from '@/components/about/CustomerFeedback';
import Banner from '@/components/global/Banner';
import InsuranceForm from '@/components/home/InsuranceForm';


export const metadata = {
    title: 'Policyhut | Testimonials',
};

const page = () => {
  return (
      <div
          id="testimonials"
          className="testimonials"
      >
          <Banner />
          <CustomerFeedback />
          <InsuranceForm />
      </div>
  );
}

export default page;