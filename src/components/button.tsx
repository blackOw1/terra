import React from 'react';

interface Button {
  type: string;
}

export default function Button(): React.FC<Button> {
  return <button type="">Submit</button>;
}
