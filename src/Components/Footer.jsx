import React from 'react';
import 'styles/components/footer.scss';
const Footer = () => {
    return (
        <div className="d-flex flex-column h-100 container-footer">
            <footer className="w-100 py-4 flex-shrink-0 bg-dark">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-white">Discos Chowell</h5>
                            <p className="small text-muted"></p>
                            <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="/#">INICIO</a></li>
                                <li><a href="/#">CONOCENOS</a></li>
                                <li><a href="/#">TIENDA</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">-</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="/#">CD'S</a></li>
                                <li><a href="/#">VINILOS</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">Mantente en contacto</h5>
                            <p className="small text-muted">(999)123 287.</p>
                            <p className="small text-muted">Discoschowell@discos.com.mx</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;