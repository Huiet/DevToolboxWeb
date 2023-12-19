import CharacterAndWordCounterComponent from "@/app/tools/character-and-word-counter/CharacterAndWordCounterComponent";
import { getCurrentUser } from "@/actions/user";

const CharacterAndWordCounterPage = async () => {
  const { user } = await getCurrentUser();
  return <CharacterAndWordCounterComponent user={user} />;
};
export default CharacterAndWordCounterPage;
