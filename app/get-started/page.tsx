"use client";

import SetGoal from "@/components/getStarted/SetGoal";
import Read from "@/components/getStarted/Read";
import AssessGoal from "@/components/getStarted/AssessGoal";
import { ReadingProvider } from "@/contexts/ReadingContext";

const GetStarted = () => {
  return (
    <ReadingProvider>
      <main className="flex flex-col lg:flex-row justify-between w-[90%] mx-auto my-10">
        <section className="lg:w-[35%] w-full">
          <SetGoal />
          <AssessGoal />
        </section>
        <section className="lg:w-[60%] w-full bg-linear-to-br from-gray-900 via-purple-900 to-gray-900">
          <Read />
        </section>
      </main>
    </ReadingProvider>
  );
};

export default GetStarted;
