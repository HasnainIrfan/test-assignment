import { useEffect, useState } from "react";

// Components
import Checkbox from "../atoms/Checkbox";
import Text from "../atoms/commonText";
import Divider from "../atoms/Divider";
import { Button } from "../atoms/Button";

// Data
import { PagesData } from "../../data/dummydata";

const Task = () => {
  const [pages, setPages] = useState(PagesData);

  const [allSelected, setAllSelected] = useState(false);

  const handleSelectAll = () => {
    const newAllSelected = !allSelected;
    setAllSelected(newAllSelected);
    setPages(pages.map((page) => ({ ...page, selected: newAllSelected })));
  };

  const handleSelectPage = (id: number) => {
    setPages(
      pages.map((page) =>
        page.id === id ? { ...page, selected: !page.selected } : page
      )
    );
  };

  const handleDone = () => {
    const selectedPages = pages.filter((page) => page.selected);

    if (selectedPages.length === 0) {
      alert("Please select at least one page");
      return;
    }

    alert(
      `You have selected ${selectedPages.length} page${
        selectedPages.length > 1 ? "s" : ""
      }`
    );
  };

  useEffect(() => {
    const allPagesSelected = pages.every((page) => page.selected);
    setAllSelected(allPagesSelected);
  }, [pages]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md bg-white rounded-md overflow-hidden shadow-custom">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <Text containerTag="h2" className="text-base font-light text-black">
              All pages
            </Text>
            <Checkbox checked={allSelected} onChange={handleSelectAll} />
          </div>

          <Divider />

          {/* Page List */}
          <div className="space-y-5">
            {pages.map((page) => (
              <div
                key={page.id}
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleSelectPage(page.id)}
              >
                <Text
                  containerTag="span"
                  className="text-base font-light text-black"
                >
                  {page.name}
                </Text>
                <Checkbox
                  checked={page.selected}
                  onChange={() => handleSelectPage(page.id)}
                />
              </div>
            ))}
          </div>

          <Divider />

          {/* Action Button */}
          <Button variant="primary" fullWidth onClick={() => handleDone()}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Task;
