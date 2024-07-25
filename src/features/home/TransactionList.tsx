import { expensesList } from "@/listOfExpenses/expensesList";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavLink } from "react-router-dom";
export default function TransactionList() {
  return (
    <section className="grid gap-4">
      <div className="flex justify-between">
        <p className="font-semibold">Transactions</p>
        <NavLink to="/transactions">
          <p className="font-medium text-[#A1B3C8] cursor-pointer">View All</p>
        </NavLink>
      </div>
      <ScrollArea className="h-[240px] rounded-md ">
        {expensesList.map((expenses, id) => {
          return (
            <div
              className="flex justify-between bg-white p-4 rounded-2xl shadow-md mb-4"
              key={id}
            >
              <div className="flex place-items-center gap-3">
                <div
                  className={`${expenses.bgColor} bg-opacity-15 p-3 rounded-full`}
                >
                  <img src={expenses.src} alt={expenses.alt} />
                </div>
                <h1 className="font-semibold">{expenses.title}</h1>
              </div>
              <div className="text-right">
                <p>-${expenses.Total}</p>
                <p className="text-[#A1B3C8]">{expenses.date}</p>
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </section>
  );
}
