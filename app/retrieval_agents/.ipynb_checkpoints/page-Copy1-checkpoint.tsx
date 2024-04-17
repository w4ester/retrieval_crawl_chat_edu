import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Local Agent
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          🤝
          <span className="ml-2">
            This agent will retrieve data from a vectordatabase a{" "}
            <a href="https://example.com" target="_blank">
              upload
            </a>{" "}
            ask input {" "}
            <a href="https://example.com" target="_blank">
              retrieveal for output.
            </a>{" "}
            in a{" "}
            <a href="https://example.com" target="_blank">
              Next.js
            </a>{" "}
            project.
          </span>
        </li>
        <li className="hidden text-l md:block">
          🛠️
          <span className="ml-2">
            The agent has access to a vector store retriever as a tool as well
            as a memory. It&apos;s particularly well suited to meta-questions
            about the current conversation.
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            You can find the prompt and model logic for this use-case in{" "}
            <code>app/api/chat/retrieval_agents/route.ts</code>.
          </span>
        </li>
        <li>
          🤖
          <span className="ml-2">
            By default, the agent is prompted to be a very pragmatic answerer, but you can
            change the prompt to whatever you want!
          </span>
        </li>
        <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            The main frontend logic is found in{" "}
            <code>app/retrieval_agents/page.tsx</code>.
          </span>
        </li>
        <li className="text-l">
          🐙
          <span className="ml-2">
            This demo is looking at retrieval in a chatbot.
            deploy your own version{" "}
            <a
              href="https://github.com/w4ester/retrieval_crawl_chat_edu"
              target="_blank"
            >
              from the GitHub repo
            </a>
            !
          </span>
        </li>
        <li className="hidden text-l md:block">
          🔱
          <span className="ml-2">
            Before running this example, you&apos;ll first need to set up a
            Supabase (or other) vector store. See the README for more details.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Upload text, then ask e.g.{" "}
            <code> What are some ways of doing retrieval?</code>{" "}
            below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'Howdy! I\'m an retrieval-focused agent. Ask what are ways to do retrieval in LangChain'
      }
      emoji="🤖"
      titleText="June the Reliable Agent"
    ></ChatWindow>
  );
}
