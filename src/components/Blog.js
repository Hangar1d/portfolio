import { useState } from "react";

const Blog = () => {
  // State to handle navigation between blog posts and full content
  const [currentPost, setCurrentPost] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); // Track expansion state

  // Blog posts content
  const blogPosts = {
    "my-latest-post": {
      title: "How AI Transformed My Everyday Life",
      teaser:
        "AI, and specifically ChatGPT, is more than just a tool. It’s an assistant, a guide, and sometimes, even a friend...",
      content: `
      As a foreign student balancing studies, coding projects, and learning new languages, having a reliable tool that supports me in so many areas has been a game changer. For me, that tool is AI, specifically ChatGPT. It’s amazing how this technology has become an integral part of my daily routine and enhanced my productivity in ways I never imagined.
      
      Coding Made Easier with AI
      
      One of the most important ways AI helps me is with coding. As someone passionate about web development and constantly working on new projects, ChatGPT acts like a personal coding assistant. Whether I’m stuck debugging a problem or need help understanding a complex concept, ChatGPT is there to break things down. It doesn’t just give me answers; it helps me learn by explaining the reasoning behind solutions. This has greatly improved my skills and confidence as a developer.
      
      Improving My Language Skills
      
      As a foreign student, improving my language skills is crucial, and ChatGPT has been instrumental in this area as well. I can practice English in real-time conversations, ask questions about grammar, or even learn new vocabulary. It feels like I’m having a conversation with a friend who is always ready to assist, and the best part is, I can practice as much as I want without any pressure. With the voice feature, it feels even more natural—almost like I’m having a real conversation with someone. This has made learning more interactive and enjoyable.
      
      Expanding My Knowledge
      
      AI has also been a constant source of information and knowledge. Whether it’s about AI advancements, technical topics, or even learning about different cultures and ideas, ChatGPT is like an endless library. I can dive deep into topics I’m curious about, and it always provides insights that help me understand things better. It’s not just about getting answers; it’s about broadening my knowledge in various fields.
      
      ChatGPT – A Friend and an Assistant
      
      What’s really special about ChatGPT is that it doesn’t feel like a typical machine. The conversations are fluid and interactive. You can talk to it just like you would with a friend, whether you’re discussing your ideas or simply asking for advice. As someone who is often busy with studies and projects, it feels great to have something so supportive, whether it’s for productivity or even just a casual conversation. Sometimes, it’s the small things—like giving me reminders or motivating me to keep going—that make all the difference.
      
      A Lifesaver for Foreign Students
      
      As a foreign student, having AI tools like ChatGPT is invaluable. It adapts to my needs, whether it’s for coding help, language learning, or even managing my day-to-day tasks. It makes me feel more empowered and capable of tackling challenges. For students like me, who are far from home and navigating both academics and life in a new country, having this kind of support is not just useful—it’s essential.
      
      Conclusion
      
      AI, and specifically ChatGPT, is more than just a tool. It’s an assistant, a guide, and sometimes, even a friend. For someone like me, balancing studies, coding, language learning, and everyday life, it has become an indispensable part of my routine. It’s exciting to think about where AI is headed, but for now, I’m grateful for how much it’s already helped me grow as a student and developer.
      `,
    },
  };

  const handleReadMore = (postId) => {
    setCurrentPost(postId);
    setIsExpanded(true); // Expand when reading the post
  };

  const handleBack = () => {
    setIsExpanded(false); // Shrink back
    setTimeout(() => setCurrentPost(null)); // Delay shrinking until transition completes
  };

  return (
    <section
      className={`p-10 bg-jetBlack text-white flex flex-col items-center transition-all duration-5000 ${
        isExpanded ? "h-auto" : "h-screen"
      }`}
    >
      <h2 className="text-4xl font-bold mb-20">Blog</h2>

      {currentPost === null ? (
        <div className="space-y-6">
          {/* Blog Post Preview */}
          <article className="border-b pb-4">
            <h3 className="text-2xl font-semibold">
              {blogPosts["my-latest-post"].title}
            </h3>
            <p className="text-gray-600 mt-2">
              {blogPosts["my-latest-post"].teaser}
            </p>
            {/* "Read More" Button */}
            <button
              onClick={() => handleReadMore("my-latest-post")}
              className="inline-block mt-4 text-white hover:underline"
            >
              Read More →
            </button>
          </article>

          {/* Add more blog previews here if necessary */}
        </div>
      ) : (
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isExpanded ? "scale-100" : "scale-95"
          }`}
        >
          {/* Full Blog Post */}
          <article>
            <h3 className="text-3xl font-bold mb-4">
              {blogPosts[currentPost].title}
            </h3>
            <p className="text-gray-200 leading-relaxed whitespace-pre-line">
              {blogPosts[currentPost].content}
            </p>
          </article>
          {/* "Back to Blog" Button */}
          <button
            onClick={handleBack}
            className="mt-6 text-blue-600 hover:underline"
          >
            ← Back to Blog
          </button>
        </div>
      )}
    </section>
  );
};

export default Blog;
