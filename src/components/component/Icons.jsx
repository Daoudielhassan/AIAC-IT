import { CalendarDays, Clock, Linkedin, Mail, Mountain } from "lucide-react";

export const MountainIcon = Mountain;
export const CalendarDaysIcon = CalendarDays;
export const ClockIcon = Clock;
export const LinkedinIcon = Linkedin;
export const MailIcon = Mail;
export function GithubIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-github"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.53 2.29 6.5 5.43 7.56.4.074.55-.174.55-.388 0-.19-.007-.693-.011-1.358-2.212.48-2.676-1.06-2.676-1.06-.36-.912-.88-1.155-.88-1.155-.717-.49.054-.48.054-.48.795.056 1.215.82 1.215.82.707 1.21 1.85.86 2.3.658.073-.512.277-.86.504-1.058-1.776-.203-3.644-.889-3.644-3.953 0-.873.312-1.587.82-2.146-.082-.203-.356-1.024.078-2.13 0 0 .68-.22 2.22.83.645-.18 1.34-.271 2.027-.273.688.002 1.382.092 2.027.273 1.54-1.05 2.22-.83 2.22-.83.435 1.106.16 1.927.078 2.13.508.559.82 1.273.82 2.146 0 3.071-1.87 3.748-3.65 3.95.285.25.54.739.54 1.49 0 1.078-.01 1.948-.01 2.21 0 .215.148.464.558.387C13.71 14.5 16 11.53 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}
export function CodeIcon(props) {
  return (
    <svg
      {...props}
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function DatabaseIcon(props) {
  return (
    <svg
      {...props}
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

export function GamepadIcon(props) {
  return (
    <svg
      {...props}
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
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

export function GlobeIcon(props) {
  return (
    <svg
      {...props}
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
