import { FileDown } from "lucide-react";
import { Button } from "../ui/button";

const FileDownload = () => {
  return (
    <Button
      className="bg-primary text-white"
      size={"icon"}
      variant={"secondary"}
    >
      <FileDown />
    </Button>
  );
};

export default FileDownload;
