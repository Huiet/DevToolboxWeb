import LineSortAndDedupeComponent from "@/app/tools/line-sort-and-dedupe/LineSortAndDedupeComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const LineSortAndDedupe = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <LineSortAndDedupeComponent user={user} />;
};
export default LineSortAndDedupe;
