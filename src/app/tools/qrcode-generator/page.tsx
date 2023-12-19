import QrCodeGeneratorComponent from "@/app/tools/qrcode-generator/QrCodeGeneratorComponent";
import { getCurrentUser } from "@/actions/user";

const QrCodeGeneratorPage = async () => {
  const { user } = await getCurrentUser();
  return <QrCodeGeneratorComponent user={user} />;
};
export default QrCodeGeneratorPage;
