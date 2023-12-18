import QrCodeGeneratorComponent from "@/app/tools/qrcode-generator/QrCodeGeneratorComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const QrCodeGeneratorPage = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <QrCodeGeneratorComponent user={user} />;
};
export default QrCodeGeneratorPage;
