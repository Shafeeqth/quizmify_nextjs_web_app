import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Hourglass } from "lucide-react";
import { differenceInSeconds } from "date-fns";
import { formatTimeDelta } from "@/lib/utils";

type Props = {
  timeStarted: Date;
  timeEnded: Date;
};

const TimeTakenCard = ({ timeEnded, timeStarted }: Props) => {
  return (
  <Card className="md:col-span-4">
    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Time Taken</CardTitle>
        <Hourglass/>
    </CardHeader>
    <CardContent >
        {formatTimeDelta(differenceInSeconds(timeStarted, timeEnded))}
    </CardContent>
  </Card>
  )
};

export default TimeTakenCard;
