import UrlParserComponent from "@/app/tools/url-parser/UrlParserComponent";
import { getCurrentUser } from "@/actions/user";

const UrlParserPage = async () => {
  const { user} = await getCurrentUser();
  return <UrlParserComponent user={user}/>;
};
export default UrlParserPage;
