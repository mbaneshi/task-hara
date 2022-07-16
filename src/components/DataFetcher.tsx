import { useAppDispatch } from "../app/hooks";
import {
  setData,
  setError,
  setIsLoading,
} from "../features/picture/pictureSlice";
import useReadiness from "../hooks/useReadiness";

export default function DataFetcher(props: any) {
  const { data, isLoading, isError } = useReadiness();
  
  const dispatch = useAppDispatch();

  dispatch(setData(data));
  dispatch(setIsLoading(isLoading));
  dispatch(setError(isError));

  return <>{props.children}</>;
}
