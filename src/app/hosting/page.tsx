
import Link from "next/link";
import Ban9 from "@/components/ban9";
import HeaderHosting from "@/components/headerHosting";
import HostingPage from "@/components/HostingPage";

export default function Connect() {
    return (
        <>
            <div>
                <HeaderHosting />
                <HostingPage />
                <Ban9 />
            </div>
        </>
    );
  }