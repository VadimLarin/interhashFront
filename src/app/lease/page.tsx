
import Link from "next/link";
import Ban9 from "@/components/ban9";
import HeaderLease from "@/components/headerLease";
import LeasePage from "@/components/LeasePage";

export default function Lease() {
    return (
        <>
            <div>
                <HeaderLease />
                <LeasePage />
                <Ban9 />
            </div>
        </>
    );
  }