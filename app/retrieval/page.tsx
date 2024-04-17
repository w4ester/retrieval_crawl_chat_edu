import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Agent Retrieval Chain Page
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          🔗
          <span className="ml-2">
            This example shows how to perform retrieval with {" "}
            <a href="https://example.com/" target="_blank">
              LangChain
            </a>{" "}
            in friendly partner interfce. {" "}
            <a href="https://example.com " target="_blank">
              Now lets explain.
            </a>{" "}
           
          </span>
        </li>
        <li className="hidden text-l md:block">
          🪜
          <span className="ml-2">The chain works in two steps:</span>
          <ul>
            <li className="ml-4">
              1️⃣
              <span className="ml-2">
                First, it rephrases the input question into a
                &quot;standalone&quot; question, dereferencing pronouns based on
                the chat history.
              </span>
            </li>
            <li className="ml-4">
              2️⃣
              <span className="ml-2">
                Then, it queries the retriever for documents similar to the
                dereferenced question and composes an answer.
              </span>
            </li>
          </ul>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            You can find the prompt and model logic for this use-case in{" "}
            <code>app/api/chat/retrieval/route.ts</code>.
          </span>
        </li>
        <li>
          🐶
          <span className="ml-2">
            By default, the agent is prompted to be a guide on data, but you
            can change the prompt within your query below when you type.
          </span>
        </li>
        <li className="text-l">
          🎨
          <span className="ml-2">
            The main frontend logic is found in{" "}
            <code>app/retrieval/page.tsx</code>.
          </span>
        </li>
        
        <li className="hidden text-l md:block">
          🔱
          <span className="ml-2">
            Before running this example on your own, you&apos;ll first need to
            set up a Supabase vector store. See the README for more details.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Upload some text, then try asking e.g.{" "}
            <code> What is a document loader?</code> below.
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        'Document Loader...Ask in the box What is a document loader?'
      }
      emoji=""
      titleText="June the Document-Retrieving Agent"
    ></ChatWindow>
  );
}
