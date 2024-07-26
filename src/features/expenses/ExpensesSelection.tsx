import date from "@/assets/icons/date.svg";
import category from "@/assets/icons/category.svg";
import note from "@/assets/icons/note.svg";
export default function ExpensesSelection() {
  return (
    <div className="grid gap-4">
      <div className="flex justify-between bg-white p-4 rounded-2xl shadow-md">
        <div className="flex place-items-center gap-3">
          <div className="bg-[#3C3725] bg-opacity-15 p-3 rounded-full">
            <img src={category} alt="category" />
          </div>
          <h1 className="font-semibold">Category</h1>
        </div>
      </div>
      <div className="flex justify-between bg-white p-4 rounded-2xl shadow-md">
        <div className="flex place-items-center gap-3">
          <div className="bg-[#3C3725] bg-opacity-15 p-3 rounded-full">
            <img src={note} alt="note" />
          </div>
          <h1 className="font-semibold">Note</h1>
        </div>
      </div>
      <div className="flex justify-between bg-white p-4 rounded-2xl shadow-md">
        <div className="flex place-items-center gap-3">
          <div className="bg-[#3C3725] bg-opacity-15 p-3 rounded-full">
            <img src={date} alt="date" />
          </div>
          <h1 className="font-semibold">Today</h1>
        </div>
      </div>
    </div>
  );
}
