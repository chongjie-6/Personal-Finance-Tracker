import Image from "next/image";
export default function Upload() {
  return (
    <form className="relative border-gray-500 border-2 border-dashed h-full hover:bg-gray-200 transition-all duration-75">
      <input id="csv" accept=".csv" type="file" className="uploadFile" />
      <div className="space-y-3 flex flex-col items-center justify-center h-full">
        <Image
          priority={false}
          className="opacity-70"
          src="/upload.svg"
          alt="Upload Icon"
          width={64}
          height={64}
        ></Image>
        <label htmlFor="csv" className="font-medium p-2">
          Drop your CSV file here
        </label>
        <span className="text-gray-500 p-2">Or click to browse files </span>
      </div>
    </form>
  );
}
