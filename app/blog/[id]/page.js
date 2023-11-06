import BlogDetails from "@/components/blog/BlogDetails";
import Banner from "@/components/global/Banner";


export const metadata = {
    title: 'Policyhut | Blog Details',
};


const page = () => {
  return (
      <div className="blogDetailsPage">
          <Banner />
          <BlogDetails />
      </div>
  );
}

export default page
