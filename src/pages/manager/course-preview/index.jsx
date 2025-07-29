import React from 'react'

export default function ManageCoursePreviewPage(){
    return (
        <div className="flex min-h-screen">
        <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[330px] my-[10px] ml-[10px] bg-[#060A23] overflow-hidden flex flex-1 rounded-[20px]">
            <div className="scroll-container flex w-full overflow-y-scroll hide-scrollbar">
                <nav className="flex flex-col w-full h-fit p-[30px] gap-[30px] z-10">
                    <a href="manage-course.html" className="font-semibold text-white hover:underline">
                        <span>Back to Dashboard</span>
                    </a>
                    <div className="flex flex-col gap-4">
                        <div className="flex shrink-0 w-[130px] h-[100px] rounded-[14px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/th-1.png" className="w-full h-full object-cover" alt="thumbnail" />
                        </div>
                        <h2 className="font-bold text-xl leading-[34px] text-white">Mastering React 18 Pro TypeScript Development</h2>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a href="course-learning-text.html" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/note-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Persiapan fundamental</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="course-learning-video.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Install figma plugins</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="course-learning-text.html" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                                    <img src="/assets/images/icons/note-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Pengenalan UI UX</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="course-learning-text.html" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/note-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Mengapa UI mobil le...</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="course-learning-video.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Bikin UI components</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="course-learning-video.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Bikin UI components</span>
                                </div>
                            </a>
                        </li><li>
                            <a href="course-learning-text.html" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/note-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Persiapan fundamental</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="course-learning-video.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Install figma plugins</span>
                                </div>
                            </a>
                        </li><li>
                            <a href="course-learning-text.html" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/note-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Persiapan fundamental</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="course-learning-video.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Install figma plugins</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="course-learning-finished.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/tick-circle-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Finished</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <img src="/assets/images/backgrounds/sidebar-glow.png" className="absolute object-contain object-bottom bottom-0" alt="background" />
        </aside>
        <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[340px]">
            <div id="TopBar" className="flex items-center justify-between gap-[30px]">
                <form action="" className="flex items-center w-full max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                    <input type="text" name="search" id="search" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D]" placeholder="Search course, student, other file..." />
                    <img src="/assets/images/icons/search-normal.svg" className="w-6 h-6" alt="icon" />
                </form>
                <div className="relative flex items-center justify-end gap-[14px]">
                    <div className="text-right">
                        <p className="font-semibold">Masayoshi Kyo</p>
                        <p className="text-sm leading-[21px] text-[#838C9D]">Employee</p>
                    </div>
                    <button type="button" id="profileButton" className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img src="/assets/images/photos/photo-3.png" className="w-full h-full object-cover" alt="profile photos" />
                    </button>
                    <div id="ProfileDropdown" className="absolute top-full hidden">
                        <ul className="flex flex-col w-[200px] rounded-[20px] border border-[#CFDBEF] p-5 gap-4 bg-white mt-4">
                            <li className="font-semibold">
                                <a href="#">My Account</a>
                            </li>
                            <li className="font-semibold">
                                <a href="#">Subscriptions</a>
                            </li>
                            <li className="font-semibold">
                                <a href="#">Settings</a>
                            </li>
                            <li className="font-semibold">
                                <a href="signin.html">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col gap-[26px]">
                {/* <div className="flex flex-col gap-5 max-w-[800px] pb-[160px]">
                    <h1 className="font-bold text-[32px] leading-[48px]">Pengenalan UI UX</h1>
                    <article id="Content-wrapper">
                        <p>Dalam artikel ini, kita akan membahas tentang Laravel, mengapa framework ini dibuat, alasan mengapa belajar Laravel, keunggulan utama Laravel, persiapan yang diperlukan, langkah-langkah belajar Laravel, dan bagaimana menemukan mentor serta proyek sampingan untuk meningkatkan keterampilan Anda.</p>
                        <h3>Dasar Design Principle</h3>
                        <p>Laravel adalah framework open-source untuk PHP yang dibuat oleh Taylor Otwell. Framework ini dirancang untuk pengembang web yang ingin bekerja dengan cara yang elegan dan menyenangkan.</p>
                    </article>
                </div>
                <div className="fixed bottom-0 w-[calc(100%-400px)] h-[151px] flex items-end justify-end pb-5 bg-[linear-gradient(0deg,#FFFFFF_49.67%,rgba(255,255,255,0)_84.11%)]">
                    <button type="button" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                        Mark as Completed
                    </button>
                </div> */}
                <div className="flex shrink-0 h-[calc(100vh-110px-104px)] rounded-[20px] overflow-hidden">
                    <iframe className="w-full aspect-video" 
                        src="https://www.youtube.com/embed/tYyPdH32faE?si=heerM3KnIDqdfrZJ" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="flex items-center justify-between gap-5">
                    <h1 className="font-bold text-[32px] leading-[48px]">Install Figma Plugins</h1>
                    <button type="button" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                        Mark as Completed
                    </button>
                </div>
            </div>
        </main>
    </div>
    )
}