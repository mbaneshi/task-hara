import { useAppSelector } from "../app/hooks";

const useStoreData = () => {
  const data = useAppSelector((state) => state.picture.data);
  const isError = useAppSelector((state) => state.picture.err);
  const isLoading = useAppSelector((state) => state.picture.islodings);
  return { data, isError, isLoading };
};

export default useStoreData;
