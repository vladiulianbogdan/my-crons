// This is a simple example of a cron job that will be executed every hour.
// The cron string "0 * * * *" means that the job will be executed every hour at the beginning of the hour.
// Learn more about Genezio's cron jobs at https://genezio.com/how-to-schedule-tasks-with-genezio/
import { GenezioDeploy, GenezioMethod } from "@genezio/types";

@GenezioDeploy()
export class CronService {
  constructor() {}

  // This method will be executed every hour, we recommend https://crontab.guru/ to generate cron strings
  @GenezioMethod({ type: "cron", cronString: "0 * * * *" })
  async helloEveryHour() {
    const output = "Every hour " + new Date().toISOString();
    console.log(output);
  }
}
