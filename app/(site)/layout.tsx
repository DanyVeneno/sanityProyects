import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Yehiibhii Estudio | Proyectos",
  description: "Generated by Next + Sanity"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang='en'>
      <body className='max-w-3xl mx-auto py-10'>
        <header className='flex items-center justify-between'>
          <Link
            href='/'
            className='bg-gradient-to-r from-lime-300 via-neutral-900 to-lime-200 bg-clip-text text-transparent text-lg font-bold'
          >
            YEHIIBHII ESTUDIO
          </Link>
          <div className='flex items-center gap-5 text-sm text-gray-600'>
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className='hover:underline'
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  );
}
