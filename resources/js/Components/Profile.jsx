export default function Profile(props) {
    console.log(props)
    return (
        <div className="row">
            <div className="col-md-4 col-xl-3">
                <div className="card mb-3">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Profile Details</h5>
                    </div>
                    <div className="card-body text-center">
                        <img src="img/avatars/avatar-4.jpg" alt="Christina Mason" className="img-fluid rounded-circle mb-2" width={128} height={128} />
                        <h5 className="card-title mb-0">Christina Mason</h5>
                        <div className="text-muted mb-2">Lead Developer</div>
                        <div>
                            <a className="btn btn-primary btn-sm" href="#">Follow</a>
                            <a className="btn btn-primary btn-sm" href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> Message</a>
                        </div>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <h5 className="h6 card-title">Skills</h5>
                        <a href="#" className="badge bg-primary me-1 my-1">HTML</a>
                        <a href="#" className="badge bg-primary me-1 my-1">JavaScript</a>
                        <a href="#" className="badge bg-primary me-1 my-1">Sass</a>
                        <a href="#" className="badge bg-primary me-1 my-1">Angular</a>
                        <a href="#" className="badge bg-primary me-1 my-1">Vue</a>
                        <a href="#" className="badge bg-primary me-1 my-1">React</a>
                        <a href="#" className="badge bg-primary me-1 my-1">Redux</a>
                        <a href="#" className="badge bg-primary me-1 my-1">UI</a>
                        <a href="#" className="badge bg-primary me-1 my-1">UX</a>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <h5 className="h6 card-title">About</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home feather-sm me-1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> Lives in <a href="#">San Francisco, SA</a></li>
                            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase feather-sm me-1"><rect x={2} y={7} width={20} height={14} rx={2} ry={2} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> Works at <a href="#">GitHub</a></li>
                            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin feather-sm me-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg> From <a href="#">Boston</a></li>
                        </ul>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <h5 className="h6 card-title">Elsewhere</h5>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-1"><a href="#">staciehall.co</a></li>
                            <li className="mb-1"><a href="#">Twitter</a></li>
                            <li className="mb-1"><a href="#">Facebook</a></li>
                            <li className="mb-1"><a href="#">Instagram</a></li>
                            <li className="mb-1"><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-8 col-xl-9">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Activities</h5>
                    </div>
                    <div className="card-body h-100">
                        <div className="d-flex align-items-start">
                            <img src="img/avatars/avatar-5.jpg" width={36} height={36} className="rounded-circle me-2" alt="Vanessa Tucker" />
                            <div className="flex-grow-1">
                                <small className="float-end text-navy">5m ago</small>
                                <strong>Vanessa Tucker</strong> started following <strong>Christina Mason</strong><br />
                                <small className="text-muted">Today 7:51 pm</small><br />
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-start">
                            <img src="img/avatars/avatar.jpg" width={36} height={36} className="rounded-circle me-2" alt="Charles Hall" />
                            <div className="flex-grow-1">
                                <small className="float-end text-navy">30m ago</small>
                                <strong>Charles Hall</strong> posted something on <strong>Christina Mason</strong>'s timeline<br />
                                <small className="text-muted">Today 7:21 pm</small>
                                <div className="border text-sm text-muted p-2 mt-1">
                                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
                                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                                </div>
                                <a href="#" className="btn btn-sm btn-danger mt-1"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart feather-sm"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg> Like</a>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-start">
                            <img src="img/avatars/avatar-4.jpg" width={36} height={36} className="rounded-circle me-2" alt="Christina Mason" />
                            <div className="flex-grow-1">
                                <small className="float-end text-navy">1h ago</small>
                                <strong>Christina Mason</strong> posted a new blog<br />
                                <small className="text-muted">Today 6:35 pm</small>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-start">
                            <img src="img/avatars/avatar-2.jpg" width={36} height={36} className="rounded-circle me-2" alt="William Harris" />
                            <div className="flex-grow-1">
                                <small className="float-end text-navy">3h ago</small>
                                <strong>William Harris</strong> posted two photos on <strong>Christina Mason</strong>'s timeline<br />
                                <small className="text-muted">Today 5:12 pm</small>
                                <div className="row g-0 mt-1">
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <img src="img/photos/unsplash-1.jpg" className="img-fluid pe-2" alt="Unsplash" />
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                        <img src="img/photos/unsplash-2.jpg" className="img-fluid pe-2" alt="Unsplash" />
                                    </div>
                                </div>
                                <a href="#" className="btn btn-sm btn-danger mt-1"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart feather-sm"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg> Like</a>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-start">
                            <img src="img/avatars/avatar-2.jpg" width={36} height={36} className="rounded-circle me-2" alt="William Harris" />
                            <div className="flex-grow-1">
                                <small className="float-end text-navy">1d ago</small>
                                <strong>William Harris</strong> started following <strong>Christina Mason</strong><br />
                                <small className="text-muted">Yesterday 3:12 pm</small>
                                <div className="d-flex align-items-start mt-1">
                                    <a className="pe-3" href="#">
                                        <img src="img/avatars/avatar-4.jpg" width={36} height={36} className="rounded-circle me-2" alt="Christina Mason" />
                                    </a>
                                    <div className="flex-grow-1">
                                        <div className="border text-sm text-muted p-2 mt-1">
                                            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-start">
                            <img src="img/avatars/avatar-4.jpg" width={36} height={36} className="rounded-circle me-2" alt="Christina Mason" />
                            <div className="flex-grow-1">
                                <small className="float-end text-navy">1d ago</small>
                                <strong>Christina Mason</strong> posted a new blog<br />
                                <small className="text-muted">Yesterday 2:43 pm</small>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-start">
                            <img src="img/avatars/avatar.jpg" width={36} height={36} className="rounded-circle me-2" alt="Charles Hall" />
                            <div className="flex-grow-1">
                                <small className="float-end text-navy">1d ago</small>
                                <strong>Charles Hall</strong> started following <strong>Christina Mason</strong><br />
                                <small className="text-muted">Yesterdag 1:51 pm</small>
                            </div>
                        </div>
                        <hr />
                        <div className="d-grid">
                            <a href="#" className="btn btn-primary">Load more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}