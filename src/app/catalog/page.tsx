
import Link from "next/link";
import Ban1Catalog from "@/components/ban1Catalog";
import HeaderCatalog from "@/components/headerCatalog";
import CatalogPage from "@/components/CatalogPage2";

export default function Services() {
    return (
        <>
            <div>
                <HeaderCatalog />
                <CatalogPage />
                <Ban1Catalog />
            </div>
        </>
    );
  }