import StringConverterComponent from "@/app/tools/string-converter/StringConverterComponent";
import { getCurrentUser } from "@/actions/user";

const StringConverterPage = async () => {
  const { user } = await getCurrentUser();
  return <StringConverterComponent user={user} />;
};
export default StringConverterPage;
