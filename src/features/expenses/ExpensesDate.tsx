"use client";

import * as React from "react";
import { format } from "date-fns";
import dateIcon from "@/assets/icons/date.svg";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function ExpensesDate() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-semibold text-base p-0 border-none gap-3 hover:bg-transparent",
            !date && "text-muted-foreground"
          )}
        >
          <div className="bg-[#3C3725] bg-opacity-15 p-3 rounded-full">
            <img src={dateIcon} alt="date" />
          </div>
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-[#2A405B]">Date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
