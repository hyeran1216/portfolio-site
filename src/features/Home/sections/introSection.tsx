import ArrowLink from '@/components/ArrowLink/arrowLink';

export default function IntroSection() {
    return (
        <>
            <h1 className="text-4xl font-bold mt-24">Hi, I'm Hyeran Kim<img src="snow.png" alt="logo" className="w-9 h-9 inline-block ml-2 relative bottom-[0.14em]" /></h1>
            <p className="mt-8 mb-6 text-gray-600">I'm an undergraduate student at 
                <ArrowLink href="http://swcon.khu.ac.kr/wordpress/" className="ml-1">
                    Kyung Hee University School of Software Convergence
                </ArrowLink>,
                <br />My recent interests lie in <span className="text-black font-medium">Frontend Development</span>
            </p>
        </>
    )
}