"use client"

import { useState } from "react"
import Select, { SingleValue, StylesConfig } from "react-select"
import { languageOptions } from "@/components/constants/languageOptions"
import { customStyles as importedCustomStyles } from "@/components/constants/customStyles"
import { classnames } from "@/utils/general"
import CodeEditorWindow from "@/components/editor/CodeEditorWindow"
import OutputWindow from "@/components/editor/OutputWindow"
import CustomInput from "@/components/editor/CustomInput"
import OutputDetails from "../components/editor/OutputDetails"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const javascriptDefault = `// Binary Search Implementation
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return "ArnoCodes- a place to grow";
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return "ArnoCodes- a place to grow";
}

// Test the function
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = binarySearch(arr, target);
console.log(result);
`

interface OutputDetails {
  status?: {
    id: number
    description: string
  }
  memory: string
  time: string
  compile_output?: string
  stdout?: string
  stderr?: string
}
// Removed unused localCustomStyles

const PracticePage = () => {
  const [code, setCode] = useState(javascriptDefault)
  const [customInput, setCustomInput] = useState("")
  const [outputDetails, setOutputDetails] = useState<OutputDetails | null>(null)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [language, setLanguage] = useState(languageOptions[0])

  // Function to safely encode to base64
  const safeEncode = (str: string): string => {
    try {
      return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => {
          return String.fromCharCode(Number.parseInt(p1, 16))
        }),
      )
    } catch (e) {
      console.error("Encoding error:", e)
      return btoa("Error encoding input")
    }
  }

  // Function to safely decode from base64
  const safeDecode = (str: string): string => {
    try {
      return decodeURIComponent(
        Array.prototype.map
          .call(atob(str), (c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join(""),
      )
    } catch (e) {
      console.error("Decoding error:", e)
      return "Error decoding output"
    }
  }

  const handleCompile = async () => {
    setProcessing(true)
    setError(null)
    setOutputDetails(null) // Reset output details before new compilation

    try {
      // Safely encode the code and input
      const encodedCode = safeEncode(code)
      const encodedInput = customInput ? safeEncode(customInput) : ""

      const formData = {
        language_id: language.id,
        source_code: encodedCode,
        stdin: encodedInput,
      }

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Content-Type": "application/json",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": "4848ca4ee9msh15296e7b0b4b8ecp140dbcjsn34ef899b1022",
        },
        body: JSON.stringify(formData),
      }

      // Create submission
      const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true", options)

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const jsonResponse = await response.json()

      if (!jsonResponse.token) {
        throw new Error("No token received from the API")
      }

      // Poll for results
      let attempts = 0
      const maxAttempts = 10
      let result = null

      while (attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        const statusResponse = await fetch(
          `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
              "X-RapidAPI-Key": "4848ca4ee9msh15296e7b0b4b8ecp140dbcjsn34ef899b1022",
            },
          },
        )

        if (!statusResponse.ok) {
          throw new Error(`Status check failed with status ${statusResponse.status}`)
        }

        result = await statusResponse.json()

        // Process the result to decode base64 content
        if (result.stdout) {
          result.stdout = safeDecode(result.stdout)
        }
        if (result.stderr) {
          result.stderr = safeDecode(result.stderr)
        }
        if (result.compile_output) {
          result.compile_output = safeDecode(result.compile_output)
        }

        if (result.status?.id > 2) {
          break
        }

        attempts++
      }

      if (!result) {
        throw new Error("Failed to get compilation results")
      }

      // Set the processed output details
      setOutputDetails(result)
    } catch (err) {
      console.error("Error:", err)
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      setOutputDetails({
        status: {
          id: 13,
          description: "Internal Error",
        },
        memory: "0",
        time: "0",
        stderr: err instanceof Error ? err.message : "An unknown error occurred",
      })
    } finally {
      setProcessing(false)
    }
  }

  const onChange = (action: string, data: string) => {
    switch (action) {
      case "code": {
        setCode(data)
        break
      }
      default: {
        console.warn("case not handled!", action, data)
      }
    }
  }

  const handleLanguageChange = (newValue: unknown) => {
      const selectedOption = newValue as SingleValue<{ id: number; name: string; label: string; value: string }>;
      if (selectedOption) {
          const selectedLanguage = languageOptions.find(lang => lang.value === selectedOption.value);
          if (selectedLanguage) {
              setLanguage(selectedLanguage);
          }
      }
  }

  return (
    <div className="flex-1 bg-arno-dark-900">
      <div className="flex flex-col h-screen">
        <div className="p-4 flex flex-col sm:flex-row gap-4 items-center bg-arno-dark-800 border-b border-arno-dark-600">
          <div className="w-full sm:w-64">
            <Select
              placeholder={`Select Language`}
              options={languageOptions}
              styles={importedCustomStyles as StylesConfig}
              defaultValue={languageOptions[0]}
              onChange={handleLanguageChange}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row flex-1 gap-2 p-2 overflow-hidden">
          <div className="flex-1 min-h-[300px] lg:min-h-0">
            <CodeEditorWindow code={code} onChange={onChange} language={language.value} theme={"oceanic-next"} />
          </div>

          <div className="flex flex-col gap-2 w-full lg:w-[400px]">
            <div className="flex flex-col h-[300px] lg:h-[calc(50vh-2rem)] bg-arno-dark-800 rounded-lg p-4 overflow-hidden">
              {outputDetails && <OutputWindow outputDetails={outputDetails} />}
              <CustomInput customInput={customInput} setCustomInput={setCustomInput} />
            </div>

            <div className="flex flex-col flex-1 bg-arno-dark-800 rounded-lg p-4">
              {error && <div className="text-red-500 mb-2 text-sm">Error: {error}</div>}
              <Button
                onClick={handleCompile}
                disabled={!code || processing}
                className={classnames("mt-4 w-full", processing ? "bg-gray-700" : "")}
              >
                {processing ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing...
                  </div>
                ) : (
                  "Compile and Execute"
                )}
              </Button>
              {outputDetails && <OutputDetails outputDetails={outputDetails} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticePage