"use client"

import { useState } from "react"
import Editor from "@monaco-editor/react"

interface CodeEditorWindowProps {
  onChange: (field: string, value: string) => void;
  language?: string;
  code?: string;
  theme?: string;
}

const CodeEditorWindow = ({ onChange, language, code, theme }: CodeEditorWindowProps) => {
  const [value, setValue] = useState(code || "")

  const handleEditorChange = (value: string | undefined) => {
    setValue(value || "")
    onChange("code", value || "")
  }

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="100%"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: "on",
        }}
      />
    </div>
  )
}
export default CodeEditorWindow

