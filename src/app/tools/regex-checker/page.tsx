import RegexCheckerComponent from "@/app/tools/regex-checker/RegexCheckerComponent";
import { getCurrentUser } from "@/actions/user";

const RegexCheckerPage = async () => {
  const { user } = await getCurrentUser();
  return <RegexCheckerComponent user={user} />;
};
export default RegexCheckerPage;
