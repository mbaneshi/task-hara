import { useQuery } from "react-query";
const useReadiness = () => {
  const fetchPicture = async () => {
    const res = await fetch(
      "https://61ee6204d593d20017dbadb4.mockapi.io/items"
    );

    return res.json();
  };

  const { data, isError, isLoading } = useQuery("pictures", fetchPicture);

  return { data, isError, isLoading };
};

export default useReadiness;
