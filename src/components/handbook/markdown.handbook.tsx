import MDXProviderWrapper from "@/components/mdx/mdx.provider";
import HonoMDX from "@/markdown/hono/hono.m1.mdx";

const MarkdownHandbook = () => {
  return (
    <div className="w-full overflow-auto px-4 md:px-6 md:py-2">
      <div className="flex w-full h-[55px]"></div>
      <div className="flex flex-col w-full md:w-3/4 text-sm text-app-primary-dark/80">
        <MDXProviderWrapper>
          <HonoMDX />
        </MDXProviderWrapper>
        <div className="flex w-full bg-app-border-dark py-5 my-5">Kaushik</div>
      </div>
    </div>
  );
};

export default MarkdownHandbook;
