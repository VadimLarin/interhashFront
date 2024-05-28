
import Link from "next/link";
import Ban1Catalog from "@/components/ban1Catalog";
import ProductPage from "@/components/ProductPage";
import HeaderProduct from "@/components/headerProduct";

export default function Services() {
    return (
        <>
            <div>
                <HeaderProduct />
                <ProductPage />
                <Ban1Catalog />
            </div>
        </>
    );
  }