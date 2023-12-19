import MarkdownEditorComponent from "@/app/tools/markdown-editor/MarkdownEditorComponent";
import { getCurrentUser } from "@/actions/user";

const MarkdownEditorPage = async () => {
  const { user } = await getCurrentUser();
  return <MarkdownEditorComponent user={user} />;
};
export default MarkdownEditorPage;
