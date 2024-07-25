import downArrow from "@/assets/icons/down-arrow.svg";
import upArrow from "@/assets/icons/up-arrow.svg";
export default function TotalBalanceDisplay() {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-[#243B33] to-[#7C8C7C] text-[#F3F4F6] grid grid-cols-2 pt-8 px-4 pb-4 gap-8 shadow-xl">
      <div className="flex flex-col col-span-2 justify-self-center gap-3">
        <p className="text-center">Total Balance</p>
        <h1 className="text-4xl">$2,200.00</h1>
      </div>
      <div className="flex place-items-center gap-3">
        <img
          src={downArrow}
          alt="down arrow"
          className="bg-[#64848C] rounded-full p-1"
        />
        <div>
          <p className="">Income</p>
          <p>3,000.00</p>
        </div>
      </div>
      <div className="flex place-items-center gap-3">
        <img
          src={upArrow}
          alt="up arrow"
          className="bg-[#64848C] rounded-full p-1"
        />
        <div>
          <p>Expenses</p>
          <p>800.00</p>
        </div>
      </div>
    </section>
  );
}
