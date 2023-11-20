import { memo, SVGProps } from 'react';

const NavigationLeft = (props: SVGProps<SVGSVGElement>) => (
    <svg
      preserveAspectRatio='none'
      viewBox='0 0 16 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      style={{ width: '16px', height: '33px' }}
    >
    <path
      d='M15.4616 33.5221L15.9837 34.0605L17.0605 33.0163L16.5384 32.4779L15.4616 33.5221ZM1.14445e-06 16.5L-0.538424 15.9779L-1.04471 16.5L-0.538424 17.0221L1.14445e-06 16.5ZM16.5384 32.4779L0.538426 15.9779L-0.538424 17.0221L15.4616 33.5221L16.5384 32.4779ZM0.538426 17.0221L16.5384 0.52211L15.4616 -0.522109L-0.538424 15.9779L0.538426 17.0221Z'
      fill='#A3A3A3'
    />
  </svg>
);

const Memo = memo(NavigationLeft);
export { Memo as NavigationLeft };
