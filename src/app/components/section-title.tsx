export default function SectionTitle({
  title,
  classes,
}: {
  title: string;
  classes?: string;
}) {
  return (
    <h2
      className={
        "mb-5 font-medium text-gray-800 dark:text-neutral-200" + " " + classes
      }
    >
      {title}
    </h2>
  );
}
