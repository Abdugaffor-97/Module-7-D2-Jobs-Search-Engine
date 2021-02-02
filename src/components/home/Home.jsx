import React, { useState, useEffect } from "react";

export default function Home() {
  const [form, setForm] = useState({ position: "", location: "" });
  // const [data, setData] = useState(null);

  const updateForm = (e) => {
    const newForm = { ...form };
    const currentId = e.target.id;
    newForm[currentId] = e.target.value;
    setForm(newForm);
  };

  const fetchData = async () => {
    try {
      const url =
        "https://jobs.github.com/positions.json?description=frontend&location=berlin";

      let response = await fetch(url, {
        headers: new Headers({ mode: "no-cors" }),
      });

      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header>
      <form>
        <label htmlFor="position">Postion </label>
        <input
          id="position"
          value={form.position}
          type="text"
          name="position"
          onChange={updateForm}
        />
        <br />
        <br />
        <label htmlFor="location">Location </label>
        <input
          id="location"
          value={form.location}
          type="text"
          name="location"
          onChange={updateForm}
        />
        <br />
        <br />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
