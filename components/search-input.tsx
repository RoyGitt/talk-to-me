"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useDebounce from "@/hooks/use-debounce";
import qs from "qs";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");

  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = qs.stringify(
      {
        name: debouncedValue || undefined,
        categoryId: categoryId || undefined,
      },
      { skipNulls: true }
    );

    const url = `?${query}`;

    router.push(url);
  }, [debouncedValue, router, categoryId]);

  return (
    <div className="relative max-w-[40rem] flex items-center border p-2 py-1 rounded-md text-muted-foreground bg-primary/5">
      <Search size={20} className="" />
      <Input
        onChange={handleChange}
        placeholder="Search..."
        aria-label="Search Input"
        className="w-full p-3 border-none focus-visible:ring-0 text-lg"
      />
    </div>
  );
};
export default SearchInput;
