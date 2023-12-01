const Pagination = ({page,setPage,lastPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior : "smooth",
            top : 0
        })
    }

    const handlePrev = () => {
        setPage((prevState)=> prevState - 1)
        scrollTop()
    }

    const handleNext = () => {
        setPage((prevState)=> prevState + 1)
        scrollTop()
    }

    return (
        <div>
            <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary" >
                {
                    page <= 1 ? null :
                <button className="transiton-all hover:text-color-accent"  onClick={handlePrev} >Prev</button>
                }
                <p>{page} of {lastPage}</p>
                {
                    page > lastPage ? null :
                <button className="transiton-all hover:text-color-accent" onClick={handleNext} >Next</button>
                }
            </div>
        </div>
    )
}

export default Pagination