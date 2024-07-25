import TotalBalanceDisplay from "./TotalBalanceDisplay";
import TransactionList from "./TransactionList";
import plusSign from "@/assets/icons/plus.svg";

import WelcomeDisplay from "./WelcomeDisplay";
export default function Home() {
  return (
    <>
      <div className="p-4">
        <header className="flex justify-between pt-6 pb-5">
          <WelcomeDisplay />
        </header>
        <main className="grid gap-6">
          <TotalBalanceDisplay />
          <TransactionList />
        </main>
      </div>
      <footer className="bg-white h-10">
        <img src={plusSign} alt="plus sign" />
      </footer>
    </>
  );
}
