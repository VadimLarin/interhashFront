
import Link from "next/link";
import Ban9 from "@/components/ban9";
import HeaderConnect from "@/components/headerConnect";
import ConnectPage from "@/components/ConnectPage";

export default function Connect() {
    return (
        <>
            <div>
                <HeaderConnect />
                <ConnectPage />
                <Ban9 />
            </div>
        </>
    );
  }