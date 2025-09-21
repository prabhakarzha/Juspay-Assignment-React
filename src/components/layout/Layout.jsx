import Header from "./Header";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";

const Layout = () => {
  return (
    <div>
      <div className="grid grid-cols-12 min-h-screen text-white">
        <section className=" col-span-2 h-[100%] bg-[#0f0f0f]">
          <Sidebar />
        </section>
        <section className="border border-gray-400 col-span-7 h-[100%] bg-[#0f0f0f]">
          <Header />
        </section>
        <section className=" col-span-3 h-[100%] bg-[#0f0f0f]">
          <Rightbar />
        </section>
      </div>
      {/* <div className="w-full bg-pink-500 h-10"></div> */}
    </div>
  );
};

export default Layout;
