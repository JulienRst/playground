import React from 'react';

type ReactHTMLElement<T = HTMLDivElement> = React.DetailedHTMLProps<
  React.HTMLAttributes<T>,
  T
>;

export default ReactHTMLElement;
