import { SVGProps, Ref, forwardRef } from "react";
const SquareSketch = (props: SVGProps<SVGSVGElement>, _ref: Ref<SVGSVGElement>) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 30C0 13.4315 13.4315 0 30 0H100V90C100 95.5228 95.5229 100 90 100H0V30Z"
      fill="#DF6951"
    />
  </svg>
);
const ForwardRef = forwardRef(SquareSketch);
export default ForwardRef;
