import Ban1About from "@/components/ban1About";
import Ban9 from "@/components/ban9";
import HeaderAbout from "@/components/headerAbout";
import Link from "next/link";

export default function About() {
    return (
        <>
            <div>
                <HeaderAbout />
                <Ban1About />
                <Ban9 />
            </div>
        </>
    );
  }