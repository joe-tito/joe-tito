import { config } from "../config";
import SectionTitle from "./section-title";

export default function Work() {
  return (
    <div>
      <SectionTitle title="Work Experience" />

      <div>
        {config.jobs.map(
          (
            {
              company,
              title,
              logo,
              start,
              end,
              responsibilities,
              technologies,
            },
            index
          ) => (
            <div key={index} className="group relative flex gap-x-5">
              <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-neutral-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-6 flex justify-center items-center">
                  <img src={logo} className="shrink-0 size-6" />
                </div>
              </div>

              <div className="grow pb-8 group-last:pb-0">
                <h3 className="mb-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {start} - {end}
                </h3>

                <p className="font-semibold text-sm text-neutral-800 dark:text-neutral-200">
                  {company}{" "}
                  <span className="font-light text-neutral-400">- {title}</span>
                </p>

                {/* <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    The company has high expectations and using OKRs there is a
                    mutual understanding of expectations and performance.
                  </p> */}

                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  {responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="ps-1 text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap mt-3">
                  {technologies.map((technology, index) => (
                    <div
                      key={index}
                      className="text-xs font-semibold bg-fuchsia-700 text-neutral-50 px-2 py-1 rounded-md mr-2 mb-1"
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
