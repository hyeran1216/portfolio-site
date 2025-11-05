import Contacts from "@/components/Contacts/contacts";

export default function IntroSection() {
    return (
        <div className="flex flex-col md:flex-row items-start gap-8 mt-12 mb-16">
        <div className="w-full md:w-1/3">
            <img
                src="profile/profile.jpg"
                alt="Hyeran Kim"
                className="w-full rounded-lg shadow-lg"
            />
        </div>
        <div className="w-full md:w-2/3">
            <p className="text-gray-700 mb-8">
                안녕하세요. 웹 프론트엔드에 관심을 가지고 공부하고 있는 학생입니다.
                <br /><br />
                쉴 때는 주로 e-sports를 봅니다.
            </p>
            <Contacts />
        </div>
    </div>
    );
}