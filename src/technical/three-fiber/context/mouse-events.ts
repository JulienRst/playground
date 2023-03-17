import React, { createContext, useContext } from 'react';

type MouseEventType = 'mousedown' | 'mouseup';
type ReactMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export interface LastMouseEvent {
  type: MouseEventType;
  event: ReactMouseEvent;
}

const LastMouseEventContext = createContext<LastMouseEvent | null>(null);

export const useLastMouseEventContext = () => useContext(LastMouseEventContext);

export default LastMouseEventContext;
