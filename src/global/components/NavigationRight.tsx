import { memo, SVGProps } from 'react';

const NavigationRight = (props: SVGProps<SVGSVGElement>) => (
    <svg
      preserveAspectRatio='none'
      viewBox='0 0 16 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      style={{ width: '16px', height: '33px' }}
    >
      <path
        d='M0.538425 -0.522108L0.0163159 -1.06053L-1.06053 -0.0163145L-0.538425 0.522111L0.538425 -0.522108ZM16 16.5L16.5384 17.0221L17.0447 16.5L16.5384 15.9779L16 16.5ZM-0.538425 0.522111L15.4616 17.0221L16.5384 15.9779L0.538425 -0.522108L-0.538425 0.522111ZM15.4616 15.9779L-0.538425 32.4779L0.538425 33.5221L16.5384 17.0221L15.4616 15.9779Z'
        fill='#A3A3A3'
      />
    </svg>
  );

const Memo = memo(NavigationRight);
export { Memo as NavigationRight };