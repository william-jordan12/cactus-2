"use client";

import { useRef, useState } from "react";
import { ImagePlus, Loader2, X } from "lucide-react";

interface ImageDropzoneProps {
  images: string[];
  onChange: (images: string[]) => void;
  multiple?: boolean;
  max?: number;
  label?: string;
}

async function compressToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("That file is not an image"));
      img.onload = () => {
        const MAX = 1200;
        let { width, height } = img;
        if (width > MAX) {
          height = Math.round((height * MAX) / width);
          width = MAX;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas not supported"));
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.75));
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

export default function ImageDropzone({
  images,
  onChange,
  multiple = true,
  max = 5,
  label,
}: ImageDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);

  async function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    setProcessing(true);
    try {
      const files = Array.from(fileList).filter((f) => f.type.startsWith("image/"));
      const uploaded = await Promise.all(files.map(compressToDataUrl));

      if (multiple) {
        const merged = [...images, ...uploaded].slice(0, max);
        onChange(merged);
      } else {
        onChange(uploaded[0] ? [uploaded[0]] : images);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  }

  function remove(index: number) {
    onChange(images.filter((_, i) => i !== index));
  }

  return (
    <div>
      {label && (
        <span className="mb-1.5 block text-sm font-medium text-stone-700">
          {label}
        </span>
      )}

      {images.length > 0 && (
        <div className="mb-3 grid grid-cols-3 gap-2">
          {images.map((src, i) => (
            <div key={i} className="group relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="h-20 w-full rounded-lg border border-stone-200 object-cover"
              />
              <button
                type="button"
                onClick={() => remove(i)}
                className="absolute -right-2 -top-2 rounded-full border border-stone-200 bg-white p-1 text-stone-500 shadow hover:bg-red-50 hover:text-red-600"
                aria-label="Remove image"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-4 py-6 text-center transition-colors ${
          dragging
            ? "border-sage-600 bg-sage-50"
            : "border-stone-300 bg-stone-50 hover:border-sage-500 hover:bg-sage-50/50"
        }`}
      >
        {processing ? (
          <Loader2 className="h-6 w-6 animate-spin text-sage-700" />
        ) : (
          <ImagePlus className="h-6 w-6 text-sage-700" />
        )}
        <p className="text-sm font-medium text-stone-700">
          {processing
            ? "Processing..."
            : multiple
              ? "Drag & drop images here, or click to browse"
              : "Drag & drop an image here, or click to browse"}
        </p>
        <p className="text-xs text-stone-400">
          JPG / PNG · {multiple ? `up to ${max} photos` : "1 photo"} · auto-optimized
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple={multiple}
          className="hidden"
          onChange={(e) => {
            handleFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>
    </div>
  );
}