import { $Fetch } from "nitropack";
import { FetchError } from "ofetch";

export default function apiCaller<ResT = any, ErrT = any>(
  func: () => ReturnType<$Fetch>
): Promise<{ data?: ResT; error?: FetchError<ErrT> }> {
  return func()
    .then((data: any) => ({ data }))
    .catch((error) => ({ error }));
}
