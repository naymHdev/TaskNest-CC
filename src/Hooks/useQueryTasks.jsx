import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";
import useAuth from "./useAuth";

const useQueryTasks = () => {
  const { user, loading } = useAuth();

  const { data: qTask, refetch } = useQuery({
    queryKey: ["qTask"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await PrivateAxios.get(`/taskMate/tasks/${user?.email}`);
      console.log(res.data);
      return res?.data;
    },
  });
  return [qTask, refetch];
};

export default useQueryTasks;
