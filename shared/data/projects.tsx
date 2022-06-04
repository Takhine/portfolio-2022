import { GRAPHITE_01 } from "@constants/styleConstants/colors.constants";
import { BoardIcon, GridIcon, ListIcon } from "components/icons";
import { unacademyIconsData } from "./unacademyIcons";

export const projectsData: { [key: string]: any } = {
  "unacademy-icons": unacademyIconsData,
};

export const workTabs = [
  {
    id: 'gallery',
    title: 'Gallery',
    icon: <GridIcon color={GRAPHITE_01} />
  },
  {
    id: 'list',
    title: 'List',
    icon: <ListIcon color={GRAPHITE_01} />
  },
  {
    id: 'board',
    title: 'Board',
    icon: <BoardIcon color={GRAPHITE_01} />
  }
]