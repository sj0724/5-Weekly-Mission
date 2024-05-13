import React, { ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }: { children: ReactElement }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('modal'));
  }, []);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      {mounted && portalElement ? createPortal(children, portalElement) : null}
    </>
  );
};

export default ModalPortal;
