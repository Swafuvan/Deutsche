import { SVGProps, Ref, forwardRef } from "react";
const AngleBottom = (props: SVGProps<SVGSVGElement>, _ref: Ref<SVGSVGElement>) => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L8 8L15 1"
      stroke="#3E2E4D"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const ForwardRef = forwardRef(AngleBottom);
export default ForwardRef;
