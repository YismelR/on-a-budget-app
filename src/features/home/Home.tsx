import AddNewEntryButton from "./AddNewEntryButton";
import TotalBalanceDisplay from "./TotalBalanceDisplay";
import TransactionList from "./TransactionList";

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
      <footer className="bg-white flex h-20 rounded-t-3xl relative shadow-footerShadow">
        <AddNewEntryButton />
      </footer>
    </div>
  );
}
