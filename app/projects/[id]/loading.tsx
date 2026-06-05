import React from "react"
import { Section, SectionContent } from "@/components/widgets/Section"
import { ProjectDetailSkeleton } from "@/components/ui/skeleton"

export default function ProjectDetailLoading() {
    return (
        <Section className="pb-8">
            <SectionContent className="flex flex-col gap-6">
                <ProjectDetailSkeleton />
            </SectionContent>
        </Section>
    )
}
