'use client';

import React, { PropsWithChildren } from 'react';
import useResponsive from '@Hooks/useResponsive';

const NotMobile = ({ children }: PropsWithChildren) => {
  const { isNotMobile } = useResponsive();
  return isNotMobile ? (children as React.ReactElement) : null;
};

if (process.env.NODE_ENV !== 'production') {
  NotMobile.displayName = 'NotMobile';
}

export default React.memo(NotMobile);
