import Banner from "@/components/global/Banner";
import ChooseUs from "@/components/home/ChooseUs";
import Team from "@/components/team/Team";

export const metadata = {
    title: 'Policyhut | Team',
};

const page = () => {
  return (
      <div className="team-page">
          <Banner
              title="Our Team"
              breadcrumb="home / Our Team"
          />
          <Team teamMember="8" />
          <ChooseUs />
      </div>
  );
}

export default page