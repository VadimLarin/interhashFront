
import Link from "next/link";
import Ban9 from "@/components/ban9";
import HeaderDefpay from "@/components/headerDefpay";
import DefpayPage from "@/components/DefpayPage";


export default function Connect() {
    return (
        <>
            <div>
                <HeaderDefpay />
                <DefpayPage />
                <Ban9 />
            </div>
        </>
    );
  }