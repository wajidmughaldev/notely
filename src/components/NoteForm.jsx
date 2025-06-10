import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "./Button";
import Tag from "./slidebar/Tags";
import { Undo2, Mic } from "lucide-react";
import useNoteStore from "../store/NoteStore";
import useAuthStore from "../store/authStore";
// firebase
import db from "../firebase/database";

const NoteForm = (props) => {
  console.log();
  const {
    mode = "add",
    initialTitle = "",
    initialContent = "",
    noteId,
    screenTitle,
    selectedNoteColor,
  } = props;

  const navigate = useNavigate();
  const currentUser = useAuthStore((state) => state.currentUser);
  const uid = currentUser.uid
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const [selectedColor, setSelectedColor] = useState(selectedNoteColor);

  const addNote = useNoteStore((state) => state.addNote);
  const editNote = useNoteStore((state) => state.editNote);
  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;

    if (mode === "edit") {
      editNote({ id: noteId, title, content, color: selectedColor });
    } else {
      // addNote({ title, content, color: selectedColor });
      addNote({ uid,title, content, color: selectedColor, })
    }
    navigate("/");
  };

  // ✅ This will be passed to <Tag />
  const handleTagColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="mt-10">
      <span className="text-xl font-poppins font-semibold">{screenTitle}</span>

      <Link to="/">
        <Button variant="link" size="sm">
          <Undo2 />
        </Button>
      </Link>

      <div className="w-10/12 p-6 backdrop-blur-lg bg-black/5 rounded-2xl flex flex-col">
        <input
          type="text"
          placeholder="Title goes here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="placeholder:text-stone-400 border-b-1 border-[#141414] py-4 mb-3 focus:outline-0"
        />
        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="placeholder:text-stone-400 focus:outline-0 h-75"
        ></textarea>

        <div className="flex-between">
          <div>
            <small className="text-stone-400">
              Words: {content.trim().split(/\s+/).filter(Boolean).length}
            </small>
            <small> - </small>
            <small className="text-stone-400">
              Characters: {content.length}
            </small>
          </div>

          {/*  Pass state + handler */}
          <Tag
            direction="row"
            selectedNoteColor={selectedColor}
            handleTagColor={handleTagColor}
          />

          <div className="flex-between gap-3">
            <Mic />
            <Button
              text={mode === "edit" ? "Update Note" : "Add Note"}
              variant="primary"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
