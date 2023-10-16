import Image from "next/image"
import Link from "next/link"

const BooksList = ({ title, images, harga, id }) => {
    return (
        <div>
            <Link href={`/${id}`} className="cursor-pointer">
                <Image src={images} alt={title} width={350} height={350} className="w-full object-cover" />
                <h3 className="md:text-sm font-semibold text-xs text-center p-4 text-[#4070f4]">{title}</h3>
            </Link>
            <p>Rp. {harga.toFixed(3).replace(/\./g, ',')}</p>

        </div>
    )
}

export default BooksList