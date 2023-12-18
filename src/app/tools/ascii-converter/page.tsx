import { getUserAndSubscriptionState } from "@/actions/user";
import AsciiConverterComponent from "@/app/tools/ascii-converter/AsciiConverterComponent";
const AsciiConverterPage = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <AsciiConverterComponent user={user} />;
};
export default AsciiConverterPage;
