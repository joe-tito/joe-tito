export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
      {title}
    </h2>
  );
}
