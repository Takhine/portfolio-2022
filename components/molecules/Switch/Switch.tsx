import { useState } from "react";
import {useTheme} from 'next-themes'
import { Switch } from "@headlessui/react";
import Image from "next/image";

interface CustomSwitchProps {}

const CustomSwitch: React.FC<CustomSwitchProps> = () => {
  const {theme, setTheme} = useTheme()
  const [enabled, setEnabled] = useState(true);

  const handleTheme = (enabled: boolean) => {
    setEnabled(enabled);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleTheme}
      className={`${enabled ? "bg-slate" : "bg-graphite03"}
      relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Enable notifications</span>
      {/* <span
        className={`${enabled ? "translate-x-7" : "translate-x-0"}
pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      /> */}
      <div
        className={`flex shadow rounded-full mr-6 cursor-pointer ${
          enabled
            ? "translate-x-7 shadow-blue-400"
            : "translate-x-0 shadow-rose-300"
        }`}
      >
        {enabled ? (
          <Image
            className="rounded-full rotate-image"
            src="/images/moon.jpeg"
            width="24px"
            height="24px"
          />
        ) : (
          <Image
            className="rounded-full rotate-image"
            src="/images/sun.jpeg"
            width="24px"
            height="24px"
          />
        )}
      </div>
    </Switch>
  );
};

CustomSwitch.displayName = "CustomSwitch";

export default CustomSwitch;
