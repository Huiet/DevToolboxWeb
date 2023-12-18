import MarkdownEditorComponent from "@/app/tools/markdown-editor/MarkdownEditorComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const MarkdownEditorPage = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <MarkdownEditorComponent user={user} />;
};
export default MarkdownEditorPage;
