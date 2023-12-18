import { Button } from "@/app/components/common/Button";
import { getUserAndSubscriptionState } from "@/actions/user";
import Link from "next/link";
import prisma from "@/db/prisma";
import { getPathFromToolType } from "@/utils/clientUtils";

const fetchUserHistory = async (userId: string) =>
  await prisma.history.findMany({
    where: {
      userId: userId,
    },
  });

export default async function HistoryPage() {
  const { user } = await getUserAndSubscriptionState();
  const history = user?.id ? await fetchUserHistory(user.id) : null;
  if(!history) {
    return 'No history found';
  }
    return (
      <div
        className={
          "w-full h-full flex flex-col items-center bg-gray-700 py-8 rounded-md overflow-y-scroll"
        }
      >
        <p className={"text-4xl font-bold mb-4"}> History: </p>
        <div className={"w-full flex flex-col"}>
          {history.map((entry, index) => (
            <div
              key={entry.id}
              className={`w-full p-4 ${
                index % 2 === 0 ? "bg-gray-800" : "bg-gray-300 text-black"
              } rounded-md`}
            >
              {entry.metadata &&
                Object.entries(entry.metadata).map(([_, value]) => (
                  <Link
                    key={entry.id}
                    className={"flex justify-between"}
                    href={`/tools/${getPathFromToolType(entry.toolType)}`}
                  >
                    <p className={"text-lg"}> {entry.toolType} </p>
                    <p className={"text-lg"}> {value} </p>
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
}
