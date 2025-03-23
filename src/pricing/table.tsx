import { ReactNode } from 'react';
import { PricingHeader } from './header';
import { PricingHeading } from './heading';
import { PricingItem } from './item';

export function PricingTable(): ReactNode {
  const cols = (
    <colgroup>
      <col className="item" />
      <col className="w-1/5" />
      <col className="w-1/5" />
      <col className="w-1/5" />
    </colgroup>
  )

  const head = (
    <thead className="sticky top-0">
      <tr>
        <th></th>
        <PricingHeader reverseOverflow>Standard</PricingHeader>
        <PricingHeader>Pro</PricingHeader>
        <PricingHeader>Team</PricingHeader>
      </tr>
    </thead>

  )

  const body = (
    <tbody>
      <PricingHeading first>Price</PricingHeading>
      <PricingItem title="Base price" standard="Free" pro="$6.99" team="$39.99" />
      <PricingItem title="Included seats" standard="1" pro="1" team="5" />
      <PricingItem title="Price per extra seat" team="$8.99" />
      <PricingHeading>AI Power</PricingHeading>
      <PricingItem title="Standard models" standard pro team>
        Fast, efficient AI for everyday tasks like
        data processing and targeted marketing.
        Examples: GPT-4o Mini, Gemini Flash, Claude Haiku.
      </PricingItem>
      <PricingItem title="Flagship models" pro team>
        State-of-the-art AI for complex tasks such as
        advanced coding and financial analysis.
        Examples: GPT-4o, Gemini Pro, Claude Opus.
      </PricingItem>
      <PricingItem title="Smart Tools" pro team>
        Access specialized tools beyond text generation,
        including web search and calculators.
      </PricingItem>
      <PricingHeading>Enhanced Capabilities</PricingHeading>
      <PricingItem title="Document Analysis" pro team>
        Read and analyze documents
        for context-specific and updated information,
        such as financial reports or research papers.
      </PricingItem>
      <PricingItem title="Image Understanding" pro team>
        Process and analyze photos, drawings, and screenshots with ease.
      </PricingItem>
      <PricingHeading>Conversation Management</PricingHeading>
      <PricingItem title="Chat History" standard pro team>
        Access your past conversations for easy reference.
      </PricingItem>
      <PricingItem title="Bookmarks" pro team>
        Pin important chats for quick retrieval.
      </PricingItem>
      <PricingItem title="Private Mode" pro team>
        Conduct conversations without storing any history.
        Coming in 2025.
      </PricingItem>
      <PricingItem title="Sharing" pro team>
        Easily share your chats with others.
        Coming in 2025.
      </PricingItem>
      <PricingHeading>Team Suite</PricingHeading>
      <PricingItem title="Cross-Device Sync" team>
        Access your chat history seamlessly across all devices.
        Coming in 2025.
      </PricingItem>
      <PricingItem title="Enhanced Security" team>
        Benefit from robust data encryption for all synced information.
        Coming in 2025.
      </PricingItem>
      <PricingItem title="Single Sign-On" team>
        Streamline access using your company's existing credentials.
        Coming in 2025.
      </PricingItem>
      <PricingItem title="Team Management" team>
        Control service access for your entire organization.
      </PricingItem>
      <PricingItem title="Custom Training Data" team>
        Train bots with industry-specific data for tasks like
        legal contracts, medical reports, and financial analysis.
        Coming in 2025.
      </PricingItem>
    </tbody>
  )

  return (
    <table className="table-fixed">
      {cols}
      {head}
      {body}
    </table>
  );
} 