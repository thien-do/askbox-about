import { ReactNode } from 'react';
import { PricingYes } from './yes';
import { PricingNo } from './no';

export function PricingCell(props: {
  value: boolean | string;
}): ReactNode {
  const { value } = props;

  return (
    <td className="align-middle text-center">
      {typeof value === 'string'
        ? value
        : value ? <PricingYes /> : <PricingNo />}
    </td>
  );
} 