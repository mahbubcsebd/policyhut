import Link from "next/link";
import { SlMagnifier } from "react-icons/sl";


const BlogSidebar = () => {
  return (
      <div className="sidebar">
          <div className="single-sidebar mb-4">
              <h4 className="sidebar-title">Search Here</h4>
              <div className="searchBox">
                  <form action="#">
                      <input
                          type="text"
                          placeholder="Search Here..."
                      />
                      <button type="submit">
                          <SlMagnifier />
                      </button>
                  </form>
              </div>
          </div>
          <div className="single-sidebar mb-4">
              <h4 className="sidebar-title">Categories</h4>
              <div className="categories">
                  <ul className="categories-collection">
                      <li>
                          <Link href="#">
                              Business Insurance <span>(3)</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="#">
                              Health Insurance <span>(3)</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="#">
                              Life Insurance <span>(3)</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="#">
                              Marriage Insurance <span>(3)</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="#">
                              Travel Insurance <span>(3)</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="#">
                              Cyber Insurance <span>(3)</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="#">
                              Vehicle Insurance <span>(3)</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="#">
                              Vehicle Insurance <span>(3)</span>
                          </Link>
                      </li>
                      <li>
                          <Link href="#">
                              Fire Insurance <span>(3)</span>
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="single-sidebar mb-4">
              <h4 className="sidebar-title">Tag</h4>
              <div className="categories">
                  <ul className="tag-collection">
                      <li>
                          <Link href="#">Business</Link>
                      </li>
                      <li>
                          <Link href="#">Insurance</Link>
                      </li>
                      <li>
                          <Link href="#">Home</Link>
                      </li>
                      <li>
                          <Link href="#">Fire</Link>
                      </li>
                      <li>
                          <Link href="#">Cyber</Link>
                      </li>
                      <li>
                          <Link href="#">Travel</Link>
                      </li>
                      <li>
                          <Link href="#">Business</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default BlogSidebar