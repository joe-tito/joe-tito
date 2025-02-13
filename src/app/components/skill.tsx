export default function Skill({ name, logo }: { name: string; logo: string }) {
  return (
    <li className="mr-4 mb-2 flex items-center text-sm text-gray-800 dark:text-neutral-200 space-x-1">
      <img src={logo} className="shrink-0 size-4 me-1" />
      <div>{name}</div>
    </li>
  );
}
