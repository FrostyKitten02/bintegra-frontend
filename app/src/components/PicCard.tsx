

export default function PicCard({ image, section, description }: { image: string; section: string; description: string }) {
    return (
        <div className="relative overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed transition duration-300 ease-in-out hover:opacity-100">
            <div className="p-6 bg-white rounded-lg border border-gray-300">
                <img className="w-full rounded-lg" src={image} alt=""/>
                    <p className="mb-2 text-xl title-a pt-4">
                        {section}
                    </p>
                    <p className="text-gray-600 ">
                        {description}
                    </p>
            </div>
        </div>
    );
}

