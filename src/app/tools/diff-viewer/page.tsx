import DiffViewerComponent from "@/app/tools/diff-viewer/DiffViewerComponent";
import { getCurrentUser } from "@/actions/user";

const DiffViewer = async () => {
  const { user } = await getCurrentUser();
  return <DiffViewerComponent user={user} />;
};
export default DiffViewer;
