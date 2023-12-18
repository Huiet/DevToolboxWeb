import JsonValidatorComponent from "@/app/tools/json-validator/JsonValidatorComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const JsonValidator = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <JsonValidatorComponent user={user} />;
};
export default JsonValidator;
