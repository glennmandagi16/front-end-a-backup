// src/components/AddExperienceRealtime.js
import React, { useState } from "react";
import { database } from "../firebase";
import { ref, push } from "firebase/database";

const AddExperienceRealtime = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buat reference ke database untuk koleksi 'experiences'
    const experiencesRef = ref(database, "experiences");

    // Tambahkan data baru ke Realtime Database
    push(experiencesRef, {
      title,
      company,
      description,
    })
      .then(() => {
        console.log("Data added successfully");
        // Kosongkan input setelah berhasil mengirim data
        setTitle("");
        setCompany("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Company</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Experience
      </button>
    </form>
  );
};

export default AddExperienceRealtime;
