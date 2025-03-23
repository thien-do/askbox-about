import { ReactNode } from 'react';
import { PricingCell } from './cell';

export function PricingItem(props: {
  title: string;
  standard?: boolean | string;
  pro?: boolean | string;
  team?: boolean | string;
  children?: ReactNode;
}): ReactNode {
  const { title, standard, pro, team, children } = props;

  const hasDesc = !!children;

  return (
    <>
      <tr className={hasDesc ? 'border-b-0' : ''}>
        <th scope="row" className="font-medium py-6">
          {title}
        </th>
        <PricingCell value={standard ?? false} />
        <PricingCell value={pro ?? false} />
        <PricingCell value={team ?? false} />
      </tr>
      {hasDesc && (
        <tr>
          <td
            colSpan={4}
            className="text-stone-500 dark:text-stone-400 pt-0 pb-6"
          >
            {children}
          </td>
        </tr>
      )}
    </>
  );
}