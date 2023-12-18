import RegexCheckerComponent from "@/app/tools/regex-checker/RegexCheckerComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const RegexCheckerPage = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <RegexCheckerComponent user={user} />;
};
export default RegexCheckerPage;
