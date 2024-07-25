import TotalBalanceDisplay from "./TotalBalanceDisplay";
import TransactionList from "./TransactionList";
import plusSign from "@/assets/icons/plus.svg";

import WelcomeDisplay from "./WelcomeDisplay";
export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-4 h-full">
        <header className="flex justify-between pt-6 pb-5">
          <WelcomeDisplay />
        </header>
        <main className="grid gap-6">
          <TotalBalanceDisplay />
          <TransactionList />
        </main>
      </div>
      <footer className="bg-white flex h-20 rounded-t-3xl relative">
        <div className=" absolute bottom-8 left-40 p-3 bg-gradient-to-br from-[#243B33] to-[#7C8C7C] rounded-full">
          <img src={plusSign} alt="plus sign" className=" size-7 " />
        </div>
      </footer>
    </div>
  );
}
