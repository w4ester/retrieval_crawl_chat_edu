import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Agents Page
      </h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            Meet our local chat bot with llm acting as a tutor for academic support. a{" "}
            <a href="https://example.com" target="_blank">
              Prompted to be Patient
            </a>{" "}
            agent. And will stay continuously {" "}
            <a href="https://example.com" target="_blank">
              Supportive,
            </a>{" "}
            in a{" "}
            <a href="https://example.com/" target="_blank">
              Respectful
            </a>{" "}
            manner.
          </span>
        </li>
        <li>
          🛠️
          <span className="ml-2">
            The agent has memory and access to a search a vector database and a calculator.
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            You can find the prompt and model logic for this use-case in{" "}
            <code>app/api/chat/agents/route.ts</code>.
          </span>
        </li>
        <li>
          🦜
          <span className="ml-2">
            By default, the agent is pretending to be an academic tutor.
          </span>
        </li>
        <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            The main frontend logic is found in <code>app/agents/page.tsx</code>
            .
          </span>
        </li>
        <li className="text-l">
          🐙
          <span className="ml-2">
            In this moment please demo. The build is agnotstic to a company, no ads, no data taken from you.
            This is local untethered ai. It is built in a container and does not need the internet, but only can connect if programmed.{" "}
            <a
              href="https://github.com/langchain-ai/langchain-nextjs-template"
              target="_blank"
            >
              Maybe this can be helpful if we discuss how to properly use it for education.
            </a>
            .
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Try out the chat e.g. <code> Start with a question about your favorite book?</code>
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="I am so glad you are here...truly look forward your interaction. I hope you are ready to learn!"
      titleText="June"
      emoji=""
      showIntermediateStepsToggle={true}
    ></ChatWindow>
  );
}
