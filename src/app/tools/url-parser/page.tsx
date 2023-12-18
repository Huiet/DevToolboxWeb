import UrlParserComponent from "@/app/tools/url-parser/UrlParserComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const UrlParserPage = async () => {
  const { user} = await getUserAndSubscriptionState();
  return <UrlParserComponent user={user}/>;
};
export default UrlParserPage;
