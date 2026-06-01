import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact • pixelThreader",
    description: "Get in touch with pixelThreader (Piyush Rana) for consulting, collaborations, or custom engineering projects.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
