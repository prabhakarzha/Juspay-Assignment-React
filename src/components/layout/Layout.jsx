import Header from "./Header";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";

const Layout = () => {
  return (
    <div>
      <div className="grid grid-cols-12 min-h-screen text-white">
        <section className=" md:col-span-2 h-[100%] bg-[#0f0f0f]">
          <Sidebar />
        </section>
        <section className="border border-gray-900 md:col-span-7 h-[100%] bg-[#0f0f0f] col-span-10">
          <Header />
        </section>
        <section className=" md:col-span-3 h-[100%] bg-[#0f0f0f]">
          <Rightbar />
        </section>
      </div>
    </div>
  );
};

export default Layout;
