import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export const metadata = {
  title: "Blog",
  description: "Blog posts related to our service",
};

export default async function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 ">
      <div>
        <Header />
        <main id="content">
          <div className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-4 lg:px-6 mb-8 prose prose-p:text-neutral-600 prose-headings:text-neutral-800 dark:prose-p:text-neutral-300 dark:prose-headings:text-neutral-200">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
