import { useState } from "react";

export default function Dropbox({items}) {

    // const items = [
    //     { name: "Important File 1", link: "https://example.com/file1" },
    //     { name: "Document A", link: "https://example.com/docA" },
    //     { name: "Report B", link: "https://example.com/reportB" },
    //     { name: "Image C", link: "https://example.com/imageC" }
    //   ];
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  if (!items || items.length === 0) return <p>No items available</p>;

  const toggleSelection = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const onView = (item) => {
    alert(`Viewing: ${item.date}`);
  };

  return (
    <div className="w-auto text-sm border  rounded-lg shadow-sm ">
      {/* Top Item */}
      <div
        className="p-2 flex items-center justify-between cursor-pointer  text-black rounded-t-lg"
        onClick={() => setOpen(!open)}
      >
        <span>{items[0].date.slice(0,10)}</span>
        <span>{open ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown List */}
      {open && (
        <div className="border-t bg-white shadow-md">
          {items.slice(1).map((item, index) => (
            <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => toggleSelection(item)}
                className="cursor-pointer"
              />
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  onView(item);
                }}
              >
                {item.date.slice(0,10)}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
