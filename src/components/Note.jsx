 import React,{useState} from "react";
import clsx from "clsx";
import { Trash2, Pencil, EyeOff,Eye } from "lucide-react";
import { Link } from "react-router-dom";
import useNoteStore from "../store/noteStore";
import Button from "./Button";
const Note = ({ data }) => {

  const note = useNoteStore((state) =>
    state.notes.find((n) => n.id === data.id)
  );
    
  const { id, color, title, content, blur, date } = note || data;
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedContent =
    content.length > 200 ? content.substring(0, 200) + "..." : content;


const roundedCircle =
  "w-[30px] h-[30px] rounded-full bg-[#141414] text-white flex justify-center items-center hover:bg-white hover:text-[#141414] hover:scale-80 transition-all duration-200 cursor-pointer";

  
  const actions = [
    {
      icon: <Trash2 size={15} />,
      name: "delete",
      onClick: () => deleteNote(id),
    },
    {
      icon: <Pencil size={15} />,
      name: "edit",
      path: "/edit/" + id,
    },
    {
      icon: blur ? <Eye size={15} /> : <EyeOff size={15} />,
      name: "toggle-private",
      onClick: () => toggleBlur(id),
    },
  ];
  const deleteNote = useNoteStore((state) => state.deleteNote);
  const toggleBlur = useNoteStore((state) => state.toggleBlur);
  return (
    <div
      className={clsx("w-[300px] p-4 rounded-md text-black")}
      style={{ backgroundColor: color }}
    >
      <div className={clsx(blur && "blur-sm select-none pointer-events-none")}>
        <h1 className="text-xl underline font-semibold">{title}</h1>
        <p className="leading-5 mt-2">
        {isExpanded ? content : truncatedContent}
        {content.length > 200 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className=" text-sm text-stone-700 underline"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </p>
      </div>
      <div className="flex justify-between items-start pt-4">
        <small>{date}</small>
        <ul className="flex gap-1">
          {actions.map(({ icon, path, onClick }, index) => (
            <Button
              path={path}
              key={index}
              className={roundedCircle}
              preventDefaultStyle={true}
              onClick={() => onClick(id)}
            >
              {icon}
            </Button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Note;
