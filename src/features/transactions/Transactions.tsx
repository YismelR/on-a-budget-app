import backButton from "@/assets/icons/back-arrow.svg";
import settings from "@/assets/icons/settings.svg";
import { NavLink } from "react-router-dom";
import TabSwitch from "./TabSwitch";
export default function Transactions() {
  return (
    <div className="p-4 h-full">
      <header className="flex justify-between pt-6 pb-5">
        <div className="flex gap-3 place-items-center">
          <NavLink to="/">
            <img
              src={backButton}
              alt="back button"
              className="bg-white p-2 rounded-xl shadow-md"
            />
          </NavLink>
          <h1 className="font-semibold text-xl">Transactions</h1>
        </div>
        <img
          src={settings}
          alt="settings"
          className="bg-white p-2 rounded-xl shadow-md"
        />
      </header>
      <main>
        <TabSwitch />
      </main>
    </div>
  );
}
