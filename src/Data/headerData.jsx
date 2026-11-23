import { IoMdColorPalette } from "react-icons/io";
import { MdRefresh } from "react-icons/md";
import { MdDarkMode} from "react-icons/md";

export const headerIcons = [
  {
    id: 1,
    icon: <IoMdColorPalette size={23}/>,
    tooltip: "Change Theme"
  },
  {
    id: 2,
    icon:     <MdDarkMode size={20} />,
    tooltip: "light/dark mode"
  },
  {
    id: 3,
    icon:  <MdRefresh size={23}/>,
    tooltip: "Refresh"
  },

]

export const languages = ["English","Francais"]