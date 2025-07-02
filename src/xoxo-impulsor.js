const { watchdogTrigger } = require('../trends/watchdog');

await watchdogTrigger({
  videoUrl: issueData.videoUrl,
  createdBy: issueData.user,
  title: issueData.title
});