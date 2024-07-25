import TotalBalanceDisplay from "./TotalBalanceDisplay";
import TransactionList from "./TransactionList";

import WelcomeDisplay from "./WelcomeDisplay";
export default function Home() {
  return (
    <div className="p-4 h-full">
      <header className="flex justify-between pt-6 pb-5">
        <WelcomeDisplay />
      </header>
      <main className="grid gap-6">
        <TotalBalanceDisplay />
        <TransactionList />
      </main>
    </div>
  );
}
