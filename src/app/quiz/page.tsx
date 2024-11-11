import React, { use } from "react";

import { getAuthSession } from "@/lib/nextAuth";
import { redirect } from "next/navigation";
import QuizCreation from "@/components/QuizCreation";

export const metadata = {
  title: "Quiz | Quizzzy",
  description: "Quiz yourself on anything!",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}

const Quiz = async ({ searchParams }: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }
  // const topic = use<Props>(searchParams);
  
  return <QuizCreation topicParam={searchParams.topic ?? ""} />;
};

export default Quiz;
