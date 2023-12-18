import HashGeneratorComponent from "@/app/tools/hash-generator/HashGeneratorComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const HashGenerator = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <HashGeneratorComponent user={user} />;
};
export default HashGenerator;
