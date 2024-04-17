import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Useful tools to make your life easier!
      </h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            This template showcases a simple chatbot using{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            and the Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            in a{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            project.
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            You can find the prompt and model logic for this use-case in{" "}
            <code>app/api/chat/route.ts</code>.
          </span>
        </li>
        <li>
        🎨
          <span className="ml-2">
            By default, our agent is acting as a helpful tutor, but we will show lessons to change
            the prompt to whatever you want!
          </span>
        </li>
        <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            The main frontend logic is found in <code>app/page.tsx</code>.
          </span>
        </li>
        <li className="text-l">
          🐙
          <span className="ml-2">
            This template is open source - you can see the source code and
            deploy your own version{" "}
            <a
              href="https://github.com/langchain-ai/langchain-nextjs-template"
              target="_blank"
            >
              from the GitHub repo
            </a>
            !
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Asking me a question e.g. <code> What subjects do you help support learners through tutoring?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🏴‍☠️"
      titleText="Will - your tutor for learining and support?"
      placeholder="I'm an LLM acting as a Tutor! Ask me questions for academic support questions!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
