import { Section, SectionContent } from "@/components/widgets/Section"
import { ProjectHeader, ProjectNavigator, ProjectDescription } from "@/components/widgets/ProjectComponent"

const page = () => {
    const navItems = {
        preview: "Preview",
        features: "Features",
        archive: "Archive",
        versions: "Versions",
        "github-stats": "GitHub Stats"
    };

    const projectData = {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, eros sit amet consequat accumsan, dolor metus bibendum mi, sed aliquam nisi augue ac lacus. Vestibulum eu dictum arcu. Donec in pulvinar augue. Phasellus lacus lacus, semper nec condimentum aliquam, auctor vitae eros. Integer tristique odio id nibh posuere molestie. Nunc mattis dui a leo bibendum bibendum non at ligula. Mauris sit amet ultricies enim. Proin varius arcu eu elit sagittis tincidunt. Vivamus lobortis, velit at sodales sodales, orci orci vehicula leo, a ultricies ex quam vitae lectus. Donec facilisis condimentum molestie. Mauris et arcu quam. Nunc egestas rhoncus ligula, ac accumsan lacus gravida eget.",
        authors: [
            { name: "pixelThreader", github: "https://github.com/pixelThreader" }
        ]
    };

    return (
        <div className="w-full">
            <Section>
                <SectionContent className="flex flex-col gap-6">

                    <ProjectHeader
                        image="/projects/inner_logo_dr_light.png"
                        title="Deep Researcher v2"
                        description="Agentic research full-stack desktop application"
                        repoLink="https://github.com/pixelthreader/deep-researcher"
                    />

                    <ProjectNavigator items={navItems} />

                    <ProjectDescription 
                        description={projectData.description}
                        authors={projectData.authors}
                        className="mt-4"
                    />

                    {/* Dynamic sections to verify scroll & sticky behavior */}
                    <div id="preview" className="scroll-mt-48 min-h-[500px] w-full rounded-2xl bg-white/5 border border-white/5 p-8 flex items-center justify-center mt-12">
                        <h3 className="text-white text-2xl font-title">Preview Section</h3>
                    </div>
                    
                    <div id="features" className="scroll-mt-48 min-h-[500px] w-full rounded-2xl bg-white/5 border border-white/5 p-8 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-title">Features Section</h3>
                    </div>

                    <div id="archive" className="scroll-mt-48 min-h-[500px] w-full rounded-2xl bg-white/5 border border-white/5 p-8 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-title">Archive Section</h3>
                    </div>

                    <div id="versions" className="scroll-mt-48 min-h-[500px] w-full rounded-2xl bg-white/5 border border-white/5 p-8 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-title">Versions Section</h3>
                    </div>

                    <div id="github-stats" className="scroll-mt-48 min-h-[500px] w-full rounded-2xl bg-white/5 border border-white/5 p-8 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-title">GitHub Stats Section</h3>
                    </div>

                </SectionContent>
            </Section>
        </div>
    )
}

export default page