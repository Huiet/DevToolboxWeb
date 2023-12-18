import DiffViewerComponent from "@/app/tools/diff-viewer/DiffViewerComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const DiffViewer = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <DiffViewerComponent user={user} />;
};
export default DiffViewer;
