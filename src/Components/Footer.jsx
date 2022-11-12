import React from 'react';
import 'styles/components/footer.scss';
const Footer = () => {
    return (
        <div class="d-flex flex-column h-100">

            <footer class="w-100 py-4 flex-shrink-0 bg-dark">
                <div class="container py-4">
                    <div class="row gy-4 gx-5">
                        <div class="col-lg-4 col-md-6">
                            <h5 class="h1 text-white">Mean Chords</h5>
                            <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h5 class="text-white mb-3">Links</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a href="/#">INICIO</a></li>
                                <li><a href="/#">CONOCENOS</a></li>
                                <li><a href="/#">TIENDA</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h5 class="text-white mb-3">-</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a href="/#">CD'S</a></li>
                                <li><a href="/#">VINILOS</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h5 class="text-white mb-3">Mantente en contacto</h5>
                            <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;