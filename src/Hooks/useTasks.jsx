import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useTasks = () => {
  const { refetch, data: isTasks = [] } = useQuery({
    queryKey: ["isTasks"],
    queryFn: async () => {
      const res = await PrivateAxios.get("/taskMate/tasks");
      return res.data;
    },
  });

  return [isTasks, refetch];
};

export default useTasks;
