const completionSpec: Fig.Spec = {
  name: "fdp",
  description: "Financial-Data-Products",
  subcommands: [
    {
      name: "build",
      description: "Builds FDP in Docker",
      subcommands: [
        {
          name: "earliest",
          description: "Starts from the earliest point in the Kafka stream",
        },
      ],
    },
    {
      name: "code",
      description: "Opens FDP in VSCode",
    },
    {
      name: "restart",
      description: "Rebuilds and restarts FDP in Docker",
    },
    {
      name: "run",
      description: "Runs FDP in Docker",
    },
  ],
  options: [
    {
      name: ["--help", "-z"],
      description: "Show help for FDP",
    },
    {
      name: ["--branch", "-b"],
      description: "Checkout a branch in the FDP repo",
      args: {
        name: "Checkout branch",
      },
    },
  ],
  // Only uncomment if abc takes an argument
  // args: {}
};
export default completionSpec;
