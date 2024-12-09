import React from 'react';
import { Accordion } from '@/components/ui/Accordion';
import { Alert } from '@/components/ui/Alert';
import { AlertDialog } from '@/components/ui/AlertDialog';

export default function App() {
  const accordionItems = [
    { id: '1', title: 'Item 1', content: 'This is the content for item 1' },
    { id: '2', title: 'Item 2', content: 'This is the content for item 2' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Shadcn Components</h1>
      <Accordion items={accordionItems} />
      <Alert
        title="Info Alert"
        description="This is an info alert."
        type="info"
      />
      <AlertDialog
        title="Confirm Action"
        description="Are you sure you want to proceed?"
        onConfirm={() => alert('Confirmed!')}
      />
    </div>
  );
}
