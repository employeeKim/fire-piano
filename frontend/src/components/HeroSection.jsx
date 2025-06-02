// src/components/HeroSection.jsx
function HeroSection() {
    return (
        <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/images/music-hero.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold">🎵 음악은 삶입니다</h1>
                <p className="mt-4 text-lg md:text-2xl">취미, 입시, 실용음악까지 모두 한 곳에서</p>
                <button className="mt-6 px-6 py-2 bg-yellow-400 hover:bg-yellow-300 rounded-full text-black font-semibold">
                    수업 문의하기
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
