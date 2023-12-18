const loader = () => {
    return (
        <>
            <div className="preloader w-100 h-100 position-fixed">
                <div className="loader">
                    <img className="icon" src="../assets/img/preloader.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default loader