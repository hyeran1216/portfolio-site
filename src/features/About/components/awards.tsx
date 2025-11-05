export default function Awards() {
    return (
        <div className="mb-16">
            <h2 className="text-lg font-semibold mb-6">🏆 Honors & Awards</h2>
            <ul>
                <li className="border-l-3 border-gray-300 pl-4 py-0 mb-2">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <p className="">최우수상, 경희대학교, 예술적인 소프트웨어 웹/앱/임베디드 부문</p>
                        <p className="text-gray-500">2025</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <p className="">1등, 경희대학교, 독일 Saarland University 전공연수</p>
                        <p className="text-gray-500">2025</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                        <p className="">대상, 경희대학교, 예술적인 소프트웨어 웹/앱 부문</p>
                        <p className="text-gray-500">2024</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}