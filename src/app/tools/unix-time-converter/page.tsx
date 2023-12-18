import UnixTimeConverterComponent from "@/app/tools/unix-time-converter/UnixTimeConverterComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const UnixTimeConverter = async () => {
  const { user} = await getUserAndSubscriptionState();
  return <UnixTimeConverterComponent user={user} />;
};
export default UnixTimeConverter;
