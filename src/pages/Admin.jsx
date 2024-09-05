import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { items as data } from "../utils/items";

const items = [
  {
    label: "Challenge name",
    name: "title",
    type: "text",
    placeholder: "Enter challenge name",
  },
  {
    label: "Start date",
    name: "startDate",
    type: "date",
    placeholder: "Enter start date",
  },
  {
    label: "End date",
    name: "endDate",
    type: "date",
    placeholder: "Enter end date",
  },
  {
    label: "Type",
    name: "type",
    type: "select",
    options: ["Easy", "Medium", "Hard"],
    placeholder: "Select challenge type",
  },
  {
    label: "Image",
    name: "image",
    type: "file",
    placeholder: "Select challenge image",
  },
];

const style =
  "border px-4 py-2 rounded-sm focus:border-custom-light outline-none";

const Admin = () => {
  const filePickerRef = useRef(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    type: "Easy",
    image: null,
    description: "",
  });

  const { title, startDate, endDate, type, image, description } = formData;

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const selectedFile = e.target.files[0];
      setFile(selectedFile); // Store the selected file
      setFormData({
        ...formData,
        image: selectedFile, // Update the formData with the selected file
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the selected file URL to the data
    const newItem = {
      id: data.length,
      ...formData,
      image: file ? URL.createObjectURL(file) : image, // Use the object URL of the selected file
    };

    data.push(newItem);
    navigate("/hackathon");
  };

  return (
    <section className="flex flex-col h-screen">
      <div className="py-4">
        <h4 className="max-w-6xl mx-auto text-white font-semibold">Challenge Details</h4>
      </div>
      <div className="bg-white py-16 flex-1">
        <form
          className="max-w-6xl mx-auto grid grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1 space-y-8">
            {items.map((item) => (
              <div className="flex flex-col space-y-2" key={item.label}>
                <label>{item.label}</label>
                {item.type === "select" ? (
                  <select
                    className={`${style} appearance-none`}
                    name={item.name}
                    onChange={handleChange}
                  >
                    {item.options.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : item.type === "file" ? (
                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    name={item.name}
                    className={`${style} file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-green-50 file:text-green-500
                    hover:file:bg-green-100`}
                    ref={filePickerRef}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    className={style}
                    onChange={handleChange}
                    required
                  />
                )}
                {item.type === "file" && file && (
                  <div className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="selected image"
                      className="rounded-sm"
                    />
                    <button
                      type="button"
                      className="bg-red-500 text-white absolute right-4 bottom-4 rounded-xl"
                      onClick={() => {
                        setFile(null);
                        setFormData({ ...formData, image: null });
                        filePickerRef.current.value = null; // Reset the file input
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <label>Description</label>
            <textarea
              name="description"
              className={`${style} h-full col-span-1 resize-none`}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-fit bg-custom-green text-white rounded-xl"
          >
            Create challenge
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
