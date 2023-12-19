import Bas64EncoderComponent from "@/app/tools/base64encoder/Base64EncoderClientComponent";
import { getCurrentUser } from "@/actions/user";

const Base64Encoder = async () => {
  const { user } = await getCurrentUser();
  return <Bas64EncoderComponent user={user} />;
};
export default Base64Encoder;
