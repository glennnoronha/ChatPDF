"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  SaveIcon,
  RocketIcon,
  HammerIcon,
  CircleArrowDown,
  CheckCircleIcon,
} from "lucide-react";

function FileUploader() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);


  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
    });
  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      {/*tmwwwwwwwwwwwwwwwwwwww*/}
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed mt-10 w-[90%] border-teal-500
           text-teal-500 rounded-lg h-96 flex items-center justify-center
           ${isFocused || isDragAccept ? "bg-teal-300" : "bg-teal-50"}`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col justify-center items-center">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-bounce" />
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p className="text-center">Drag and drop your files here, or click to select files</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
