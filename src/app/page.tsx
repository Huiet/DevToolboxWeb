import Link from "next/link";
import { ExternalLinkButton } from '@/app/components/common/ExternalLinkButton';
import { Bars3CenterLeftIcon, LinkIcon, MagnifyingGlassIcon, WrenchIcon } from '@heroicons/react/20/solid';

export default function Example() {
  return (
    <div className="bg-gray-900">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none"/>
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
          <div className="h-screen">
            <h1 className={"text-3xl p-8"}>Useful Stuff For Developers</h1>
            <div className="mt-10 flex flex-col items-start gap-x-6 m-8">
              <Link
                href="/tools/diff-viewer"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Developer Tools
              </Link>

            </div>
              <h2 className={"text-2xl pl-8 pt-20"}>Useful External Sites</h2>
            <section className={"flex flex-col items-start gap-4 p-8 "}>
              <ExternalLinkButton
                href={'https://www.realtimecolors.com/?colors=0f0f0f-ffffff-155831-d7e4dc-c20002&fonts=Poppins-Poppins'}>
                <div className={'flex'}>
                  <div>Realtime Colors</div>
                  <LinkIcon className={"w-4 h-4 ml-2 mt-0.5"}/>
                </div>
              </ExternalLinkButton>
              <ExternalLinkButton
                href={'https://www.phind.com/search?home=true'}>
                <div className={'flex'}>
                  <div>Phind (AI search)</div>
                  <MagnifyingGlassIcon className={"w-4 h-4 ml-2 mt-0.5"}/>
                </div>
              </ExternalLinkButton>
              <ExternalLinkButton
                href={'https://omatsuri.app/'}>
                <div className={'flex'}>
                  <div>Omatsuri</div>
                  <WrenchIcon className={"w-4 h-4 ml-2 mt-0.5"}/>
                </div>
              </ExternalLinkButton>
              <ExternalLinkButton
                href={'https://www.fontpair.co/all'}>
                <div className={'flex'}>
                  <div>Font Pair</div>
                  <Bars3CenterLeftIcon className={"w-4 h-4 ml-2 mt-0.5"}/>
                </div>
              </ExternalLinkButton>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
