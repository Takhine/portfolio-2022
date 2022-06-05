import { GRAPHITE_01 } from "@constants/styleConstants/colors.constants";
import { BoardIcon, GridIcon, ListIcon } from "components/icons";
import { bodypoliticData } from "./bodypolitic";
import { graphyData } from "./graphy";
import { jewelsByMalaData } from "./jewelesByMala";
import { taxofileData } from "./taxofile";
import { unacademyIconsData } from "./unacademyIcons";
import { whatsonnetData } from "./whatsonnet";

export const projectsData: { [key: string]: any } = {
  "graphy": graphyData,
  "unacademy-icons": unacademyIconsData,
  "whatsonnet": whatsonnetData,
  "bodypolitic-info": bodypoliticData,
  "taxofile": taxofileData,
  "jewels-by-mala": jewelsByMalaData
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