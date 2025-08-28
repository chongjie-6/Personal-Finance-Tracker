"use client";

import { CsvEntry } from "@/types/csvEntries";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CsvEntry>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "cost",
    header: "Cost",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "ongoingTotal",
    header: "Ongoing Total",
  },
];
