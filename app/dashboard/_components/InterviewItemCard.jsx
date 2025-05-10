import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview, UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const InterviewItemCard = ({ interview, setInterviewList }) => {
  const router = useRouter();
  const { user } = useUser();

  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };

  const onFeedbackPress = () => {
    router.push("dashboard/interview/" + interview.mockId + "/feedback");
  };

  const deleteInterview = async () => {
    try {
      if (!user || !user.primaryEmailAddress) return;

      const mockInterview = await db
        .select()
        .from(MockInterview)
        .where(
          and(
            eq(MockInterview.mockId, interview.mockId),
            eq(MockInterview.createdBy, user.primaryEmailAddress.emailAddress)
          )
        );

      if (mockInterview.length <= 0) {
        toast("No Interview Found");
        return;
      }

      await db
        .delete(UserAnswer)
        .where(eq(UserAnswer.mockIdRef, interview.mockId));

      await db
        .delete(MockInterview)
        .where(eq(MockInterview.mockId, interview.mockId));

      setInterviewList((prev) =>
        prev.filter((item) => item.mockId !== interview.mockId)
      );

      toast("Interview Deleted");
    } catch (error) {
      toast("Something went wrong");
    }
  };

  return (
    <div className="border shadow-sm rounded-sm p-3">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-primary">{interview?.jobPosition}</h2>
          <h2 className="text-sm text-black">
            Experience: {interview?.jobExperience} year
          </h2>
          <h2 className="text-xs text-gray-400">
            Created At: {interview?.createdAt}
          </h2>
        </div>
        <div>
          <Button
            variant="outline"
            size="icon"
            className="bg-red-500 hover:bg-red-600"
            onClick={deleteInterview}
          >
            <Trash className="text-white" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between gap-5 mt-2">
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={onFeedbackPress}
        >
          Feedback
        </Button>
        <Button className="w-full" size="sm" onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
