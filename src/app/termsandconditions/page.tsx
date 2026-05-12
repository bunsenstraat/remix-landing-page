import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import content from "@/content/terms.json";

export const metadata: Metadata = content.metadata;

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="py-24 px-6 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary font-cabin mb-3">{content.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              {content.title}
            </h1>
            <p className="text-text-tertiary text-sm mb-16">{content.lastUpdated}</p>

            <div className="flex flex-col gap-12">
              {content.sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <h2 className="text-xl font-bold text-text-primary mb-4">{section.title}</h2>
                  <div className="text-[14px] text-text-secondary leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
