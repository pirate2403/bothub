import { useState } from 'react';
import { BREAKPOINT_NAME } from '@/constants/breakpoint';
import { useBreakpoint } from '@/contexts/breakpoint';
import { Accordion } from '@/ui/accordion';
import { Dropdown } from '@/ui/dropdown';
import { NavigationDropdownList } from './navigation-dropdown-list';

const EXPANDABLE_COMPONENT = {
  [BREAKPOINT_NAME.DESKTOP]: Dropdown,
  [BREAKPOINT_NAME.TABLET]: Accordion,
  [BREAKPOINT_NAME.MOBILE]: Accordion,
};

export const NavigationDropdown = () => {
  const [isVisibleList, setIsVisibleList] = useState(false);
  const breakpoint = useBreakpoint();

  const handleListVisible = (open: boolean) => {
    setIsVisibleList(open);
  };

  const handleLinkClick = () => {
    setIsVisibleList(false);
  };

  const ExpandableComponent = EXPANDABLE_COMPONENT[breakpoint];

  return (
    <ExpandableComponent
      title="Продукты"
      open={isVisibleList}
      onClick={handleListVisible}
      position="left"
      kind="secondary"
    >
      <NavigationDropdownList
        key="dropdown-=list"
        handleLinkClick={handleLinkClick}
      />
    </ExpandableComponent>
  );
};
