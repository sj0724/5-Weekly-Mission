import React, { ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }: { children: ReactElement }) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('modal'));
  }, []);

  return <>{portalElement ? createPortal(children, portalElement) : null}</>;
};

export default ModalPortal;
