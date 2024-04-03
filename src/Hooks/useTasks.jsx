import { useQuery } from "@tanstack/react-query";
import PrivateAxios from "./PrivateAxios";

const useTasks = () => {
  const { refetch, data: isTasks = [] } = useQuery({
    queryKey: ["isTasks"],
    queryFn: async () => {
      try {
        const res = await PrivateAxios.get("/taskMate/tasks");
        // console.log(res.data);
        return res.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        throw new Error("Failed to fetch tasks");
      }
    },
  });

  return [isTasks, refetch];
};

export default useTasks;
