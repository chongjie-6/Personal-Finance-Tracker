"use client";
import Upload from "@/components/Upload";
import { CsvEntry } from "@/types/csvEntries";
import { useState } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { columns } from "@/components/ui/columns";

export default function Home() {
  const [csvData, setCsvData] = useState<CsvEntry[]>([]);

  return (
    <div className="page">
      {csvData.length ? (
        <DataTable columns={columns} data={csvData}></DataTable>
      ) : (
        ""
      )}
      <Upload setCsvData={setCsvData} />
    </div>
  );
}
