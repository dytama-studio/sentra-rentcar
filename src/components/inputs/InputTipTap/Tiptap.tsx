"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import "./tiptap.css";

import { Control, useController } from "react-hook-form";
import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiLink2,
  FiCode,
  FiList,
  FiRotateCcw,
  FiRotateCw,
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
} from "react-icons/fi";

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
  control: Control<any>;
  required?: boolean;
  readOnly?: boolean;
};

function InputTiptap({
  label,
  name,
  placeholder = "Write something awesome...",
  control,
  required = false,
  readOnly = false,
}: Props) {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required },
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Strike,
      Link,
      BulletList,
      OrderedList,
      ListItem,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({ placeholder }),
    ],
    content: value || "",
    editable: !readOnly,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Handlers
  const handleBold = () => editor?.chain().focus().toggleBold().run();
  const handleItalic = () => editor?.chain().focus().toggleItalic().run();
  const handleUnderline = () => editor?.chain().focus().toggleUnderline().run();
  const handleStrike = () => editor?.chain().focus().toggleStrike().run();

  const handleLink = () => {
    const url = prompt("URL");
    if (url) {
      editor
        ?.chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const handleOrderedList = () =>
    editor?.chain().focus().toggleOrderedList().run();
  const handleBulletList = () =>
    editor?.chain().focus().toggleBulletList().run();
  const handleBlockquote = () =>
    editor?.chain().focus().toggleBlockquote().run();
  const handleCode = () => editor?.chain().focus().toggleCode().run();
  const handleTextAlign = (align: "left" | "center" | "right" | "justify") =>
    editor?.chain().focus().setTextAlign(align).run();
  const handleUndo = () => editor?.chain().focus().undo().run();
  const handleRedo = () => editor?.chain().focus().redo().run();

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm text-slate-700 font-medium mb-1 dark:text-white">
          {label}
        </label>
      )}

      <div
        className={`border ${
          invalid ? "border-red-600" : "border-gray-200"
        } rounded-xl overflow-hidden dark:border-neutral-700`}
      >
        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 border rounded-lg p-2 bg-gray-50 dark:bg-neutral-800">
          <button
            type="button"
            onClick={handleBold}
            className={`size-8 ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
          >
            <FiBold />
          </button>
          <button
            type="button"
            onClick={handleItalic}
            className={`size-8 ${editor.isActive("italic") ? "bg-gray-300" : ""}`}
          >
            <FiItalic />
          </button>
          <button
            type="button"
            onClick={handleUnderline}
            className={`size-8 ${editor.isActive("underline") ? "bg-gray-300" : ""}`}
          >
            <FiUnderline />
          </button>
          <button
            type="button"
            onClick={handleStrike}
            className={`size-8 ${editor.isActive("strike") ? "bg-gray-300" : ""}`}
          >
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
              <path d="M14 12a4 4 0 0 1 0 8H6"></path>
              <line x1="4" x2="20" y1="12" y2="12"></line>
            </svg>
          </button>
          <button type="button" onClick={handleLink} className="size-8 ">
            <FiLink2 />
          </button>

          {/* Text Align */}
          <button
            type="button"
            onClick={() => handleTextAlign("left")}
            className="size-8"
          >
            <FiAlignLeft />
          </button>
          <button
            type="button"
            onClick={() => handleTextAlign("center")}
            className="size-8"
          >
            <FiAlignCenter />
          </button>
          <button
            type="button"
            onClick={() => handleTextAlign("right")}
            className="size-8"
          >
            <FiAlignRight />
          </button>
          <button
            type="button"
            onClick={() => handleTextAlign("justify")}
            className="size-8"
          >
            <FiAlignJustify />
          </button>

          <button type="button" onClick={handleCode} className="size-8 ">
            <FiCode />
          </button>
          <button type="button" onClick={handleUndo} className="size-8">
            <FiRotateCcw />
          </button>
          <button type="button" onClick={handleRedo} className="size-8">
            <FiRotateCw />
          </button>

          <button
            type="button"
            onClick={handleOrderedList}
            className={`size-8 ${editor.isActive("orderedList") ? "bg-gray-300" : ""}`}
          >
            1.
          </button>
          <button
            type="button"
            onClick={handleBulletList}
            className={`size-8 ${editor.isActive("bulletList") ? "bg-gray-300" : ""}`}
          >
            <FiList />
          </button>
          <button
            type="button"
            onClick={handleBlockquote}
            className="size-8 invisible"
          >
            {"  "}
          </button>
        </div>

        {/* Editor */}
        <div className="h-[20rem] overflow-auto p-4">
          <div className="p-2 [&_*]:outline-none w-full">
            <EditorContent
              editor={editor}
              className="tiptap w-full min-h-[280px]"
            />
          </div>
        </div>
      </div>

      {invalid && <p className="text-sm text-red-600 mt-1">{error?.message}</p>}
    </div>
  );
}

export default InputTiptap;
