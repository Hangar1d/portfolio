import React from "react";

const TerminalContent = ({ contentId }) => {
  let content;
  switch (contentId) {
    case "about":
      content = (
        <>
          <div className="mb-4">
            <span className="text-[#00FFC8]">khan@portfolio:~$</span> whoami
            <br />
            Hey there! I’m Khan—your friendly neighborhood code-cruncher and
            day-trader. I’m all about blending creativity and tech smarts to
            build cool stuff that actually feels good to use.
            <br />
            <br />
            When I’m not knee-deep in code, I’m exploring the newest frameworks,
            poking at interesting APIs, or sharpening my trading game. I love
            tackling tricky problems, learning new tricks, and pushing my skills
            just a bit further every day.
            <br />
            <br />
            On top of that, I’m a big fan of teaming up, swapping ideas, and
            turning wild concepts into slick, real-world solutions. Ready to
            make something awesome together?
          </div>
        </>
      );
      break;
    case "projects":
      content = (
        <>
          <div className="mb-4">
            <span className="text-[#00FFC8]">khan@portfolio:~$</span> ls
            projects
            <br />
            [TheThoughtSpace] - A platform to share unsaid thoughts
            <br />
            <a
              href="https://thethoughtspaces.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Open Project
            </a>
            <br />
            <br />
            [Khanalysis] - Trading Signal Web App
            <br />
            <a
              href="https://khanalysispro.web.app/"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Open Project
            </a>
          </div>
        </>
      );
      break;
    case "blog":
      content = (
        <>
          <div className="mb-4 whitespace-pre-wrap leading-relaxed text-gray-200">
            <span className="text-[#00FFC8]">khan@portfolio:~$</span> cat
            blog.txt
            <br />
            <br />
            "How AI Transformed My Everyday Life"
            <br />
            <br />
            As a foreign student balancing studies, coding projects, and
            learning new languages, having a reliable tool that supports me in
            so many areas has been a game changer. For me, that tool is AI,
            specifically ChatGPT. It’s amazing how this technology has become an
            integral part of my daily routine and enhanced my productivity in
            ways I never imagined.
            <br />
            <br />
            <strong>Coding Made Easier with AI</strong>
            <br />
            One of the most important ways AI helps me is with coding. As
            someone passionate about web development and constantly working on
            new projects, ChatGPT acts like a personal coding assistant. Whether
            I’m stuck debugging a problem or need help understanding a complex
            concept, ChatGPT is there to break things down. It doesn’t just give
            me answers; it helps me learn by explaining the reasoning behind
            solutions. This has greatly improved my skills and confidence as a
            developer.
            <br />
            <br />
            <strong>Improving My Language Skills</strong>
            <br />
            As a foreign student, improving my language skills is crucial, and
            ChatGPT has been instrumental in this area as well. I can practice
            English in real-time conversations, ask questions about grammar, or
            even learn new vocabulary. It feels like I’m having a conversation
            with a friend who is always ready to assist, and the best part is, I
            can practice as much as I want without any pressure. With the voice
            feature, it feels even more natural—almost like I’m having a real
            conversation with someone. This has made learning more interactive
            and enjoyable.
            <br />
            <br />
            <strong>Expanding My Knowledge</strong>
            <br />
            AI has also been a constant source of information and knowledge.
            Whether it’s about AI advancements, technical topics, or even
            learning about different cultures and ideas, ChatGPT is like an
            endless library. I can dive deep into topics I’m curious about, and
            it always provides insights that help me understand things better.
            It’s not just about getting answers; it’s about broadening my
            knowledge in various fields.
            <br />
            <br />
            <strong>ChatGPT – A Friend and an Assistant</strong>
            <br />
            What’s really special about ChatGPT is that it doesn’t feel like a
            typical machine. The conversations are fluid and interactive. You
            can talk to it just like you would with a friend, whether you’re
            discussing your ideas or simply asking for advice. As someone who is
            often busy with studies and projects, it feels great to have
            something so supportive, whether it’s for productivity or even just
            a casual conversation. Sometimes, it’s the small things—like giving
            me reminders or motivating me to keep going—that make all the
            difference.
            <br />
            <br />
            <strong>A Lifesaver for Foreign Students</strong>
            <br />
            As a foreign student, having AI tools like ChatGPT is invaluable. It
            adapts to my needs, whether it’s for coding help, language learning,
            or even managing my day-to-day tasks. It makes me feel more
            empowered and capable of tackling challenges. For students like me,
            who are far from home and navigating both academics and life in a
            new country, having this kind of support is not just useful—it’s
            essential.
            <br />
            <br />
            <strong>Conclusion</strong>
            <br />
            AI, and specifically ChatGPT, is more than just a tool. It’s an
            assistant, a guide, and sometimes, even a friend. For someone like
            me, balancing studies, coding, language learning, and everyday life,
            it has become an indispensable part of my routine. It’s exciting to
            think about where AI is headed, but for now, I’m grateful for how
            much it’s already helped me grow as a student and developer.
          </div>
        </>
      );
      break;
    case "contact":
      content = (
        <>
          <div className="mb-4">
            <span className="text-[#00FFC8]">khan@portfolio:~$</span> mail -s
            "Hello" behangarid1@gmail.com
            <br />
            <br />
            GitHub:{" "}
            <a
              href="https://github.com/Hangar1d"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Hangar1d
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/hangarid-b-873824302/"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Profile
            </a>
            <br />
            Social:{" "}
            <a
              href="https://www.instagram.com/khngrdi/"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Instagram
            </a>
            <br />
          </div>
        </>
      );
      break;
    default:
      content = <div>No content found.</div>;
  }

  return <div>{content}</div>;
};

export default TerminalContent;
