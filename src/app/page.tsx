import Footer from "./components/footer";
import Header from "./components/header";
import SectionSpacer from "./components/section-spacer";
import SectionTitle from "./components/section-title";
import Skill from "./components/skill";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900">
      <Header />

      <main id="content">
        <div className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
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
              devops automation, infrastructure as code and secrets management.
            </p>

            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Currently, I work as a freelance consultant, where I help Fortune
              500 companies develop modern cloud based applications, implement
              secure automated devops practices and deploy enterprise secrets
              management solutions.
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

            <ul className="mt-5 flex gap-x-3">
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

          <SectionSpacer id="projects" />

          <div>
            <SectionTitle title="Projects" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <a
                className="group block relative overflow-hidden rounded-lg"
                href="#"
              >
                <img
                  className="w-full size-40 object-cover bg-neutral-100 rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project"
                />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-neutral-200 text-neutral-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg
                      className="shrink-0 size-3"
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
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a
                className="group block relative overflow-hidden rounded-lg"
                href="#"
              >
                <img
                  className="w-full size-40 object-cover bg-neutral-100 rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project"
                />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-neutral-200 text-neutral-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg
                      className="shrink-0 size-3"
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
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a
                className="group block relative overflow-hidden rounded-lg"
                href="#"
              >
                <img
                  className="w-full size-40 object-cover bg-neutral-100 rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project"
                />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-neutral-200 text-neutral-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg
                      className="shrink-0 size-3"
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
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a
                className="group block relative overflow-hidden rounded-lg"
                href="#"
              >
                <img
                  className="w-full size-40 object-cover bg-neutral-100 rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project"
                />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-neutral-200 text-neutral-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg
                      className="shrink-0 size-3"
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
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a
                className="group block relative overflow-hidden rounded-lg"
                href="#"
              >
                <img
                  className="w-full size-40 object-cover bg-neutral-100 rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1585159812596-fac104f2f069?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project"
                />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-neutral-200 text-neutral-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg
                      className="shrink-0 size-3"
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
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a
                className="group block relative overflow-hidden rounded-lg"
                href="#"
              >
                <img
                  className="w-full size-40 object-cover bg-neutral-100 rounded-lg dark:bg-neutral-800"
                  src="https://images.unsplash.com/photo-1654131300276-db70adf4f85d?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project"
                />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-neutral-200 text-neutral-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg
                      className="shrink-0 size-3"
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
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <SectionSpacer id="testimonials" />

          <div>
            <Testimonials />
          </div>

          <SectionSpacer id="skills" />

          <div>
            <SectionTitle title="Skills" />

            <div className="space-y-3">
              <dl className="flex flex-col sm:flex-row gap-1">
                <dt className="min-w-40">
                  <span className="block text-sm text-neutral-500 dark:text-neutral-500">
                    Languages:
                  </span>
                </dt>
                <dd>
                  <ul className="flex flex-wrap">
                    <Skill
                      name="Typescript"
                      logo="/images/svg/typescript.svg"
                    />
                    <Skill
                      name="Javascript"
                      logo="/images/svg/javascript.svg"
                    />
                    <Skill name="PHP" logo="/images/svg/php.svg" />
                    <Skill name="HTML" logo="/images/svg/html.svg" />
                    <Skill name="CSS" logo="/images/svg/css.svg" />
                    <Skill name="Java" logo="/images/svg/java.svg" />
                    <Skill name="Bash" logo="/images/svg/bash.svg" />
                  </ul>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-1">
                <dt className="min-w-40">
                  <span className="block text-sm text-neutral-500 dark:text-neutral-500">
                    Frameworks:
                  </span>
                </dt>
                <dd>
                  <ul className="flex flex-wrap">
                    <Skill name="Angular" logo="/images/svg/angular.svg" />
                    <Skill name="React" logo="/images/svg/react.svg" />
                    <Skill name="VueJS" logo="/images/svg/vue.svg" />
                    <Skill name="TailwindCSS" logo="/images/svg/tailwind.svg" />
                    <Skill name="Laravel" logo="/images/svg/laravel.svg" />
                    <Skill name="jQuery" logo="/images/svg/jquery.svg" />
                    <Skill name="Bootstrap" logo="/images/svg/bootstrap.svg" />
                  </ul>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-1">
                <dt className="min-w-40">
                  <span className="block text-sm text-neutral-500 dark:text-neutral-500">
                    Tools:
                  </span>
                </dt>
                <dd>
                  <ul className="flex flex-wrap">
                    <Skill
                      name="HashiCorp Vault"
                      logo="/images/svg/vault.svg"
                    />
                    <Skill name="Terraform" logo="/images/svg/terraform.svg" />
                    <Skill
                      name="Kubernetes"
                      logo="/images/svg/kubernetes.svg"
                    />
                    <Skill name="Docker" logo="/images/svg/docker.svg" />
                    <Skill name="AWS" logo="/images/svg/aws.svg" />
                    <Skill name="Gitlab" logo="/images/svg/gitlab.svg" />
                    <Skill name="GitHub" logo="/images/svg/github.svg" />
                    <Skill name="BitBucket" logo="/images/svg/bitbucket.svg" />
                    <Skill name="Jenkins" logo="/images/svg/jenkins.svg" />
                    <Skill name="Jira" logo="/images/svg/jira.svg" />
                    <Skill
                      name="Confluence"
                      logo="/images/svg/confluence.svg"
                    />
                  </ul>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-1">
                <dt className="min-w-40">
                  <span className="block text-sm text-neutral-500 dark:text-neutral-500">
                    Databases:
                  </span>
                </dt>
                <dd>
                  <ul className="flex flex-wrap">
                    <Skill name="MySQL" logo="/images/svg/mysql.svg" />
                    <Skill name="MariaDB" logo="/images/svg/mariadb.svg" />
                    <Skill
                      name="PostgreSQL"
                      logo="/images/svg/postgresql.svg"
                    />
                    <Skill name="MongoDB" logo="/images/svg/mongodb.svg" />
                    <Skill name="Oracle" logo="/images/svg/oracle.svg" />
                  </ul>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-1">
                <dt className="min-w-40">
                  <span className="block text-sm text-neutral-500 dark:text-neutral-500">
                    Skills:
                  </span>
                </dt>
                <dd>
                  <ul>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      Full Stack Software Engineering
                    </li>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      CI/CD Pipelines
                    </li>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      DevSecOps
                    </li>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      Containerization
                    </li>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      Secrets Management
                    </li>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      Infrastructure as Code
                    </li>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      Cloud Migrations
                    </li>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      Consulting
                    </li>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      Team Leadership
                    </li>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      Agile Development
                    </li>
                    <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                      Sales Support
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>

          <SectionSpacer id="work" />

          <div>
            <SectionTitle title="Work Experience" />

            <div>
              <div className="group relative flex gap-x-5">
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-neutral-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-6 flex justify-center items-center">
                    <img
                      src="images/companies/nextorbit.png"
                      className="shrink-0 size-6"
                    />
                  </div>
                </div>

                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-neutral-600 dark:text-neutral-400">
                    2024 - Present
                  </h3>

                  <p className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
                    NextOrbit{" "}
                    <span className="font-light text-neutral-400">
                      - Freelance Full Stack Software & DevOps Engineer
                    </span>
                  </p>

                  {/* <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    The company has high expectations and using OKRs there is a
                    mutual understanding of expectations and performance.
                  </p> */}

                  <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Architect and deploy HashiCorp Vault secrets management
                      programs
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Converted UIs into responsive HTML and CSS with a
                      mobile-first approach.
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Created custom illustrations and item description banners.
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Provided detailed documentation and customer support on
                      GitHub.
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Engaged with users to address setup inquiries, bug issues,
                      and feedback.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative flex gap-x-5">
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-neutral-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-6 flex justify-center items-center">
                    <img
                      src="images/companies/optiv.jpeg"
                      className="shrink-0 size-6"
                    />
                  </div>
                </div>

                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-neutral-600 dark:text-neutral-400">
                    2020 - 2024
                  </h3>

                  <p className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
                    Optiv -{" "}
                    <span className="font-light text-neutral-400">
                      Engineering Manager / DevOps & Engineering Consultant
                    </span>
                  </p>

                  <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Managed, mentored and project oversight for a team of
                      consultants
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Project scoping, pre-sales, pricing and developed
                      statements of work
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Architected & deployed HashiCorp Vault secrets management
                      programs
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Developed methods for and conducted DevSecOps and
                      container security maturity assessments
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Built re-usable Vault/Terraform modules, documentation and
                      training to accelerate delivery speed
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Earned HashiCorp Security & Infrastructure competencies,
                      achieving top-tier partner status
                    </li>
                  </ul>

                  {/* <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    This is an excellent company and they reward their
                    employees. It&apos;s becoming a big company but it&apos;s
                    still private, so the culture is as good as it gets at
                    1,000+ employees if you ask me. Managers are still adapting
                    to the growth I think, but everyone has to. Great place to
                    work.
                  </p> */}

                  {/* <div className="mt-3">
                    <a
                      className="block border border-neutral-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700"
                      href="#"
                    >
                      <div className="relative flex items-center overflow-hidden">
                        <img
                          className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                          src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Blog Image"
                        />

                        <div className="grow p-4 ms-32 sm:ms-48">
                          <div className="min-h-24 flex flex-col justify-center">
                            <h3 className="font-semibold text-sm text-neutral-800 dark:text-neutral-300">
                              Studio by Mailchimp
                            </h3>
                            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
                              Produce professional, reliable streams easily
                              leveraging Mailchimp&apos;s innovative broadcast
                              studio.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>

              <div className="group relative flex gap-x-5">
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-neutral-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-6 flex justify-center items-center">
                    <img
                      src="images/companies/systolic.png"
                      className="shrink-0 size-6"
                    />
                  </div>
                </div>

                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-neutral-600 dark:text-neutral-400">
                    2014 - 2020
                  </h3>

                  <p className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
                    Systolic -{" "}
                    <span className="font-light text-neutral-400">
                      Software Engineering Manager / Full Stack Software
                      Engineer
                    </span>
                  </p>

                  <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Managed, mentored and project oversight for a team of
                      consultants
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Project scoping, pre-sales, pricing and developed
                      statements of work
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Architected & deployed HashiCorp Vault secrets management
                      programs
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Developed methods for and conducted DevSecOps and
                      container security maturity assessments
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Built re-usable Vault/Terraform modules, documentation and
                      training to accelerate delivery speed
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Earned HashiCorp Security & Infrastructure competencies,
                      achieving top-tier partner status
                    </li>
                  </ul>

                  {/* <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Work in Slack is one of the beautiful experience I can do in
                    my entire life. There are a lot of interesting thing to
                    learn and manager respect your time and your personality.
                  </p> */}
                </div>
              </div>

              <div className="group relative flex gap-x-5">
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-neutral-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-6 flex justify-center items-center">
                    <img
                      src="images/companies/parsons.png"
                      className="shrink-0 size-6"
                    />
                  </div>
                </div>

                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-neutral-600 dark:text-neutral-400">
                    2011 - 2014
                  </h3>

                  <p className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
                    Parsons -{" "}
                    <span className="font-light text-neutral-400">
                      Full Stack Software Engineer
                    </span>
                  </p>

                  <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Worked with a diverse range of clients, delivering
                      tailored design solutions.
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Developed and maintained strong client relationships
                      through effective communication and project management.
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Utilized tools such as Notion for project tracking,
                      Mailchimp for email marketing designs, Slack for team
                      collaboration, and GitHub for version control and project
                      sharing.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative flex gap-x-5">
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-neutral-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-6 flex justify-center items-center">
                    <img
                      src="images/companies/discover.png"
                      className="shrink-0 size-6"
                    />
                  </div>
                </div>

                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-neutral-600 dark:text-neutral-400">
                    2009 - 2011
                  </h3>

                  <p className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
                    Discover Financial Services -{" "}
                    <span className="font-light text-neutral-400">
                      Software Engineer
                    </span>
                  </p>

                  <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Worked with a diverse range of clients, delivering
                      tailored design solutions.
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Developed and maintained strong client relationships
                      through effective communication and project management.
                    </li>
                    <li className="ps-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Utilized tools such as Notion for project tracking,
                      Mailchimp for email marketing designs, Slack for team
                      collaboration, and GitHub for version control and project
                      sharing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <SectionSpacer id="certifications" />

          <div>
            <SectionTitle title="Certifications" />

            <div className="grid grid-cols-1  gap-3">
              <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
                <img
                  src="images/certs/hashicorp-ambassador.png"
                  className="size-28"
                />
                <div>
                  <div className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">
                    2024 HashiCorp Ambassador
                  </div>
                  <div className="text-xs text-neutral-500">
                    HashiCorp Ambassadors are committed to the spirit of
                    learning in the open. They share knowledge about HashiCorp
                    tools through content creation, local events and productive,
                    thoughtful feedback, while advocating and adhering to the
                    HashiCorp Principles. Ambassadors support growth of the
                    community, focusing on three key elements: Knowledge
                    sharing, Mentorship and Kindness.
                  </div>
                </div>
              </div>
              <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
                <img src="images/certs/vault-chip.png" className="size-28" />
                <div>
                  <div className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">
                    Vault Certified HashiCorp Implementation Partner (CHIP)
                  </div>
                  <div className="text-xs text-neutral-500">
                    Partner practitioners who achieve Vault CHIP certification
                    have proven that they understand how to deploy and maintain
                    Vault Enterprise in a production customer environment and
                    they understand the differentiation between Vault offerings
                    of Open Source and Enterprise for private deployment.
                  </div>
                </div>
              </div>
              <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
                <img
                  src="images/certs/vault-associate.png"
                  className="size-28"
                />
                <div>
                  <div className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">
                    Vault Associate
                  </div>
                  <div className="text-xs text-neutral-500">
                    Vault Associates know the concepts, skills, and use cases
                    associated with HashiCorp Vault. They understand and can
                    utilize Vault according to the certification objectives.
                    Additionally, they understand why enterprises choose to
                    extend Vault Open Source with Vault Enterprise to solve
                    business critical objectives.
                  </div>
                </div>
              </div>
              <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
                <img
                  src="images/certs/terraform-associate.png"
                  className="size-28"
                />
                <div>
                  <div className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">
                    Terraform Associate
                  </div>
                  <div className="text-xs text-neutral-500">
                    Terraform Associates know the basic concepts, skills, and
                    use cases associated with open source HashiCorp Terraform.
                    They understand and can utilize Terraform according to the
                    certification objectives. Additionally, they understand why
                    enterprises choose to extend Terraform Open Source with
                    Terraform Enterprise to solve business critical objectives.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionSpacer id="education" />

          <div>
            <SectionTitle title="Education" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
                <img
                  src="images/schools/depaul.png"
                  className="shrink-0 size-20 "
                />
                <div>
                  <p className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
                    Master&apos;s Degree in Computer Science
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Depaul University
                  </p>
                </div>
              </div>

              <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
                <img
                  src="images/schools/niu.png"
                  className="shrink-0 size-20 "
                />
                <div>
                  <p className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
                    Bachelor&apos;s Degree in Computer Science
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Northern Illinois University
                  </p>
                </div>
              </div>
            </div>
          </div>

          <SectionSpacer id="articles" />

          <div>
            <SectionTitle title="Articles" />

            <ul className="space-y-10">
              <li>
                <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-500">
                  2024
                </p>
                <h5 className="font-medium text-sm text-neutral-800 dark:text-neutral-200">
                  The complete guide to OKRs
                </h5>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
                  How to make objectives and key results work for your company.
                </p>
                <p className="mt-1">
                  <a
                    className="text-sm text-neutral-500 underline hover:text-neutral-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                    href="#"
                  >
                    Continue reading
                  </a>
                </p>
              </li>

              <li>
                <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-500">
                  2024
                </p>
                <h5 className="font-medium text-sm text-neutral-800 dark:text-neutral-200">
                  Enhancement in Customer Engagement
                </h5>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
                  With the aim of optimizing customer interactions and boosting
                  brand loyalty, the team at Preline leveraged Mailchimp&apos;s
                  powerful tools and expertise to deliver exceptional results.
                </p>
                <p className="mt-1">
                  <a
                    className="text-sm text-neutral-500 underline hover:text-neutral-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                    href="#"
                  >
                    Continue reading
                  </a>
                </p>
              </li>

              <li>
                <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-500">
                  2023
                </p>
                <h5 className="font-medium text-sm text-neutral-800 dark:text-neutral-200">
                  How Google Assistant now helps you record stories for kids
                </h5>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
                  Google is constantly updating its consumer AI, Google
                  Assistant, with new features.
                </p>
                <p className="mt-1">
                  <a
                    className="text-sm text-neutral-500 underline hover:text-neutral-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                    href="#"
                  >
                    Continue reading
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <SectionSpacer id="contact" />

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

          <SectionSpacer id="footer" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
