import { IconAdvanced, IconCode, IconMl } from "./icons/Icons";

const steps = [
  { label: "Basic Python", Icon: IconCode },
  { label: "Advanced Python", Icon: IconAdvanced },
  { label: "Machine Learning", Icon: IconMl },
];

export default function PathRail({ className = "" }) {
  return (
    <ol className={`path-rail ${className}`.trim()} aria-label="Curriculum path">
      {steps.map(({ label, Icon }, index) => (
        <li key={label}>
          <span className="path-rail-icon" aria-hidden="true">
            <Icon />
          </span>
          <span className="path-rail-copy">
            <span className="path-rail-step">Step {index + 1}</span>
            <span className="path-rail-label">{label}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
