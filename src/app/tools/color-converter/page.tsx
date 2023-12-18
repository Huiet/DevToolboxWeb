import ColorConverterComponent from "@/app/tools/color-converter/ColorConverterComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const ColorConverter = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <ColorConverterComponent user={user} />;
};
export default ColorConverter;
