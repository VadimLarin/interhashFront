import Ban1Services from "@/components/ban1Services";
import Ban2Services from "@/components/ban2Services";
import HeaderServices from "@/components/headerServices";
import Link from "next/link";

export default function Services() {
    return (
        <>
            <div>
                <HeaderServices />
                <Ban1Services />
                <Ban2Services />
            </div>
        </>
    );
  }