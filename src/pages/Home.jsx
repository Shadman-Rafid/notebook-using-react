import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../features/noteSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddNotes = (e) => {
    e.preventDefault();

    if (title !== "" && description !== "") {
      const newNote = {
        id: Date.now().toString(32),
        title,
        description,
        createdAt: new Date().toString(),
      };
      setTitle("");
      setDescription("");
      dispatch(addNote(newNote));
      toast.success("Note added successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.error("Please fill up the fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-1/4 bg-white shadow-2xl rounded-md px-4 py-5 box-border">
          <div>
            <h1 className="font-mono text-3xl text-black text-center mb-4">
              Add Your Notes
            </h1>
            <input
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="w-full rounded-md border border-blue-300 p-2 outline-none"
            />
            <textarea
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              maxLength={400}
              rows={5}
              className="w-full rounded-md border border-blue-300 p-2 mt-3 outline-none resize-none"
            />
            <button
              onClick={handleAddNotes}
              className="bg-[#333] text-white text-base font-mono px-5 py-2 rounded-md mt-3"
            >
              Save Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
