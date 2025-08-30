"use client";
import Upload from "@/components/Upload";
import { CsvEntry } from "@/types/csvEntries";
import { useState } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { columns } from "@/components/ui/columns";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Home() {
  const [csvData, setCsvData] = useState<CsvEntry[]>([]);
  const data = csvData.map((data) => {
    if (data.cost < 1000 && data.cost > -1000) {
      return { name: data.description, value: data.cost };
    }
  });
  return (
    <div className="page">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      {csvData.length ? (
        <DataTable columns={columns} data={csvData}></DataTable>
      ) : (
        ""
      )}
      <Upload setCsvData={setCsvData} />
    </div>
  );
}
