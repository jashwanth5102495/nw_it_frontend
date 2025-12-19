import React, { createContext, useContext, useRef, useState, useCallback } from 'react';

export type CursorFollowSide = 'top' | 'bottom' | 'left' | 'right';
export type CursorFollowAlign = 'start' | 'center' | 'end';

interface CursorContextValue {
  x: number;
  y: number;
  hovering: boolean;
}

const CursorContext = createContext<CursorContextValue>({ x: 0, y: 0, hovering: false });

interface ProviderProps {
  global?: boolean;
  children: React.ReactNode;
}

export const CursorProvider: React.FC<ProviderProps> = ({ children }) => {
  // Local provider simply passes through context from the container
  return <>{children}</>;
};

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const CursorContainer: React.FC<ContainerProps> = ({ children, className }) => {
  const [state, setState] = useState<CursorContextValue>({ x: 0, y: 0, hovering: false });
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setState({ x: e.clientX - r.left, y: e.clientY - r.top, hovering: true });
  }, []);

  const onLeave = useCallback(() => {
    setState((s) => ({ ...s, hovering: false }));
  }, []);

  return (
    <CursorContext.Provider value={state}>
      <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
        {/* Content */}
        {children}
      </div>
    </CursorContext.Provider>
  );
};

interface CursorProps {
  children: React.ReactNode;
}

export const Cursor: React.FC<CursorProps> = ({ children }) => {
  const { x, y, hovering } = useContext(CursorContext);
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        opacity: hovering ? 1 : 0,
        transition: 'opacity 120ms ease-out',
      }}
    >
      {children}
    </div>
  );
};

interface CursorFollowProps {
  children: React.ReactNode;
  side?: CursorFollowSide;
  sideOffset?: number;
  align?: CursorFollowAlign;
  alignOffset?: number;
}

export const CursorFollow: React.FC<CursorFollowProps> = ({
  children,
  side = 'bottom',
  sideOffset = 15,
  align = 'end',
  alignOffset = 5,
}) => {
  const { x, y, hovering } = useContext(CursorContext);

  let translateX = 0;
  if (align === 'start') translateX = -alignOffset;
  else if (align === 'end') translateX = alignOffset;

  let translateY = 0;
  if (side === 'top') translateY = -sideOffset;
  else if (side === 'bottom') translateY = sideOffset;
  else if (side === 'left') translateX = -sideOffset;
  else if (side === 'right') translateX = sideOffset;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `translate(${translateX}px, ${translateY}px)`,
        pointerEvents: 'none',
        opacity: hovering ? 1 : 0,
        transition: 'opacity 120ms ease-out',
      }}
    >
      {children}
    </div>
  );
};