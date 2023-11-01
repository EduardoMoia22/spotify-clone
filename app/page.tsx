import {
      ArrowLeftToLine,
      ArrowRightToLine,
      ChevronLeft,
      ChevronRight,
      Heart,
      HomeIcon,
      Laptop2,
      LayoutGrid,
      Library,
      ListVideo,
      Maximize2,
      Mic2,
      Play,
      Plus,
      Repeat,
      Search,
      Shuffle,
      SkipBack,
      SkipForward,
      Volume2,
} from "lucide-react";
import Image from "next/image";
import album from "../public/album.jpg";

export default function Home() {
      return (
            <main className="h-screen flex flex-col">
                  <div className="flex-1 flex">
                        <aside className="p-6 bg-black">
                              <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                              </div>

                              <nav className="space-y-5 mt-10">
                                    <a
                                          href=""
                                          className="flex items-center gap-4 text-sm font-semibold"
                                    >
                                          <HomeIcon />
                                          Home
                                    </a>
                                    <a
                                          href=""
                                          className="flex items-center gap-4 text-sm font-semibold"
                                    >
                                          <Search />
                                          Search
                                    </a>
                                    <a
                                          href=""
                                          className="flex items-center gap-4 text-sm font-semibold"
                                    >
                                          <Library />
                                          Your Library
                                    </a>
                              </nav>

                              <nav className="flex flex-col mt-12 gap-4">
                                    <a
                                          href=""
                                          className="flex items-center gap-4 text-sm font-semibold"
                                    >
                                          <div className="p-1 rounded-sm bg-white text-black flex items-center justify-center">
                                                <Plus
                                                      size={20}
                                                      absoluteStrokeWidth
                                                />
                                          </div>
                                          Create Playlist
                                    </a>
                                    <a
                                          href=""
                                          className="flex items-center gap-4 text-sm font-semibold"
                                    >
                                          <div className="p-1 rounded-sm bg-[#004638] text-[#159643] flex items-center justify-center">
                                                <LayoutGrid
                                                      size={20}
                                                      absoluteStrokeWidth
                                                />
                                          </div>
                                          Your Episodes
                                    </a>
                              </nav>

                              <nav className="mt-6 pt-4 border-t border-zinc-700 flex flex-col gap-3">
                                    <a
                                          href=""
                                          className="text-zinc-400 text-md hover:text-zinc-100 transition-colors"
                                    >
                                          Top Brasil
                                    </a>
                                    <a
                                          href=""
                                          className="text-zinc-400 text-md hover:text-zinc-100 transition-colors"
                                    >
                                          Daily mix 3
                                    </a>
                                    <a
                                          href=""
                                          className="text-zinc-400 text-md hover:text-zinc-100 transition-colors"
                                    >
                                          Daily mix 4
                                    </a>
                                    <a
                                          href=""
                                          className="text-zinc-400 text-md hover:text-zinc-100 transition-colors"
                                    >
                                          Daily mix 5
                                    </a>
                                    <a
                                          href=""
                                          className="text-zinc-400 text-md hover:text-zinc-100 transition-colors"
                                    >
                                          Daily mix 6
                                    </a>
                                    <a
                                          href=""
                                          className="text-zinc-400 text-md hover:text-zinc-100 transition-colors"
                                    >
                                          Daily mix 7
                                    </a>
                                    <a
                                          href=""
                                          className="text-zinc-400 text-md hover:text-zinc-100 transition-colors"
                                    >
                                          Daily mix 8
                                    </a>
                                    <a
                                          href=""
                                          className="text-zinc-400 text-md hover:text-zinc-100 transition-colors"
                                    >
                                          Daily mix 9
                                    </a>
                                    <a
                                          href=""
                                          className="text-zinc-400 text-md hover:text-zinc-100 transition-colors"
                                    >
                                          Daily mix 10
                                    </a>
                              </nav>
                        </aside>
                        <main className="flex-1 p-6">
                              <div className="flex items-center gap-3">
                                    <div className="p-1 bg-black/40 rounded-full">
                                          <ChevronLeft />
                                    </div>
                                    <div className="p-1 bg-black/40 rounded-full">
                                          <ChevronRight />
                                    </div>
                              </div>

                              <h1 className="font-bold text-3xl mt-8">
                                    Good Night
                              </h1>

                              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                                    <div className="flex flex-col md:flex-row items-center bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
                                          <Image
                                                src={album}
                                                width={0}
                                                height={0}
                                                className="w-full h-auto md:w-28 md:h-28"
                                                alt="This is chico buarque"
                                          />

                                          <div className="flex-1 flex flex-col md:flex-row gap-4 items-center justify-center px-4">
                                                <strong className="text-base md:text-sm lg:text-base">
                                                      This is Chico Buarque
                                                </strong>

                                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center pl-1 text-black invisible group-hover:visible">
                                                      <Play fill="#000" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
                                          <Image
                                                src={album}
                                                width={0}
                                                height={0}
                                                className="w-full h-auto md:w-28 md:h-28"
                                                alt="This is chico buarque"
                                          />

                                          <div className="flex-1 flex flex-col md:flex-row gap-4 items-center justify-center px-4">
                                                <strong className="text-base md:text-sm lg:text-base">
                                                      This is Chico Buarque
                                                </strong>

                                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center pl-1 text-black invisible group-hover:visible">
                                                      <Play fill="#000" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
                                          <Image
                                                src={album}
                                                width={0}
                                                height={0}
                                                className="w-full h-auto md:w-28 md:h-28"
                                                alt="This is chico buarque"
                                          />

                                          <div className="flex-1 flex flex-col md:flex-row gap-4 items-center justify-center px-4">
                                                <strong className="text-base md:text-sm lg:text-base">
                                                      This is Chico Buarque
                                                </strong>

                                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center pl-1 text-black invisible group-hover:visible">
                                                      <Play fill="#000" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
                                          <Image
                                                src={album}
                                                width={0}
                                                height={0}
                                                className="w-full h-auto md:w-28 md:h-28"
                                                alt="This is chico buarque"
                                          />

                                          <div className="flex-1 flex flex-col md:flex-row gap-4 items-center justify-center px-4">
                                                <strong className="text-base md:text-sm lg:text-base">
                                                      This is Chico Buarque
                                                </strong>

                                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center pl-1 text-black invisible group-hover:visible">
                                                      <Play fill="#000" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
                                          <Image
                                                src={album}
                                                width={0}
                                                height={0}
                                                className="w-full h-auto md:w-28 md:h-28"
                                                alt="This is chico buarque"
                                          />

                                          <div className="flex-1 flex flex-col md:flex-row gap-4 items-center justify-center px-4">
                                                <strong className="text-base md:text-sm lg:text-base">
                                                      This is Chico Buarque
                                                </strong>

                                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center pl-1 text-black invisible group-hover:visible">
                                                      <Play fill="#000" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
                                          <Image
                                                src={album}
                                                width={0}
                                                height={0}
                                                className="w-full h-auto md:w-28 md:h-28"
                                                alt="This is chico buarque"
                                          />

                                          <div className="flex-1 flex flex-col md:flex-row gap-4 items-center justify-center px-4">
                                                <strong className="text-base md:text-sm lg:text-base">
                                                      This is Chico Buarque
                                                </strong>

                                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center pl-1 text-black invisible group-hover:visible">
                                                      <Play fill="#000" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
                                          <Image
                                                src={album}
                                                width={0}
                                                height={0}
                                                className="w-full h-auto md:w-28 md:h-28"
                                                alt="This is chico buarque"
                                          />

                                          <div className="flex-1 flex flex-col md:flex-row gap-4 items-center justify-center px-4">
                                                <strong className="text-base md:text-sm lg:text-base">
                                                      This is Chico Buarque
                                                </strong>

                                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center pl-1 text-black invisible group-hover:visible">
                                                      <Play fill="#000" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors group">
                                          <Image
                                                src={album}
                                                width={0}
                                                height={0}
                                                className="w-full h-auto md:w-28 md:h-28"
                                                alt="This is chico buarque"
                                          />

                                          <div className="flex-1 flex flex-col md:flex-row gap-4 items-center justify-center px-4">
                                                <strong className="text-base md:text-sm lg:text-base">
                                                      This is Chico Buarque
                                                </strong>

                                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center pl-1 text-black invisible group-hover:visible">
                                                      <Play fill="#000" />
                                                </div>
                                          </div>
                                    </div>
                                    
                              </div>

                              <h1 className="font-bold text-2xl mt-10">
                                    Recently played
                              </h1>
                              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 mt-4 gap-8">
                                    <div className="flex flex-col items-center justify-center rounded p-4 gap-3 bg-white/10">
                                          <Image
                                                src={album}
                                                width={184}
                                                height={184}
                                                alt="This is chico buarque"
                                                className="rounded"
                                          />
                                          <div className="flex flex-col gap-2 items-center justify-center">
                                                <span className="text-lg text-zinc-300 font-medium">
                                                      João e Maria
                                                </span>
                                                <span className="text-sm text-zinc-400">
                                                      Chico Buarque
                                                </span>
                                          </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center rounded p-4 gap-3 bg-white/10">
                                          <Image
                                                src={album}
                                                width={184}
                                                height={184}
                                                alt="This is chico buarque"
                                                className="rounded"
                                          />
                                          <div className="flex flex-col gap-2 items-center justify-center">
                                                <span className="text-lg text-zinc-300 font-medium">
                                                      João e Maria
                                                </span>
                                                <span className="text-sm text-zinc-400">
                                                      Chico Buarque
                                                </span>
                                          </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center rounded p-4 gap-3 bg-white/10">
                                          <Image
                                                src={album}
                                                width={184}
                                                height={184}
                                                alt="This is chico buarque"
                                                className="rounded"
                                          />
                                          <div className="flex flex-col gap-2 items-center justify-center">
                                                <span className="text-lg text-zinc-300 font-medium">
                                                      João e Maria
                                                </span>
                                                <span className="text-sm text-zinc-400">
                                                      Chico Buarque
                                                </span>
                                          </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center rounded p-4 gap-3 bg-white/10">
                                          <Image
                                                src={album}
                                                width={184}
                                                height={184}
                                                alt="This is chico buarque"
                                                className="rounded"
                                          />
                                          <div className="flex flex-col gap-2 items-center justify-center">
                                                <span className="text-lg text-zinc-300 font-medium">
                                                      João e Maria
                                                </span>
                                                <span className="text-sm text-zinc-400">
                                                      Chico Buarque
                                                </span>
                                          </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center rounded p-4 gap-3 bg-white/10">
                                          <Image
                                                src={album}
                                                width={184}
                                                height={184}
                                                alt="This is chico buarque"
                                                className="rounded"
                                          />
                                          <div className="flex flex-col gap-2 items-center justify-center">
                                                <span className="text-lg text-zinc-300 font-medium">
                                                      João e Maria
                                                </span>
                                                <span className="text-sm text-zinc-400">
                                                      Chico Buarque
                                                </span>
                                          </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center rounded p-4 gap-3 bg-white/10">
                                          <Image
                                                src={album}
                                                width={184}
                                                height={184}
                                                alt="This is chico buarque"
                                                className="rounded"
                                          />
                                          <div className="flex flex-col gap-2 items-center justify-center">
                                                <span className="text-lg text-zinc-300 font-medium">
                                                      João e Maria
                                                </span>
                                                <span className="text-sm text-zinc-400">
                                                      Chico Buarque
                                                </span>
                                          </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center rounded p-4 gap-3 bg-white/10">
                                          <Image
                                                src={album}
                                                width={184}
                                                height={184}
                                                alt="This is chico buarque"
                                                className="rounded"
                                          />
                                          <div className="flex flex-col gap-2 items-center justify-center">
                                                <span className="text-lg text-zinc-300 font-medium">
                                                      João e Maria
                                                </span>
                                                <span className="text-sm text-zinc-400">
                                                      Chico Buarque
                                                </span>
                                          </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center rounded p-4 gap-3 bg-white/10">
                                          <Image
                                                src={album}
                                                width={184}
                                                height={184}
                                                alt="This is chico buarque"
                                                className="rounded"
                                          />
                                          <div className="flex flex-col gap-2 items-center justify-center">
                                                <span className="text-lg text-zinc-300 font-medium">
                                                      João e Maria
                                                </span>
                                                <span className="text-sm text-zinc-400">
                                                      Chico Buarque
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </main>
                  </div>
                  <footer className="h-28 bg-zinc-950 flex items-center justify-center md:justify-between px-6 py-4">
                        <div className="hidden items-center gap-4 md:flex">
                              <Image
                                    src={album}
                                    width={70}
                                    height={70}
                                    alt="This is Chico Buarque"
                              />
                              <div className="flex flex-col gap-1">
                                    <span className="text-md text-zinc-300 font-medium">
                                          João e Maria
                                    </span>
                                    <span className="text-sm text-zinc-400">
                                          Chico Buarque
                                    </span>
                              </div>
                              <Heart
                                    fill="#22c55e"
                                    className="text-green-500"
                              />
                        </div>

                        <div className="flex flex-col gap-4 items-center">
                              <div className="flex items-center gap-6">
                                    <Shuffle
                                          strokeWidth={3}
                                          absoluteStrokeWidth
                                    />
                                    <SkipBack
                                          strokeWidth={3}
                                          absoluteStrokeWidth
                                          fill="#FFF"
                                    />
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center pl-1 text-black">
                                          <Play fill="#000" size={18} />
                                    </div>
                                    <SkipForward
                                          strokeWidth={3}
                                          absoluteStrokeWidth
                                          fill="#FFF"
                                    />
                                    <Repeat />
                              </div>

                              <div className="flex items-center gap-2">
                                    <span className="text-sm text-white/75">
                                          2:11
                                    </span>
                                    <div className="h-1 rounded-full w-72 bg-zinc-600">
                                          <div className="h-1 rounded-full w-48 bg-zinc-100" />
                                    </div>
                                    <span className="text-sm text-white/75">
                                          2:42
                                    </span>
                              </div>
                        </div>

                        <div className="items-center gap-4 hidden lg:flex">
                              <Mic2 size={20} />
                              <ListVideo size={20} />
                              <Laptop2 size={20} />
                              <div className="flex items-center gap-2">
                                    <Volume2 size={20} />
                                    <div className="h-1 rounded-full w-20 bg-zinc-600">
                                          <div className="h-1 rounded-full w-14 bg-zinc-100" />
                                    </div>
                              </div>
                              <Maximize2 size={20} />
                        </div>
                  </footer>
            </main>
      );
}
