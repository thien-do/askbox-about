import { ReactNode } from 'react';

export function PricingHeading(props: {
  first?: boolean;
  children: ReactNode;
}): ReactNode {
  const { first, children } = props;

  return (
    <tr>
      <th
        colSpan={4}
        className={[
          first ? 'pt-6' : 'pt-16',
          'pb-6 font-medium text-2xl',
          'text-stone-950 dark:text-stone-50',
        ].join(' ')}
      >
        {children}
      </th>
    </tr>
  );
} 