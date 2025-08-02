import { useNavigate, useSearchParams } from "react-router";
import { mockedData } from "../data/mock";
import { Button } from "../components/Button";
import { format } from "date-fns";
import { Search } from "../components/Search";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

const fuse = new Fuse(mockedData, {
  keys: ["name", "email"],
  threshold: 0.3,
});

export default function ListPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [filteredData, setFilteredData] = useState(mockedData);

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    if (!query) {
      setFilteredData(mockedData);
      return;
    }

    const result = fuse.search(query);
    setFilteredData(result.map((r) => r.item));
  }, [searchParams]);

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <Search id="input-search" className="w-96" />
        <Button
          id="button-add"
          className="min-w-fit"
          onClick={() => navigate("/form")}
        >
          Add New
        </Button>
      </div>
      <h2 className="my-4 text-xl font-bold">Users</h2>

      <div>
        <table className="min-w-full border-separate border-spacing-y-1 w-full">
          <thead>
            <tr className="text-white">
              <th className="font-medium px-4 py-2 text-left">#</th>
              <th id="button-1" className="font-medium px-4 py-2 text-left">
                Name
              </th>
              <th className="font-medium px-4 py-2 text-left">Email</th>
              <th className="font-medium px-4 py-2 text-left">Birthday</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className=" transition-all hover:bg-gray-850 opacity-90"
              >
                <td className="px-4 py-2 first:rounded-l-xl">{index + 1}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2 last:rounded-r-xl">
                  {format(item.birthday, "dd/MM/yyyy")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <div className="text-center text-gray-400 mt-4">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
}
