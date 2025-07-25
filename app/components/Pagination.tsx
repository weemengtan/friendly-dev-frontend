// type PaginationProps = {currentPage:number, totalPages:number, onPageChange: (page:number) => void}

interface PaginationProps {
    currentPage:number,
    totalPages:number,
    onPageChange: (page:number) => void
}

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, onPageChange}) => {
    if (totalPages <= 1) return null

    //change page
    const handlePageChange = (pageNumber:number) => onPageChange(pageNumber)

    //pagination button render
    return(
        <div className="flex gap-2 justify-center mt-8">
            {Array.from({length: totalPages}, (_, index) => (
                <button key={index} onClick={() => handlePageChange(index + 1)} className={`px-3 py-1 cursor-pointer rounded ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'text-gray-200 bg-gray-700'}`}>
                    {index + 1}
                </button>
            ))}
        </div>
        )


}

export default Pagination