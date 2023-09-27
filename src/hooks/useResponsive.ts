import { useMediaQuery } from 'react-responsive';

import { screenSizes } from '@Settings/screen-sizes';

const useResponsive = () => {
  const { sm, md } = screenSizes;

  const isNotMobile = useMediaQuery({ minWidth: sm });
  const isMobile = useMediaQuery({ maxWidth: sm - 1 });
  const isTablet = useMediaQuery({ minWidth: sm, maxWidth: md });
  const isDesktop = useMediaQuery({ minWidth: md + 1 });

  return {
    isNotMobile,
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useResponsive;
