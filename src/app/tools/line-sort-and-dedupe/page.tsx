import LineSortAndDedupeComponent from "@/app/tools/line-sort-and-dedupe/LineSortAndDedupeComponent";
import { getCurrentUser } from "@/actions/user";

const LineSortAndDedupe = async () => {
  const { user } = await getCurrentUser();
  return <LineSortAndDedupeComponent user={user} />;
};
export default LineSortAndDedupe;
