import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDebouncedCallback } from "use-debounce";
import { useLocation, useNavigate, useSearchParams } from "react-router";

import { Input } from "../Input";

interface SearchProps {
  className?: string;
  id?: string;
}

export function Search({ className, id }: SearchProps) {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("query", query);
    navigate(`${location.pathname}?${params.toString()}`);
  }, 500);

  return (
    <>
      <Input.Root id={id} className={className}>
        <Input.Icon
          className="text-gray-400"
          position="left"
          icon={FaMagnifyingGlass}
        />
        <Input.Bar
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Find the user"
          type="text"
          defaultValue={searchParams.get("query") ?? ""}
        />
      </Input.Root>
    </>
  );
}
