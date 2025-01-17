function showBlueTeamRoadmap() {
    const roadmapModal = document.createElement('div');
    roadmapModal.className = 'modal fade';
    roadmapModal.id = 'blueTeamModal';
    roadmapModal.innerHTML = `
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content cyber-modal" id="blueteam-content">
                <div class="modal-header" id="blueteam-header">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-shield-fill-check fs-3 me-2"></i>
                        <h5 class="modal-title mb-0">Blue Team</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body p-0">
                    <div class="container-fluid">
                        <div class="row">
                            <!-- Sidebar -->
                            <div class="col-md-3 p-0" id="blueteam-sidebar">
                                <div class="nav flex-column nav-pills" role="tablist">
                                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#blueteam-overview">
                                        <i class="bi bi-info-circle"></i>
                                        <span>Descripción</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#blueteam-skills">
                                        <i class="bi bi-diagram-3"></i>
                                        <span>Habilidades</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#blueteam-tools">
                                        <i class="bi bi-tools"></i>
                                        <span>Herramientas</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#blueteam-certs">
                                        <i class="bi bi-award"></i>
                                        <span>Certificaciones</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Contenido Principal -->
                            <div class="col-md-9" id="blueteam-maincontent">
                                <div class="tab-content p-4">
                                    <!-- Vista General -->
                                    <div class="tab-pane fade show active" id="blueteam-overview">
                                        <div class="overview-header mb-4">
                                            <h3>Blue Team Defender</h3>
                                            <p class="lead">Especialista en defensa, monitorización y respuesta a incidentes de seguridad.</p>
                                        </div>

                                        <div class="overview-stats row g-4 mb-4">
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-graph-up"></i>
                                                    <h4>Nivel de Entrada</h4>
                                                    <p>Intermedio</p>
                                                    <small>2-3 años de experiencia en IT/Seguridad</small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-clock"></i>
                                                    <h4>Tiempo de Desarrollo</h4>
                                                    <p>1-2 años</p>
                                                    <small>Formación especializada + laboratorios</small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-currency-dollar"></i>
                                                    <h4>Rango Salarial</h4>
                                                    <p>$75k - $140k</p>
                                                    <small>Según experiencia y certificaciones</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="roadmap-section mb-4">
                                            <h4><i class="bi bi-map"></i> Ruta de Aprendizaje Detallada</h4>
                                            
                                            <div class="phase mb-4">
                                                <h5 class="cyber-text">Fase 1: Fundamentos (3-4 meses)</h5>
                                                <div class="phase-content">
                                                    <ul class="detailed-list">
                                                        <li>
                                                            <strong>Sistemas Operativos</strong>
                                                            <ul>
                                                                <li>Windows Server Administration</li>
                                                                <li>Linux System Administration</li>
                                                                <li>Active Directory Management</li>
                                                                <li>System Hardening</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Redes y Seguridad</strong>
                                                            <ul>
                                                                <li>Network Protocols & Security</li>
                                                                <li>Firewall Configuration</li>
                                                                <li>IDS/IPS Implementation</li>
                                                                <li>Network Monitoring</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Scripting y Automatización</strong>
                                                            <ul>
                                                                <li>PowerShell para Blue Team</li>
                                                                <li>Python para Automatización</li>
                                                                <li>Bash Scripting</li>
                                                                <li>Security Automation</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="phase mb-4">
                                                <h5 class="cyber-text">Fase 2: Defensa Avanzada (4-6 meses)</h5>
                                                <div class="phase-content">
                                                    <ul class="detailed-list">
                                                        <li>
                                                            <strong>Security Operations</strong>
                                                            <ul>
                                                                <li>SIEM Implementation</li>
                                                                <li>Log Analysis</li>
                                                                <li>Security Monitoring</li>
                                                                <li>Threat Detection</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Incident Response</strong>
                                                            <ul>
                                                                <li>Incident Handling</li>
                                                                <li>Digital Forensics</li>
                                                                <li>Malware Analysis</li>
                                                                <li>Evidence Collection</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Threat Intelligence</strong>
                                                            <ul>
                                                                <li>IOC Analysis</li>
                                                                <li>Threat Hunting</li>
                                                                <li>APT Detection</li>
                                                                <li>Intelligence Sharing</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Habilidades -->
                                    <div class="tab-pane fade" id="blueteam-skills">
                                        <h3 class="mb-4">Habilidades Técnicas</h3>
                                        
                                        <div class="skill-category mb-4">
                                            <h4><i class="bi bi-shield-check"></i> Defensa de Sistemas</h4>
                                            <div class="skill-grid">
                                                <div class="skill-item">
                                                    <h5>System Hardening</h5>
                                                    <ul>
                                                        <li>OS Hardening</li>
                                                        <li>Service Hardening</li>
                                                        <li>Access Control</li>
                                                        <li>Security Baselines</li>
                                                    </ul>
                                                </div>
                                                <div class="skill-item">
                                                    <h5>Network Defense</h5>
                                                    <ul>
                                                        <li>Firewall Management</li>
                                                        <li>IDS/IPS Configuration</li>
                                                        <li>Network Segmentation</li>
                                                        <li>Traffic Analysis</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="skill-category mb-4">
                                            <h4><i class="bi bi-search"></i> Monitorización y Análisis</h4>
                                            <div class="skill-grid">
                                                <div class="skill-item">
                                                    <h5>SIEM Management</h5>
                                                    <ul>
                                                        <li>Log Collection</li>
                                                        <li>Alert Configuration</li>
                                                        <li>Correlation Rules</li>
                                                        <li>Dashboard Creation</li>
                                                    </ul>
                                                </div>
                                                <div class="skill-item">
                                                    <h5>Threat Detection</h5>
                                                    <ul>
                                                        <li>Behavioral Analysis</li>
                                                        <li>IOC Detection</li>
                                                        <li>Malware Analysis</li>
                                                        <li>Threat Hunting</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Herramientas -->
                                    <div class="tab-pane fade" id="blueteam-tools">
                                        <h3 class="mb-4">Arsenal de Herramientas</h3>
                                        
                                        <div class="tools-category mb-4">
                                            <h4><i class="bi bi-eye"></i> Monitorización y SIEM</h4>
                                            <div class="tool-grid">
                                                <div class="tool-item">
                                                    <a href="https://www.splunk.com/" class="tool-name">Splunk</a>
                                                    <p>SIEM Enterprise y análisis de datos</p>
                                                    <div class="tool-tags">
                                                        <span class="badge bg-primary">SIEM</span>
                                                        <span class="badge bg-secondary">Analytics</span>
                                                    </div>
                                                </div>
                                                <div class="tool-item">
                                                    <a href="https://www.elastic.co/security" class="tool-name">ELK Stack</a>
                                                    <p>Stack de análisis de logs</p>
                                                    <div class="tool-tags">
                                                        <span class="badge bg-primary">Logs</span>
                                                        <span class="badge bg-secondary">Analytics</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tools-category">
                                            <h4><i class="bi bi-shield"></i> Defensa y Respuesta</h4>
                                            <div class="tool-grid">
                                                <div class="tool-item">
                                                    <a href="https://www.snort.org/" class="tool-name">Snort</a>
                                                    <p>Sistema de detección de intrusos</p>
                                                    <div class="tool-tags">
                                                        <span class="badge bg-primary">IDS</span>
                                                        <span class="badge bg-secondary">Network</span>
                                                    </div>
                                                </div>
                                                <div class="tool-item">
                                                    <a href="https://www.wireshark.org/" class="tool-name">Wireshark</a>
                                                    <p>Análisis de tráfico de red</p>
                                                    <div class="tool-tags">
                                                        <span class="badge bg-primary">Network</span>
                                                        <span class="badge bg-secondary">Analysis</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Certificaciones -->
                                    <div class="tab-pane fade" id="blueteam-certs">
                                        <h3 class="mb-4">Certificaciones Profesionales</h3>
                                        
                                        <div class="cert-category mb-4">
                                            <h4><i class="bi bi-star"></i> Certificaciones Fundamentales</h4>
                                            <div class="cert-list">
                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/secplus.png" alt="Security+">
                                                        <h4>Security+</h4>
                                                    </div>
                                                    <p>CompTIA Security+</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 2-3 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $370</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Fundamentos</span>
                                                            <span>Seguridad</span>
                                                        </div>
                                                        <a href="https://www.comptia.org/certifications/security" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>

                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/cysa.png" alt="CySA+">
                                                        <h4>CySA+</h4>
                                                    </div>
                                                    <p>Cybersecurity Analyst+</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 3-4 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $370</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Análisis</span>
                                                            <span>Defensa</span>
                                                        </div>
                                                        <a href="https://www.comptia.org/certifications/cybersecurity-analyst" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="cert-category">
                                            <h4><i class="bi bi-stars"></i> Certificaciones Avanzadas</h4>
                                            <div class="cert-list">
                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/gcih.png" alt="GCIH">
                                                        <h4>GCIH</h4>
                                                    </div>
                                                    <p>GIAC Certified Incident Handler</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 4-6 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $7,270</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Incidentes</span>
                                                            <span>Respuesta</span>
                                                        </div>
                                                        <a href="https://www.giac.org/certification/certified-incident-handler-gcih" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>

                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/gcia.png" alt="GCIA">
                                                        <h4>GCIA</h4>
                                                    </div>
                                                    <p>GIAC Certified Intrusion Analyst</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 4-6 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $7,270</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>IDS/IPS</span>
                                                            <span>Análisis</span>
                                                        </div>
                                                        <a href="https://www.giac.org/certification/certified-intrusion-analyst-gcia" class="btn btn-outline-primary mt-2">Más Info</a>
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