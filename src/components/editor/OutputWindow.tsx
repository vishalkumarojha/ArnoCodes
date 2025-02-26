interface OutputDetails {
  status?: {
    id: number
  }
  compile_output?: string
  stdout?: string
  stderr?: string
}

const OutputWindow = ({ outputDetails }: { outputDetails: OutputDetails }) => {
  const getOutput = () => {
    if (!outputDetails) return null

    try {
      if (outputDetails?.status?.id === 6) {
        // compilation error
        return (
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {outputDetails?.compile_output || "Compilation Error"}
          </pre>
        )
      } else if (outputDetails?.status?.id === 3) {
        return (
          <pre className="px-2 py-1 font-normal text-xs text-green-500">
            {outputDetails.stdout || "Success - No output"}
          </pre>
        )
      } else if (outputDetails?.status?.id === 5) {
        return <pre className="px-2 py-1 font-normal text-xs text-red-500">Time Limit Exceeded</pre>
      } else {
        return (
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {outputDetails?.stderr || "Error: Unknown error occurred"}
          </pre>
        )
      }
    } catch {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">An error occurred while processing the output</pre>
      )
    }
  }

  return (
    <>
      <h1 className="font-bold text-xl text-white mb-2">Output</h1>
      <div className="w-full h-full bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
        {getOutput()}
      </div>
    </>
  )
}

export default OutputWindow

