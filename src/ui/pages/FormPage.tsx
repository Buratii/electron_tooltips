import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useMask } from "@react-input/mask";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { mockedData } from "../data/mock";

type FormData = {
  name: string;
  email: string;
  birthday: string;
};

export default function FormPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const inputMaskRef = useMask({
    mask: "__/__/____",
    replacement: { _: /\d/ },
  });

  const {
    ref: hookFormRef,
    onChange,
    ...restRegister
  } = register("birthday", { required: true });

  const combinedRef = (el: HTMLInputElement | null) => {
    if (el) {
      inputMaskRef.current = el;
      hookFormRef(el);
    }
  };

  const onSubmit = (data: FormData) => {
    const [day, month, year] = data.birthday.split("/");

    const dateObject = new Date(Number(year), Number(month) - 1, Number(day));
    const isoString = dateObject.toISOString();

    const newId =
      mockedData.length > 0 ? mockedData[mockedData.length - 1].id + 1 : 1;

    mockedData.push({
      id: newId,
      name: data.name,
      email: data.email,
      birthday: isoString,
    });

    navigate("/list");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">New user</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Input.Root id="input-name">
            <Input.Bar
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
          </Input.Root>
          {errors.name && (
            <span className="ml-6 mt-2 text-red-500 text-sm">
              Name is required
            </span>
          )}
        </div>

        <div>
          <Input.Root id="input-email">
            <Input.Bar
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </Input.Root>
          {errors.email && (
            <span className="ml-6 mt-2 text-red-500 text-sm">
              Email is required
            </span>
          )}
        </div>

        <div>
          <Input.Root id="input-birthday">
            <Input.Bar
              ref={combinedRef}
              placeholder="Birthday"
              maxLength={10}
              {...restRegister}
              onChange={onChange}
            />
          </Input.Root>
          {errors.birthday && (
            <span className="ml-6 mt-2 text-red-500 text-sm">
              Birthday is required
            </span>
          )}
        </div>

        <div className="flex gap-4 justify-end">
          <Button
            id="cancel-button"
            type="button"
            variant="outlined"
            className="border-gray-500 text-gray-500"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button id="submit-button" type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
