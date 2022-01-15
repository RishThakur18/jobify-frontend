function Header(props) {
    return (
        <div className="d-flex p-2 bg-dark ">
            <button className="btn btn-outline-primary btn-sm" onClick={props.sideBarState}>
                <i className="bi bi-chevron-double-right" />
            </button>
            <h3 className="mx-3 text-white">Jobify</h3>
        </div>
    );
}

export default Header;