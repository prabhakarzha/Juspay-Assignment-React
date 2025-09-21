import CustomHeader from "../../wrapper/CustomHeader";
import Sidebar from "../layout/Sidebar";
import OrderTable from "./OrderTable";

const OrderLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-12 min-h-screen text-white">
        <section className=" col-span-2 h-[100%] bg-[#0f0f0f]">
          <Sidebar />
        </section>
        <section className="border border-gray-900 col-span-10 h-[100%] bg-[#0f0f0f]">
          <CustomHeader />
          <OrderTable />
        </section>
      </div>
      {/* <div className="w-full bg-pink-500 h-10"></div> */}
    </div>
  );
};

export default OrderLayout;
