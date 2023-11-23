import { memo, SVGProps } from 'react';

const Group6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={27} cy={27} r={27} stroke='black' strokeWidth={4} />
    <circle cx={27} cy={27} r={15} fill='#0A0A0A' />
  </svg>
);

const Memo = memo(Group6Icon);
export { Memo as HomeButton };
