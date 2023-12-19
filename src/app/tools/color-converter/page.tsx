import ColorConverterComponent from "@/app/tools/color-converter/ColorConverterComponent";
import { getCurrentUser } from "@/actions/user";

const ColorConverter = async () => {
  const { user } = await getCurrentUser();
  return <ColorConverterComponent user={user} />;
};
export default ColorConverter;
