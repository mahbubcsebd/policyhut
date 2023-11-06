import BlogAll from "@/components/blog/BlogAll";
import Banner from "@/components/global/Banner";

export const metadata = {
    title: 'Policyhut | Blog',
};

function Blog() {
    return (
        <div id="blog-page" className="blog-page">
            <div className="blog-page-area">
                <Banner />
                <BlogAll/>
            </div>
        </div>
    );
}

export default Blog;
