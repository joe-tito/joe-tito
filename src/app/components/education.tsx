import SectionTitle from "./section-title";

export default function Education() {
  return (
    <div>
      <SectionTitle title="Education" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
          <img src="images/schools/depaul.png" className="shrink-0 size-20 " />
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
          <img src="images/schools/niu.png" className="shrink-0 size-20 " />
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
  );
}
