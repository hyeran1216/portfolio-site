import ArrowLink from '@/components/ArrowLink/arrowLink';

export default function Activities() {
    return (
        <div className="mb-16">
            <h2 className="text-lg font-semibold mb-6">👾 Activities</h2>
            <ul>
                <li className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <span>
                            <ArrowLink href="https://www.youtube.com/@%EA%B2%BD%ED%9D%AC%EB%8C%80%EC%86%8C%EC%9C%B5%ED%8A%9C%EB%B8%8C" className="font-semibold">
                                소융튜브, 영상 촬영 편집 동아리 @ KHU
                            </ArrowLink>
                        </span>
                        <p className="text-gray-500">Sep 2025 - Present</p>
                    </div>
                    <p className="text-gray-500">President </p>
                </li>
                <li className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <span>
                            <ArrowLink href="https://www.instagram.com/9oormthon_univ_khu/" className="font-semibold">
                                9oormthon_univ @ KHU
                            </ArrowLink>
                        </span>
                        <p className="text-gray-500">Mar 2025 - Sep 2025</p>
                    </div>
                    <p className="text-gray-500">Frontend Member </p>
                </li>
                <li className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <span className="font-semibold">
                            Summer School at Saarland University
                        </span>
                        <p className="text-gray-500">Jul 2025</p>
                    </div>
                    <p className="text-gray-500">Participant </p>
                </li>
                <li className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <span>
                            <ArrowLink href="https://www.instagram.com/khu_sw.union/" className="font-semibold">
                                소프트웨어융합대학 학생회 @ KHU
                            </ArrowLink>
                        </span>
                        <p className="text-gray-500">Jan 2024 - Dec 2024</p>
                    </div>
                    <p className="text-gray-500">Financial Manager </p>
                </li>
                <li className="border-l-3 border-gray-300 pl-4 py-1 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <span>
                            <ArrowLink href="https://www.instagram.com/khu_da.official/" className="font-semibold">
                                KHUDA, 데이터분석/AI 동아리 @ KHU
                            </ArrowLink>
                        </span>
                        <p className="text-gray-500">Jan 2024 - Dec 2024</p>
                    </div>
                    <p className="text-gray-500">Member </p>
                </li>
            </ul>
        </div>
    );
}