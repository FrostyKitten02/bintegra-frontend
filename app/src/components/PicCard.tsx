

export default function PicCard({ image, section, description }: { image: string; section: string; description: string }) {
    return (
        <div className="relative overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed transition duration-300 ease-in-out hover:opacity-100">
            <div className="p-6 bg-white rounded-lg border border-gray-300">
                <div>
                    <img className="w-full rounded-lg" src={image} alt="Card Image" />
                </div>
                <div>
                    <p className="mb-2 text-base font-bold text-800 font-mono">{section}</p>
                    <p className="text-base text-gray-600 font-mono">{description}</p>
                </div>
            </div>
        </div>
    );
}

