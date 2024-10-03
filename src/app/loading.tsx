import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className=" h-full w-full flex items-center justify-center">
      <Loader color="black" className=" animate-spin" size={48} />
    </div>
  )
}

export default Loading