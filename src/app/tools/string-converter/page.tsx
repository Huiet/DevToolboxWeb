import StringConverterComponent from "@/app/tools/string-converter/StringConverterComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const StringConverterPage = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <StringConverterComponent user={user} />;
};
export default StringConverterPage;
