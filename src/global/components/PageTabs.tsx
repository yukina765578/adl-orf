import React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const PageTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "Lounge", path: "/adl-orf/lounge" },
    { label: "Atelier 1", path: "/adl-orf/atelier1" },
    { label: "Atelier 2", path: "/adl-orf/atelier2" },
  ];

  // Determine active tab index based on current path
  const getActiveIndex = () => {
    const currentPath = location.pathname;
    const index = tabs.findIndex((tab) => tab.path === currentPath);
    return index !== -1 ? index : 0;
  };

  const handleTabChange = (index: number) => {
    navigate(tabs[index].path, { state: { shouldFade: true } });
  };

  const tabsContainerStyle = {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 100,
    backgroundColor: "gray.200",
    borderRadius: "4px",
    padding: "4px",
  };

  return (
    <Tabs
      index={getActiveIndex()}
      onChange={handleTabChange}
      variant="enclosed"
      sx={tabsContainerStyle}
    >
      <TabList justifyContent="center" border="none">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.path}
            fontSize="14px"
            fontWeight="semibold"
            borderRadius="4px"
            whiteSpace="nowrap"
            color="gray.600"
            paddingX="20px"
            _selected={{
              color: "gray.800",
              backgroundColor: "white",
              borderColor: "transparent",
            }}
            margin="0"
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default PageTabs;
