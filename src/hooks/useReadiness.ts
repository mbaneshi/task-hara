import { useQuery } from "react-query";
import { setData } from "../features/picture/pictureSlice";
import { useAppDispatch, useAppSelector } from "./../app/hooks";
const useReadiness = () => {
  const fetchPicture = async () => {
    const res = await fetch(
      "https://61ee6204d593d20017dbadb4.mockapi.io/items"
    );

    return res.json();
  };
  const dispatch = useAppDispatch();

  const { data, isError, isLoading } = useQuery("pictures", fetchPicture);

  dispatch(setData(data));

  return { data, isError, isLoading };
};

export default useReadiness;
