export default function Profile() {
  return (
    <div>
      <div className="flex items-center gap-x-6">
        <div className="shrink-0">
          <img
            className="shrink-0 size-36 rounded-full"
            src="/images/joe.jpg"
            alt="Avatar"
          />
        </div>

        <div className="grow">
          <h1 className="text-3xl font-extrabold text-neutral-800 dark:text-neutral-200">
            Joe Tito
          </h1>
          <p className="text-xl text-neutral-500 dark:text-neutral-400">
            Full Stack Software & DevOps Engineer
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          I am a full stack software & devops engineer with over 15 years
          experience in software development, engineering management and
          consulting. My expertise spans across full stack web development,
          ci/cd automation, infrastructure as code and secrets management.
        </p>

        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          Currently, I work as a freelance consultant, where I help Fortune 500
          companies develop and deploy modern cloud based applications,
          implement secure automated devops practices and deploy enterprise
          secrets management solutions.
        </p>

        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          When I&apos;m not attached to a keyboard, you&apos;ll find me
          hangin&apos; with our{" "}
          <span className="hs-tooltip [--trigger:hover] inline-block">
            <span className="hs-tooltip-toggle ">
              <span className="text-fuchsia-500">kitties</span>
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity absolute invisible z-10 bg-white border text-sm text-neutral-600 rounded-lg shadow-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 flex p-4 space-x-4"
                role="tooltip"
              >
                <img
                  src="/images/ty.png"
                  className="size-48 rounded-md"
                  alt="Ty"
                />
                <img
                  src="/images/toby.png"
                  className="size-48 rounded-md"
                  alt="Toby"
                />
              </span>
            </span>
          </span>{" "}
          😸, adventuring in Vermont 🍁 or tearing our house apart 🛠️ and
          learning how to put it back together.
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          <li className="flex items-center gap-x-2">
            <svg
              className="shrink-0 size-4 fill-sky-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
            </svg>
            <a
              className="text-sm text-neutral-500 underline hover:text-neutral-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="https://www.linkedin.com/in/joetito/"
              target="_blank"
            >
              linkedin.com/in/joetito
            </a>
          </li>

          <li className="flex items-center gap-x-2">
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 236"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M128.075 236.075l47.104-144.97H80.97l47.104 144.97z"
                fill="#E24329"
              />
              <path
                d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97z"
                fill="#FC6D26"
              />
              <path
                d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012-113.12-144.97z"
                fill="#FCA326"
              />
              <path
                d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315z"
                fill="#E24329"
              />
              <path
                d="M128.075 236.074l47.104-144.97h66.015l-113.12 144.97z"
                fill="#FC6D26"
              />
              <path
                d="M241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012 113.119-144.97z"
                fill="#FCA326"
              />
              <path
                d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315z"
                fill="#E24329"
              />
            </svg>
            <a
              className="text-sm text-neutral-500 underline hover:text-neutral-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="https://gitlab.com/joetito1"
              target="_blank"
            >
              gitlab.com/joetito1
            </a>
          </li>

          <li className="flex items-center gap-x-2">
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                className="fill-blue-500"
                d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565C.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479c.815 2.736 3.713 3.66 6.383 3.364c.136-.02.275-.039.415-.056c-.138.022-.276.04-.415.056c-3.912.58-7.387 2.005-2.83 7.078c5.013 5.19 6.87-1.113 7.823-4.308c.953 3.195 2.05 9.271 7.733 4.308c4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056c2.67.297 5.568-.628 6.383-3.364c.246-.828.624-5.79.624-6.478c0-.69-.139-1.861-.902-2.206c-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8"
              />
            </svg>
            <a
              className="text-sm text-neutral-500 underline hover:text-neutral-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="https://bsky.app/profile/joetito.bsky.social"
              target="_blank"
            >
              @joetito.bsky.social
            </a>
          </li>

          <li className="flex items-center gap-x-2">
            <svg
              className="shrink-0 size-3 text-neutral-900 dark:text-neutral-50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z"
                fill="currentColor"
              />
            </svg>
            <a
              className="text-sm text-neutral-500 underline hover:text-neutral-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="https://x.com/joetito"
              target="_blank"
            >
              @joetito
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
