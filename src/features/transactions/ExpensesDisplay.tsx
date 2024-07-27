import { ScrollArea } from "@/components/ui/scroll-area";
import { expensesList } from "@/listOfExpenses/expensesList";

export default function ExpensesDisplay() {
  return (
    <section className="grid gap-4">
      <ScrollArea className="h-[240px] rounded-md ">
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
              <div className="flex text-right place-items-center">
                <p>-${expenses.Total}</p>
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </section>
  );
}
