import Navbar from "@/components/layout/Navbar"
import DotBackground from "@/components/chrome/DotBackground"
import Footer from "@/components/layout/Footer";
import PageSection from "@/components/layout/PageSection";
import PageShell from "@/components/layout/PageShell";
import { InventionWorkflowSection } from "@/components/flow/InventionWorkflowSection";
import { WhyRotatingHeadline } from "@/components/WhyRotatingHeadline";
import { dmSerifDisplay } from "./fonts/index";
import { cn } from "@/lib/utils";

const WHY_FLIP_WORDS = [
  "royalty",
  "approvals",
  "patent costs",
  "equity",
  "speed",
  "greed",
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageSection className="relative overflow-hidden" padded={false}>
        <DotBackground />
        <PageShell
          width="cards"
          className="relative z-10 flex flex-1 flex-col justify-center py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
        >
          <div className="relative flex flex-col items-center text-center">
            <div className="relative z-20 mx-auto w-full min-w-0 max-w-4xl xl:max-w-7xl 2xl:max-w-[90rem]">
              <h1 className="min-w-0 text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#2f3137] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Inventions move fast.
                <br />
                <span className="inline-block min-w-0 xl:whitespace-nowrap">
                  Systems around them don&apos;t.
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-3xl min-w-0 text-lg leading-relaxed text-[#4c4d56] sm:mt-10 sm:text-xl md:text-2xl">
                Infrastructure for research translation -
                <br />
                <span className={cn(dmSerifDisplay.className, "font-bold italic")}>
                  free
                </span>{" "}
                for academics and Technology Transfer Offices.
              </p>
            </div>
          </div>
        </PageShell>
      </PageSection>

      <PageSection width="full">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mt-50 mb-6 flex justify-center sm:mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-[#2f3137] px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
              <span>System of Systems</span>
            </div>
          </div>
          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#2f3137] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <WhyRotatingHeadline
              line1="Everyone tries to fix what"
              prefix={"hurts them\u2009\u2013\u2009"}
              words={[...WHY_FLIP_WORDS]}
              interval={2000}
            />
          </h2>
          <p className="mt-4 text-center text-xl leading-relaxed text-neutral-600 sm:mt-10 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Not the underlying system.
          </p>
        </div>
      </PageSection>

      <PageSection padded={false} width="full" className="relative overflow-hidden">
        <PageShell width="full" className="relative z-10 py-16 md:py-20 lg:py-24">
          <InventionWorkflowSection />
        </PageShell>
      </PageSection>

      <Footer />
    </main>
  );
}

