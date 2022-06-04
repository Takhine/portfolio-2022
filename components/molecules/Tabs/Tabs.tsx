import React from "react";
import { Tab } from "@headlessui/react";
import TabLink from "./TabLink";

interface TabsProps {
  tabs: TabProps[];
  tabContent: React.ReactNode[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, tabContent }) => {
  return (
    <Tab.Group>
      <Tab.List>
        {tabs.map((tab) => (
          <Tab key={tab.title}>
            {({ selected }) => (
              <TabLink
                id={tab.id}
                title={tab.title}
                icon={tab.icon}
                isSelected={selected}
              />
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabContent.map((content, index) => (
          <Tab.Panel key={String(index)}>{content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

Tabs.displayName = "Tabs";

export default Tabs;
