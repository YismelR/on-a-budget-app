import plusSign from "@/assets/icons/plus.svg";

export default function AddNewEntryButton() {
  return (
    <div className=" absolute bottom-8 left-40 p-3 bg-gradient-to-br from-[#243B33] to-[#7C8C7C] rounded-full shadow-plusSignShadow cursor-pointer">
      <img src={plusSign} alt="plus sign" className=" size-7 " />
    </div>
  );
}
