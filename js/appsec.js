function showAppSecRoadmap() {
    const roadmapModal = document.createElement('div');
    roadmapModal.className = 'modal fade';
    roadmapModal.id = 'appSecModal';
    roadmapModal.innerHTML = `
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content cyber-modal">
                <div class="modal-header">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-code-square fs-3 me-2"></i>
                        <h5 class="modal-title mb-0">Application Security Engineer</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body p-0">
                    <div class="container-fluid">
                        <div class="row">
                            <!-- Sidebar -->
                            <div class="col-md-3 p-0">
                                <div class="nav flex-column nav-pills">
                                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#appsec-overview">
                                        <i class="bi bi-info-circle"></i> Descripción
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#appsec-skills">
                                        <i class="bi bi-diagram-3"></i> Habilidades
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#appsec-tools">
                                        <i class="bi bi-tools"></i> Herramientas
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#appsec-certs">
                                        <i class="bi bi-award"></i> Certificaciones
                                    </button>
                                </div>
                            </div>

                            <!-- Contenido Principal -->
                            <div class="col-md-9">
                                <div class="tab-content p-4">
                                    <!-- Vista General -->
                                    <div class="tab-pane fade show active" id="appsec-overview">
                                        <div class="overview-header mb-4">
                                            <h3>Application Security Engineer</h3>
                                            <p class="lead">Especialista en seguridad de aplicaciones y desarrollo seguro</p>
                                            
                                            <div class="cyber-info-card mt-4">
                                                <h4>Descripción del Rol</h4>
                                                <p>El AppSec Engineer es responsable de asegurar que las aplicaciones sean diseñadas, desarrolladas y mantenidas de manera segura. Trabaja en estrecha colaboración con equipos de desarrollo para integrar prácticas de seguridad en el ciclo de vida del desarrollo de software (SDLC).</p>
                                                
                                                <h5>Responsabilidades Principales:</h5>
                                                <ul>
                                                    <li>Realizar revisiones de código de seguridad</li>
                                                    <li>Implementar pruebas de seguridad automatizadas</li>
                                                    <li>Gestionar programas de Bug Bounty</li>
                                                    <li>Desarrollar guías de codificación segura</li>
                                                    <li>Realizar evaluaciones de riesgo de aplicaciones</li>
                                                    <li>Integrar seguridad en CI/CD</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="overview-stats row g-4 mb-4">
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-graph-up"></i>
                                                    <h4>Salario Promedio</h4>
                                                    <p>$100,000 - $180,000</p>
                                                    <small>Varía según experiencia y ubicación</small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-clock-history"></i>
                                                    <h4>Experiencia Necesaria</h4>
                                                    <p>3-5 años en desarrollo</p>
                                                    <small>2+ años en seguridad</small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-bar-chart"></i>
                                                    <h4>Demanda Laboral</h4>
                                                    <p>Muy Alta</p>
                                                    <small>Crecimiento anual del 25%</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Vista de Habilidades -->
                                    <div class="tab-pane fade" id="appsec-skills">
                                        <h3 class="mb-4">Habilidades Necesarias</h3>
                                        
                                        <div class="row g-4">
                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-code-slash"></i>
                                                    </div>
                                                    <h4>Desarrollo Seguro</h4>
                                                    <ul>
                                                        <li>OWASP Top 10</li>
                                                        <li>Secure SDLC</li>
                                                        <li>Secure Coding Practices</li>
                                                        <li>Code Review</li>
                                                        <li>Input Validation</li>
                                                        <li>Output Encoding</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-braces"></i>
                                                    </div>
                                                    <h4>Lenguajes y Frameworks</h4>
                                                    <ul>
                                                        <li>Java/Spring Security</li>
                                                        <li>Python/Django Security</li>
                                                        <li>JavaScript/Node.js Security</li>
                                                        <li>.NET Security</li>
                                                        <li>API Security</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-shield-check"></i>
                                                    </div>
                                                    <h4>Testing de Seguridad</h4>
                                                    <ul>
                                                        <li>SAST/DAST/IAST</li>
                                                        <li>Penetration Testing</li>
                                                        <li>Fuzzing</li>
                                                        <li>Security Unit Testing</li>
                                                        <li>Vulnerability Assessment</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-gear"></i>
                                                    </div>
                                                    <h4>DevSecOps</h4>
                                                    <ul>
                                                        <li>CI/CD Security</li>
                                                        <li>Container Security</li>
                                                        <li>Infrastructure as Code</li>
                                                        <li>Security Automation</li>
                                                        <li>Compliance as Code</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Vista de Herramientas -->
                                    <div class="tab-pane fade" id="appsec-tools">
                                        <h3 class="mb-4">Herramientas Esenciales</h3>
                                        
                                        <div class="row g-4">
                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>Análisis Estático (SAST)</h5>
                                                    <ul>
                                                        <li>SonarQube</li>
                                                        <li>Checkmarx</li>
                                                        <li>Fortify</li>
                                                        <li>Snyk Code</li>
                                                        <li>Semgrep</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://www.sonarqube.org/" class="btn btn-outline-primary btn-sm">SonarQube</a>
                                                        <a href="https://snyk.io/" class="btn btn-outline-primary btn-sm">Snyk</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>Análisis Dinámico (DAST)</h5>
                                                    <ul>
                                                        <li>OWASP ZAP</li>
                                                        <li>Burp Suite</li>
                                                        <li>Acunetix</li>
                                                        <li>Netsparker</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://www.zaproxy.org/" class="btn btn-outline-primary btn-sm">ZAP</a>
                                                        <a href="https://portswigger.net/burp" class="btn btn-outline-primary btn-sm">Burp Suite</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>DevSecOps</h5>
                                                    <ul>
                                                        <li>Jenkins Security</li>
                                                        <li>GitLab Security</li>
                                                        <li>GitHub Security</li>
                                                        <li>Docker Security</li>
                                                        <li>Kubernetes Security</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://www.jenkins.io/" class="btn btn-outline-primary btn-sm">Jenkins</a>
                                                        <a href="https://about.gitlab.com/" class="btn btn-outline-primary btn-sm">GitLab</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>Gestión de Dependencias</h5>
                                                    <ul>
                                                        <li>OWASP Dependency-Check</li>
                                                        <li>Snyk</li>
                                                        <li>WhiteSource</li>
                                                        <li>Black Duck</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://owasp.org/www-project-dependency-check/" class="btn btn-outline-primary btn-sm">Dependency-Check</a>
                                                        <a href="https://snyk.io/" class="btn btn-outline-primary btn-sm">Snyk</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Certificaciones -->
                                    <div class="tab-pane fade" id="appsec-certs">
                                        <h3 class="mb-4">Certificaciones Recomendadas</h3>

                                        <div class="cert-category">
                                            <h4><i class="bi bi-bookmark-star"></i> Certificaciones Fundamentales</h4>
                                            <div class="cert-list">
                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/csslp.png" alt="CSSLP">
                                                        <h4>CSSLP</h4>
                                                    </div>
                                                    <p>Certified Secure Software Lifecycle Professional</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 4-6 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $599</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Secure SDLC</span>
                                                            <span>Software Security</span>
                                                        </div>
                                                        <a href="https://www.isc2.org/Certifications/CSSLP" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>

                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/cas.png" alt="CAS">
                                                        <h4>GIAC GWEB</h4>
                                                    </div>
                                                    <p>GIAC Web Application Security</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 2-3 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $7,270</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Web Security</span>
                                                            <span>Application Defense</span>
                                                        </div>
                                                        <a href="https://www.giac.org/certification/web-application-penetration-tester-gwapt" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="cert-category mt-4">
                                            <h4><i class="bi bi-stars"></i> Certificaciones Avanzadas</h4>
                                            <div class="cert-list">
                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/oswe.png" alt="OSWE">
                                                        <h4>OSWE</h4>
                                                    </div>
                                                    <p>Offensive Security Web Expert</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 3-6 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $1,499</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Web App Security</span>
                                                            <span>Code Review</span>
                                                        </div>
                                                        <a href="https://www.offensive-security.com/awae-oswe/" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(roadmapModal);
    const modal = new bootstrap.Modal(roadmapModal);
    modal.show();

    roadmapModal.addEventListener('hidden.bs.modal', function () {
        document.body.removeChild(roadmapModal);
    });
} 