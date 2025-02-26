interface OutputDetailsProps {
  outputDetails: {
    status?: {
      description?: string;
    };
    memory?: string;
    time?: string;
  };
}

const OutputDetails: React.FC<OutputDetailsProps> = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="text-sm text-white">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-arno-dark-700">
          {outputDetails?.status?.description || "Unknown"}
        </span>
      </p>
      <p className="text-sm text-white">
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-arno-dark-700">{outputDetails?.memory || "0 KB"}</span>
      </p>
      <p className="text-sm text-white">
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-arno-dark-700">{outputDetails?.time || "0 ms"}</span>
      </p>
    </div>
  )
}

export default OutputDetails

