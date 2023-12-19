import UnixTimeConverterComponent from "@/app/tools/unix-time-converter/UnixTimeConverterComponent";
import { getCurrentUser } from "@/actions/user";

const UnixTimeConverter = async () => {
  const { user} = await getCurrentUser();
  return <UnixTimeConverterComponent user={user} />;
};
export default UnixTimeConverter;
