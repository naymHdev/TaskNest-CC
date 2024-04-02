import { useQuery } from "@tanstack/react-query";
import SecureAxios from "../Auth/SecureAxios";

const useTasks = () => {
  const { refetch, data: isTasks = [] } = useQuery({
    queryKey: ["isTasks"],
    queryFn: async () => {
      const res = await SecureAxios.get("/taskMate/tasks");
      return res.data;
    },
  });

  return [isTasks, refetch];
};

export default useTasks;
