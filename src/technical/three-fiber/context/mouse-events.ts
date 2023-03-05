import React, { createContext, useContext } from 'react';

type MouseEventType = 'mousedown' | 'mouseup';
type ReactMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export interface LastMouseEvent {
  type: MouseEventType;
  event: ReactMouseEvent;
}

// export default function useMouseEvents() {
//   console.log('//// Rerender useMouseEvents');
//   const [lastMouseEvents, setLastMouseEvent] = useState<LastMouseEvent[]>([]);

//   return {
//     lastMouseEvents,
//     setLastMouseEvent,
//   };
// }

const LastMouseEventContext = createContext<LastMouseEvent | null>(null);

export const useLastMouseEventContext = () => useContext(LastMouseEventContext);

export default LastMouseEventContext;
