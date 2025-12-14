import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-900 px-6 py-10">
            <div className="mx-auto max-w-5xl space-y-16">
                {/* HEADER */}
                <div className="rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    <header className="flex h-20 items-center px-10">
                        <div className="flex items-center">
                            <Image
                                src="/Logo.png"
                                alt="Logo"
                                width={44}
                                height={44}
                            />
                        </div>

                        <nav className="ml-auto flex items-center gap-10">
                            <a
                                href="#"
                                className="text-sm font-medium text-zinc-900"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-zinc-900"
                            >
                                Components
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-2 text-sm font-medium text-emerald-600"
                            >
                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                Pages
                                <Image
                                    src="/ic_chevron_down.png"
                                    alt="▼"
                                    width={10}
                                    height={10}
                                />
                            </a>

                            <a
                                href="#"
                                className="text-sm font-medium text-zinc-900"
                            >
                                Documentation
                            </a>

                            <a
                                href="#"
                                className="ml-4 inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white hover:bg-emerald-700"
                            >
                                Purchase Now
                            </a>
                        </nav>
                    </header>
                </div>

                {/* FOOTER */}
                <div className="rounded-xl bg-white px-12 py-16 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    <div className="grid grid-cols-12 gap-10">
                        {/* left */}
                        <div className="col-span-12 md:col-span-5">
                            <Image
                                src="/Logo.png"
                                alt="Logo"
                                width={44}
                                height={44}
                            />

                            <p className="mt-6 max-w-sm text-sm leading-6 text-zinc-600">
                                The starting point for your next project <br />
                                with Minimal UI Kit, built on the newest <br />
                                version of Material-UI ©, ready to be <br />
                                customized to your style.
                            </p>

                            <div className="mt-8 flex items-center gap-5">
                                <Image
                                    src="/F.png"
                                    alt="Facebook"
                                    width={16}
                                    height={16}
                                />
                                <Image
                                    src="/Inst.png"
                                    alt="Instagram"
                                    width={16}
                                    height={16}
                                />
                                <Image
                                    src="/in.png"
                                    alt="LinkedIn"
                                    width={16}
                                    height={16}
                                />
                                <Image
                                    src="/Twitter.png"
                                    alt="Twitter"
                                    width={16}
                                    height={16}
                                />
                            </div>

                            <p className="mt-20 text-xs text-zinc-500">
                                © 2021. All rights reserved
                            </p>
                        </div>

                        {/* columns */}
                        <div className="col-span-12 md:col-span-7">
                            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                                <div>
                                    <div className="text-xs font-semibold tracking-widest text-zinc-900">
                                        MINIMAL
                                    </div>
                                    <div className="mt-5 space-y-3 text-sm text-zinc-600">
                                        <a
                                            className="block hover:text-zinc-900"
                                            href="#"
                                        >
                                            About us
                                        </a>
                                        <a
                                            className="block hover:text-zinc-900"
                                            href="#"
                                        >
                                            Contact us
                                        </a>
                                        <a
                                            className="block hover:text-zinc-900"
                                            href="#"
                                        >
                                            FAQ
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs font-semibold tracking-widest text-zinc-900">
                                        LEGAL
                                    </div>
                                    <div className="mt-5 space-y-3 text-sm text-zinc-600">
                                        <a
                                            className="block hover:text-zinc-900"
                                            href="#"
                                        >
                                            Terms and Condition
                                        </a>
                                        <a
                                            className="block hover:text-zinc-900"
                                            href="#"
                                        >
                                            Privacy Policy
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs font-semibold tracking-widest text-zinc-900">
                                        CONTACT
                                    </div>
                                    <div className="mt-5 space-y-3 text-sm text-zinc-600">
                                        <div>support@minimals.cc</div>
                                        <div>
                                            Los Angeles, 359 Hidden Valley Road
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /FOOTER */}
            </div>
        </div>
    );
}
