import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <div className="flex items-center gap-x-6">
        <div className="shrink-0 animate-fade-up animate-ease-in-out animate-duration-[2000ms]">
          <div className="shrink-0 size-36 relative">
            <Image
              src="/images/joe.jpg"
              alt="Joe Tito"
              sizes="100%"
              fill
              priority
              className="rounded-full fill-current"
            />
          </div>
        </div>

        <div className="grow animate-fade-up animate-ease-in-out animate-duration-[2000ms]">
          <h1 className="text-3xl font-extrabold text-neutral-800 dark:text-neutral-200">
            Joe Tito
          </h1>
          <p className="text-xl text-neutral-500 dark:text-neutral-400">
            Full Stack Software & DevOps Engineer
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 animate-fade-up animate-duration-[2000ms] animate-delay-[500ms] animate-ease-in-out">
          I am a full stack software & devops engineer with over 15 years
          experience in software development, engineering management and
          consulting. My expertise spans across full stack web development,
          ci/cd automation, infrastructure as code and secrets management.
        </p>

        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 animate-fade-up animate-duration-[2000ms] animate-delay-[500ms] animate-ease-in-out">
          Currently, I work as a freelance consultant, where I help Fortune 500
          companies develop and deploy modern cloud based applications,
          implement secure automated devops practices and deploy enterprise
          secrets management solutions.
        </p>

        <div className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 animate-fade-up animate-duration-[2000ms] animate-delay-[500ms] animate-ease-in-out">
          When I&apos;m not attached to a keyboard, you&apos;ll find me
          hangin&apos; with our{" "}
          <span className="hs-tooltip [--trigger:hover] inline-block">
            <span className="hs-tooltip-toggle ">
              <span className="text-fuchsia-500">kitties</span>
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity absolute invisible z-10 bg-white border text-sm text-neutral-600 rounded-lg shadow-md dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 flex p-4 space-x-4"
                role="tooltip"
              >
                <div className="shrink-0 size-48 relative">
                  <Image
                    src="/images/ty.png"
                    alt="Ty"
                    sizes="100%"
                    fill
                    className="rounded-md"
                  />
                </div>
                <div className="shrink-0 size-48 relative">
                  <Image
                    src="/images/toby.png"
                    alt="Toby"
                    sizes="100%"
                    fill
                    className="rounded-md"
                  />
                </div>
              </span>
            </span>
          </span>{" "}
          😸, adventuring in Vermont 🍁 or tearing our house apart 🛠️ and
          learning how to put it back together.
        </div>

        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 animate-fade-up animate-duration-[2000ms] animate-delay-[750ms] animate-ease-in-out">
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
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="shrink-0 size-3.5 dark:fill-neutral-200"
              viewBox="0 0 50 50"
            >
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>

            <a
              className="text-sm text-neutral-500 underline hover:text-neutral-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
              href="https://github.com/joe-tito"
              target="_blank"
            >
              github.com/joe-tito
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
