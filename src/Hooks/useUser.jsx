import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import SecureAxios from "../Auth/SecureAxios";

const useUser = () => {
  const { user } = useAuth();

  const { data: isUser, refetch } = useQuery({
    queryKey: ["isUser"],
    queryFn: async () => {
      const res = await SecureAxios.get(`/taskMate/users/${user?.email}`);
      return res.data;
    },
  });
  return { isUser, refetch };
};

export default useUser;
