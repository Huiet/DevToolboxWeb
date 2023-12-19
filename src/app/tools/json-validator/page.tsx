import JsonValidatorComponent from "@/app/tools/json-validator/JsonValidatorComponent";
import { getCurrentUser } from "@/actions/user";

const JsonValidator = async () => {
  const { user } = await getCurrentUser();
  return <JsonValidatorComponent user={user} />;
};
export default JsonValidator;
