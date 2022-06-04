import { useState } from "react";
import { Switch } from "@headlessui/react";

interface CustomSwitchProps {}

const CustomSwitch: React.FC<CustomSwitchProps> = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-graphite01" : "bg-graphite03"}
      relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${enabled ? "translate-x-7" : "translate-x-0"}
pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};

CustomSwitch.displayName = "CustomSwitch";

export default CustomSwitch;
