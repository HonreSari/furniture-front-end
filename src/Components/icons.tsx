import {
  HomeIcon,
  HamburgerMenuIcon,
  PaperPlaneIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  LayersIcon,
  PlusIcon,
  StarIcon,
  HeartIcon,
  MinusIcon,
  DashboardIcon,
  GearIcon,
  ExitIcon,
} from "@radix-ui/react-icons";

export type IconProps = React.SVGProps<SVGSVGElement>;
export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
      />
    </svg>
  ),
  cart: (props: IconProps) => (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      {...props}
    >
      <circle
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        cx="20"
        cy="57"
        r="6"
      />
      <circle
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        cx="44"
        cy="57"
        r="6"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        x1="26"
        y1="57"
        x2="38"
        y2="57"
      />
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        points="14,57 10,2 0,2 "
      />
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        points="13,43 56,40 63,10 11,10 "
      />
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        points="20,10 22,4 32,4 34,10 "
      />
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        points="32,4 37,1 53,1 56,10 "
      />
    </svg>
  ),
  checkout: (props: IconProps) => (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M38.67,27.35A11.33,11.33,0,1,1,27.35,38.67h0A11.34,11.34,0,0,1,38.67,27.35ZM20.36,37.63a4,4,0,1,1-4,4v0A4,4,0,0,1,20.36,37.63ZM42.8,34.07l-6.06,6.79L34,38.09a.79.79,0,0,0-1.11,0l0,0-1.11,1.07a.7.7,0,0,0-.07,1l.07.08L35.6,44a1.62,1.62,0,0,0,1.14.48A1.47,1.47,0,0,0,37.87,44l7.19-7.87a.83.83,0,0,0,0-1l-1.12-1.05a.79.79,0,0,0-1.11,0ZM8.2,2a2.42,2.42,0,0,1,2.25,1.7h0l.62,2.16H46.36A1.5,1.5,0,0,1,47.9,7.31a1.24,1.24,0,0,1-.06.47h0L43.66,22.43a1.42,1.42,0,0,1-.52.82,16.42,16.42,0,0,0-4.47-.64,16,16,0,0,0-5.47,1H19.36a2.2,2.2,0,0,0-2.22,2.18,2.11,2.11,0,0,0,.13.75h0v.08a2.26,2.26,0,0,0,2.17,1.62h7.1a16,16,0,0,0-2.77,4.61H16a2.32,2.32,0,0,1-2.25-1.7h0L6.5,6.62H4.33A2.37,2.37,0,0,1,2,4.22V4.16A2.46,2.46,0,0,1,4.48,2H8.2Z" />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fill="#4285F4"
        d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
      />
      <path
        fill="#34A853"
        d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
      />
      <path
        fill="#FBBC04"
        d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
      />
      <path
        fill="#EA4335"
        d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
      />
    </svg>
  ),

  home: HomeIcon,
  menu: HamburgerMenuIcon,
  send: PaperPlaneIcon,
  exclamation: ExclamationTriangleIcon,
  arrowLeft: ArrowLeftIcon,
  layers: LayersIcon,
  plus: PlusIcon,
  star: StarIcon,
  heart: HeartIcon,
  minus: MinusIcon,
  dashbord: DashboardIcon,
  gear: GearIcon,
  exit: ExitIcon,
  trash: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
};
