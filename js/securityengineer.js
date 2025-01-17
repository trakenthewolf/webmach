function showSecurityEngineerRoadmap() {
    const roadmapModal = document.createElement('div');
    roadmapModal.className = 'modal fade';
    roadmapModal.id = 'securityEngineerModal';
    roadmapModal.innerHTML = `
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content cyber-modal">
                <div class="modal-header">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-gear-fill fs-3 me-2"></i>
                        <h5 class="modal-title mb-0">Security Engineer</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body p-0">
                    <div class="container-fluid">
                        <div class="row">
                            <!-- Sidebar -->
                            <div class="col-md-3 p-0">
                                <div class="nav flex-column nav-pills">
                                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#seceng-overview">
                                        <i class="bi bi-info-circle"></i> Descripción
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#seceng-skills">
                                        <i class="bi bi-diagram-3"></i> Habilidades
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#seceng-tools">
                                        <i class="bi bi-tools"></i> Herramientas
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#seceng-certs">
                                        <i class="bi bi-award"></i> Certificaciones
                                    </button>
                                </div>
                            </div>

                            <!-- Contenido Principal -->
                            <div class="col-md-9">
                                <div class="tab-content p-4">
                                    <!-- Vista General -->
                                    <div class="tab-pane fade show active" id="seceng-overview">
                                        <div class="overview-header mb-4">
                                            <h3>Security Engineer</h3>
                                            <p class="lead">Profesional especializado en diseñar e implementar soluciones de seguridad empresarial</p>
                                            
                                            <div class="cyber-info-card mt-4">
                                                <h4>Descripción del Rol</h4>
                                                <p>El Security Engineer es responsable de proteger los sistemas y redes de una organización mediante el diseño, implementación y monitoreo de soluciones de seguridad. Combina conocimientos técnicos profundos con habilidades de gestión de riesgos para crear una postura de seguridad robusta.</p>
                                                
                                                <h5>Responsabilidades Principales:</h5>
                                                <ul>
                                                    <li>Diseñar arquitecturas de seguridad empresarial</li>
                                                    <li>Implementar controles de seguridad técnicos</li>
                                                    <li>Gestionar infraestructura de seguridad</li>
                                                    <li>Realizar evaluaciones de seguridad</li>
                                                    <li>Automatizar procesos de seguridad</li>
                                                    <li>Responder a incidentes de seguridad</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="overview-stats row g-4 mb-4">
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-graph-up"></i>
                                                    <h4>Salario Promedio</h4>
                                                    <p>$90,000 - $160,000</p>
                                                    <small>Basado en experiencia y ubicación</small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-clock-history"></i>
                                                    <h4>Experiencia Necesaria</h4>
                                                    <p>4-6 años en IT</p>
                                                    <small>2+ años en seguridad</small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-bar-chart"></i>
                                                    <h4>Demanda Laboral</h4>
                                                    <p>Muy Alta</p>
                                                    <small>Crecimiento anual del 28%</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Vista de Habilidades -->
                                    <div class="tab-pane fade" id="seceng-skills">
                                        <h3 class="mb-4">Habilidades Necesarias</h3>
                                        
                                        <div class="row g-4">
                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-shield-lock"></i>
                                                    </div>
                                                    <h4>Seguridad de Red</h4>
                                                    <ul>
                                                        <li>Firewalls y IPS/IDS</li>
                                                        <li>VPNs y Segmentación</li>
                                                        <li>Análisis de Tráfico</li>
                                                        <li>Seguridad Perimetral</li>
                                                        <li>Zero Trust Architecture</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-pc-display"></i>
                                                    </div>
                                                    <h4>Sistemas Operativos</h4>
                                                    <ul>
                                                        <li>Linux Security Hardening</li>
                                                        <li>Windows Server Security</li>
                                                        <li>Active Directory</li>
                                                        <li>Endpoint Protection</li>
                                                        <li>System Hardening</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-code-square"></i>
                                                    </div>
                                                    <h4>Programación y Scripting</h4>
                                                    <ul>
                                                        <li>Python para Automatización</li>
                                                        <li>Bash/PowerShell</li>
                                                        <li>API Security</li>
                                                        <li>Infrastructure as Code</li>
                                                        <li>CI/CD Security</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-graph-up"></i>
                                                    </div>
                                                    <h4>Gestión de Seguridad</h4>
                                                    <ul>
                                                        <li>Risk Assessment</li>
                                                        <li>Security Frameworks</li>
                                                        <li>Compliance (ISO 27001, NIST)</li>
                                                        <li>Incident Response</li>
                                                        <li>Security Architecture</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Vista de Herramientas -->
                                    <div class="tab-pane fade" id="seceng-tools">
                                        <h3 class="mb-4">Herramientas Esenciales</h3>
                                        
                                        <div class="row g-4">
                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>Seguridad de Red</h5>
                                                    <ul>
                                                        <li>Palo Alto Networks</li>
                                                        <li>Cisco ASA/Firepower</li>
                                                        <li>Fortinet FortiGate</li>
                                                        <li>Wireshark</li>
                                                        <li>Snort/Suricata</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://www.paloaltonetworks.com/" class="btn btn-outline-primary btn-sm">Palo Alto</a>
                                                        <a href="https://www.wireshark.org/" class="btn btn-outline-primary btn-sm">Wireshark</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>Identity & Access</h5>
                                                    <ul>
                                                        <li>Okta</li>
                                                        <li>Azure AD</li>
                                                        <li>CyberArk</li>
                                                        <li>Ping Identity</li>
                                                        <li>KeyCloak</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://www.okta.com/" class="btn btn-outline-primary btn-sm">Okta</a>
                                                        <a href="https://www.cyberark.com/" class="btn btn-outline-primary btn-sm">CyberArk</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>SIEM & Monitoreo</h5>
                                                    <ul>
                                                        <li>Splunk Enterprise</li>
                                                        <li>IBM QRadar</li>
                                                        <li>ELK Stack</li>
                                                        <li>AlienVault OSSIM</li>
                                                        <li>Nagios/Zabbix</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://www.splunk.com/" class="btn btn-outline-primary btn-sm">Splunk</a>
                                                        <a href="https://www.elastic.co/es/" class="btn btn-outline-primary btn-sm">ELK Stack</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>Automatización</h5>
                                                    <ul>
                                                        <li>Ansible</li>
                                                        <li>Terraform</li>
                                                        <li>Jenkins</li>
                                                        <li>Git</li>
                                                        <li>Docker Security</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://www.ansible.com/" class="btn btn-outline-primary btn-sm">Ansible</a>
                                                        <a href="https://www.terraform.io/" class="btn btn-outline-primary btn-sm">Terraform</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Certificaciones -->
                                    <div class="tab-pane fade" id="seceng-certs">
                                        <h3 class="mb-4">Certificaciones Recomendadas</h3>

                                        <div class="cert-category">
                                            <h4><i class="bi bi-bookmark-star"></i> Certificaciones Fundamentales</h4>
                                            <div class="cert-list">
                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/cissp.png" alt="CISSP">
                                                        <h4>CISSP</h4>
                                                    </div>
                                                    <p>Certified Information Systems Security Professional</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 4-6 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $699</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Security Management</span>
                                                            <span>Architecture</span>
                                                        </div>
                                                        <a href="https://www.isc2.org/Certifications/CISSP" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>

                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/ceh.png" alt="CEH">
                                                        <h4>CEH</h4>
                                                    </div>
                                                    <p>Certified Ethical Hacker</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 2-3 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $950</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Ethical Hacking</span>
                                                            <span>Penetration Testing</span>
                                                        </div>
                                                        <a href="https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="cert-category mt-4">
                                            <h4><i class="bi bi-stars"></i> Certificaciones Avanzadas</h4>
                                            <div class="cert-list">
                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/oscp.png" alt="OSCP">
                                                        <h4>OSCP</h4>
                                                    </div>
                                                    <p>Offensive Security Certified Professional</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 3-6 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $999</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Penetration Testing</span>
                                                            <span>Exploitation</span>
                                                        </div>
                                                        <a href="https://www.offensive-security.com/pwk-oscp/" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>

                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/gsec.png" alt="GSEC">
                                                        <h4>GSEC</h4>
                                                    </div>
                                                    <p>GIAC Security Essentials</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 2-4 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $7,270</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Security Fundamentals</span>
                                                            <span>Defense in Depth</span>
                                                        </div>
                                                        <a href="https://www.giac.org/certification/security-essentials-gsec" class="btn btn-outline-primary mt-2">Más Info</a>
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