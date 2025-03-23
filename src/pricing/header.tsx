import { ReactNode } from 'react';

export function PricingHeader(props: {
  /**
   * Content overflows to the right side by default.
   * In really small screen, such as 320px,
   * this makes the text overlap with the next column.
   * This makes the text overflow to the left side,
   * which could be an empty space.
   */
  reverseOverflow?: boolean;
  children: ReactNode;
}): ReactNode {
  const { reverseOverflow, children } = props;

  return (
    <th scope="col" className="text-center">
      <div
        className={[
          'flex sm:block',
          reverseOverflow ? 'justify-end' : '',
        ].join(' ')}
      >
        <div className="bg-white dark:bg-stone-800 p-1">
          {children}
        </div>
      </div>
    </th>
  );
} 
