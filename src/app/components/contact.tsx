import SectionTitle from "./section-title";

export default function Contact() {
  return (
    <div>
      <SectionTitle title="Contact Me" />

      <form>
        <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-neutral-200 rounded-lg dark:border-neutral-700 mb-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
              <svg
                className="shrink-0 size-4 text-neutral-400 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <input
              type="email"
              id="hero-input"
              name="hero-input"
              required
              className="py-2 ps-9 pe-3 block w-full border-transparent rounded-lg text-sm focus:border-transparent focus:ring-transparent  dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 text-neutral-900"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-neutral-200 rounded-lg dark:border-neutral-700 mb-4">
          <div className="relative w-full">
            <textarea
              id="hero-input"
              name="hero-input"
              rows={4}
              className="p-3 block w-full border-transparent rounded-lg text-sm focus:border-transparent focus:ring-transparent  text-neutral-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
        </div>
        <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-neutral-200 rounded-lg dark:border-neutral-700">
          <div className="relative w-full">
            <input
              type="submit"
              className="py-2 block w-full border-transparent rounded-lg text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 text-neutral-900 hover:bg-neutral-200"
              value="Send Message"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
