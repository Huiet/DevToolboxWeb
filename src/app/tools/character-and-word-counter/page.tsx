import CharacterAndWordCounterComponent from "@/app/tools/character-and-word-counter/CharacterAndWordCounterComponent";
import { getUserAndSubscriptionState } from "@/actions/user";

const CharacterAndWordCounterPage = async () => {
  const { user } = await getUserAndSubscriptionState();
  return <CharacterAndWordCounterComponent user={user} />;
};
export default CharacterAndWordCounterPage;
