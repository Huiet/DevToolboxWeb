import HashGeneratorComponent from "@/app/tools/hash-generator/HashGeneratorComponent";
import { getCurrentUser } from "@/actions/user";

const HashGenerator = async () => {
  const { user } = await getCurrentUser();
  return <HashGeneratorComponent user={user} />;
};
export default HashGenerator;
