import { SVGProps, Ref, forwardRef } from "react";
const Arrow = (props: SVGProps<SVGSVGElement>, _ref: Ref<SVGSVGElement>) => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 8.5L8 1.5L15 8.5"
      stroke="#BCB7C2"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const ForwardRef = forwardRef(Arrow);
export default ForwardRef;
