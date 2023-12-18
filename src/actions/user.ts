"use server";
import { currentUser } from "@clerk/nextjs";

export const getUserAndSubscriptionState = async () => {
  const user = await currentUser();
  return {
    user,
  };
};
