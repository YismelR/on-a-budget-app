import { expensesList } from "@/listOfExpenses/expensesList";
export default function TransactionList() {
  return (
    <section className="grid gap-4">
      <div className="flex justify-between">
        <p className="font-semibold">Transactions</p>
        <p className="font-medium text-[#A1B3C8]">View All</p>
      </div>
      {expensesList.map((expenses, id) => {
        return (
          <div
            className="flex justify-between bg-white p-4 rounded-2xl shadow-md"
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
    </section>
  );
}
