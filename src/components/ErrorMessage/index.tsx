import { AxiosResponse } from "axios";

type ErrorMessageProps = {
  error: AxiosResponse;
};

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (error.data?.status !== 200) return null;

  return (
    <div>
      <h2>Oh, no!</h2>
      <p>
        Unable to process your request:{" "}
        <strong>{error.data?.fault.faultstring}</strong>{" "}
      </p>
    </div>
  );
}
