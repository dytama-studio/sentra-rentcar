/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import moment from "moment";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { toast } from "react-toastify";
import ClickOutside from "@/components/clickoutside";

export type DateRangeValue = {
  startDate: Date;
  endDate: Date;
  key?: string;
};

type Props = {
  onChange?: (range: DateRangeValue) => void;
  defaultStartDate?: Date;
  defaultEndDate?: Date;
  maxRangeDays?: number;
};

const InputDateRange = ({
  onChange,
  defaultStartDate,
  defaultEndDate,
  maxRangeDays = 30,
}: Props) => {
  const initialRange = {
    startDate: defaultStartDate ?? new Date(),
    endDate: defaultEndDate ?? new Date(),
    key: "selection",
  };

  const [open, setOpen] = useState(false);
  const [tempRange, setTempRange] = useState([initialRange]);
  const [displayRange, setDisplayRange] = useState([initialRange]);

  useEffect(() => {
    if (defaultStartDate && defaultEndDate) {
      setTempRange([
        {
          startDate: defaultStartDate,
          endDate: defaultEndDate,
          key: "selection",
        },
      ]);

      setDisplayRange([
        {
          startDate: defaultStartDate,
          endDate: defaultEndDate,
          key: "selection",
        },
      ]);
    }
  }, []);

  const handleTempChange = (item: any) => {
    const start = moment(item.selection.startDate);
    const end = moment(item.selection.endDate);
    const diffDays = end.diff(start, "days");

    if (diffDays > maxRangeDays) {
      toast.error(`Maksimum rentang tanggal adalah ${maxRangeDays} hari.`);
      return;
    }

    setTempRange([item.selection]);
  };

  const handleApply = () => {
    setDisplayRange(tempRange);
    onChange?.(tempRange[0]);
    setOpen(false);
  };

  const formatDisplay = `${moment(displayRange[0].startDate).format("DD MMM")} - ${moment(
    displayRange[0].endDate
  ).format("DD MMM")}`;

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm text-sm bg-white hover:bg-gray-50 focus:outline-none"
      >
        {formatDisplay}
        <svg
          className="inline ml-2 w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ClickOutside onClick={() => setOpen(false)}>
          <div
            className="absolute z-10 mt-2
    left-0 sm:left-auto sm:right-0
    w-auto sm:w-auto
    bg-white border rounded shadow"
          >
            <DateRange
              editableDateInputs={true}
              onChange={handleTempChange}
              moveRangeOnFirstSelection={false}
              ranges={tempRange}
              direction="vertical"
              rangeColors={["#3B82F6"]}
            />
            <div className="px-3 pb-3 bg-white border-t border-gray-200">
              <button
                onClick={handleApply}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded mt-3"
              >
                Terapkan
              </button>
            </div>
          </div>
        </ClickOutside>
      )}
    </div>
  );
};

export default InputDateRange;
