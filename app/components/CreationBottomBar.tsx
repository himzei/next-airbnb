import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreationSubmit from "./SubmitButtons";

export default function CreationBottomBar() {
  return (
    <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24 flex items-center">
      <div className="flex items-center justify-between my-auto  lg:px-10 w-full">
        <Button variant="secondary" size="lg" asChild>
          <Link href="/">Cancel</Link>
        </Button>
        <CreationSubmit />
      </div>
    </div>
  );
}
