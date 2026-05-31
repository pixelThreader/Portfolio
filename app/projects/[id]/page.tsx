import { Section, SectionContent } from "@/components/widgets/Section"
import { 
    ProjectHeader, 
    ProjectNavigator, 
    ProjectDescription,
    ProjectPreview,
    ProjectPreviewTitle,
    ProjectPreviewGroup,
    ProjectAsset 
} from "@/components/widgets/ProjectComponent"

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
            <Section className="pb-8">
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
                </SectionContent>
            </Section>

            {/* App Preview Section Showcase (Rendered full-bleed outside standard container padding) */}
            <div id="preview" className="scroll-mt-48 w-full py-12">
                <ProjectPreviewTitle>
                    App's <span className="brand-gradient ml-1.5 sm:ml-2">Preview</span>
                </ProjectPreviewTitle>
                
                <ProjectPreview snap={false}>
                    <ProjectPreviewGroup title="User Interface & Core Features">
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Intuitive and sleek dashboard workspace design" 
                        />
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Interactive analytics widgets & metrics grid" 
                        />
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Collaborative workspace & pipeline monitor" 
                        />
                    </ProjectPreviewGroup>

                    <ProjectPreviewGroup title="Interactive Analytics & Reporting">
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Real-time financial charts & telemetry feeds" 
                        />
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Intelligent insights generation and reporting" 
                        />
                    </ProjectPreviewGroup>

                    <ProjectPreviewGroup title="Deep Researcher Engine">
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Autonomous agent terminal logging interface" 
                        />
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Algorithmic pipeline tracing and diagnostics" 
                        />
                        <ProjectAsset 
                            type="image" 
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=675&q=80" 
                            caption="Futuristic semantic search node visualization" 
                        />
                    </ProjectPreviewGroup>
                </ProjectPreview>
            </div>

            <Section className="pt-8">
                <SectionContent className="flex flex-col gap-12">
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