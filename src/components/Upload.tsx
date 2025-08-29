"use client";
import { CsvEntry } from "@/types/csvEntries";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function Upload({
  setCsvData,
}: {
  setCsvData: Dispatch<SetStateAction<CsvEntry[]>>;
}) {
  const handleCSV = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const data = (await e.target.files[0].text()).replaceAll('"', "");

      // Split the data into new entries in each line
      const filteredEntries = data.split("\n");

      // Then split the data based on commas
      const splitCommas = filteredEntries.map((data) => data.split(","));

      // We also don't need the last element with how we're filtering
      splitCommas?.pop();

      // Finally we convert each entry into an object
      const filteredObjects = splitCommas?.map((entry) => {
        const [date, costNumber, description, ongoingTotalString] = entry;

        // Convert cost and ongoing total into integer
        const cost = parseFloat(costNumber);
        const ongoingTotal = parseFloat(ongoingTotalString);

        return { date, cost, description, ongoingTotal };
      });

      setCsvData(filteredObjects || []);
    }
  };

  return (
    <form className="flex flex-col items-center justify-center relative bg-white border-gray-500 border-2 border-dashed w-full hover:bg-gray-200 transition-all duration-75 max-w-1/2 sm:max-w-1/2 h-80">
      <input
        id="csv"
        accept=".csv"
        type="file"
        className="uploadFile"
        onChange={(e) => handleCSV(e)}
      />
      <div className="space-y-3 flex flex-col items-center justify-center text-balance text-center">
        <Image
          priority={true}
          className="opacity-70"
          src="/upload.svg"
          alt="Upload Icon"
          width={64}
          height={64}
        ></Image>
        <label htmlFor="csv" className="font-medium px-2">
          Drop your CSV file here
        </label>
        <span className="text-gray-500 px-2">Or click to browse files </span>
      </div>
    </form>
  );
}
