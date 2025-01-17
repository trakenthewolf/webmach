function showIncidentResponseRoadmap() {
    const roadmapModal = document.createElement('div');
    roadmapModal.className = 'modal fade';
    roadmapModal.id = 'incidentResponderModal';
    roadmapModal.innerHTML = `
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content cyber-modal" id="incidentresponder-content">
                <div class="modal-header" id="incidentresponder-header">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-shield-fill-exclamation fs-3 me-2"></i>
                        <h5 class="modal-title mb-0">Incident Responder</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body p-0">
                    <div class="container-fluid">
                        <div class="row">
                            <!-- Sidebar -->
                            <div class="col-md-3 p-0" id="incidentresponder-sidebar">
                                <div class="nav flex-column nav-pills" role="tablist">
                                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#incidentresponder-overview">
                                        <i class="bi bi-info-circle"></i>
                                        <span>Descripción</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#incidentresponder-skills">
                                        <i class="bi bi-diagram-3"></i>
                                        <span>Habilidades</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#incidentresponder-tools">
                                        <i class="bi bi-tools"></i>
                                        <span>Herramientas</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#incidentresponder-certs">
                                        <i class="bi bi-award"></i>
                                        <span>Certificaciones</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Contenido Principal -->
                            <div class="col-md-9" id="incidentresponder-maincontent">
                                <div class="tab-content p-4">
                                    <!-- Vista General -->
                                    <div class="tab-pane fade show active" id="incidentresponder-overview">
                                        <div class="overview-header mb-4">
                                            <h3>Incident Responder</h3>
                                            <p class="lead">Especialista en respuesta y gestión de incidentes de seguridad</p>
                                        </div>

                                        <div class="overview-stats row g-4 mb-4">
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-graph-up"></i>
                                                    <h4>Salario Promedio</h4>
                                                    <p>$65,000 - $120,000</p>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-clock-history"></i>
                                                    <h4>Experiencia Necesaria</h4>
                                                    <p>3-5 años</p>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-bar-chart"></i>
                                                    <h4>Demanda Laboral</h4>
                                                    <p>Muy Alta</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="overview-description">
                                            <h4 class="mb-3">Ruta de Aprendizaje</h4>
                                            
                                            <div class="learning-path">
                                                <div class="path-section">
                                                    <h5><i class="bi bi-1-circle"></i> Fundamentos (3-4 meses)</h5>
                                                    <ul>
                                                        <li><i class="bi bi-check-circle"></i> Análisis Forense Básico
                                                            <ul>
                                                                <li>Adquisición de Evidencia</li>
                                                                <li>Chain of Custody</li>
                                                                <li>Timeline Analysis</li>
                                                            </ul>
                                                        </li>
                                                        <li><i class="bi bi-check-circle"></i> Gestión de Incidentes
                                                            <ul>
                                                                <li>NIST Framework</li>
                                                                <li>Documentación</li>
                                                                <li>Triage</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="path-section">
                                                    <h5><i class="bi bi-2-circle"></i> Análisis Avanzado (4-6 meses)</h5>
                                                    <ul>
                                                        <li><i class="bi bi-check-circle"></i> Memory Forensics
                                                            <ul>
                                                                <li>Volatility Framework</li>
                                                                <li>Memory Artifacts</li>
                                                                <li>Malware Detection</li>
                                                            </ul>
                                                        </li>
                                                        <li><i class="bi bi-check-circle"></i> Network Forensics
                                                            <ul>
                                                                <li>PCAP Analysis</li>
                                                                <li>Network IOCs</li>
                                                                <li>Traffic Analysis</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="path-section">
                                                    <h5><i class="bi bi-3-circle"></i> Especialización (6+ meses)</h5>
                                                    <ul>
                                                        <li><i class="bi bi-check-circle"></i> Threat Hunting
                                                            <ul>
                                                                <li>APT Detection</li>
                                                                <li>Threat Intelligence</li>
                                                                <li>Advanced Analytics</li>
                                                            </ul>
                                                        </li>
                                                        <li><i class="bi bi-check-circle"></i> Crisis Management
                                                            <ul>
                                                                <li>Incident Command</li>
                                                                <li>Team Leadership</li>
                                                                <li>Stakeholder Communication</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Habilidades -->
                                    <div class="tab-pane fade" id="incidentresponder-skills">
                                        <div class="skills-header mb-4">
                                            <h3>Habilidades Necesarias</h3>
                                            <p class="lead">Competencias clave para un Incident Responder</p>
                                        </div>

                                        <div class="skills-grid">
                                            <div class="skill-category">
                                                <h4><i class="bi bi-shield-shaded"></i> Respuesta a Incidentes</h4>
                                                <div class="skill-list">
                                                    <div class="skill-item">
                                                        <div class="skill-icon">
                                                            <i class="bi bi-search"></i>
                                                        </div>
                                                        <h5>Análisis Forense</h5>
                                                        <ul>
                                                            <li>Disk Forensics</li>
                                                            <li>Memory Analysis</li>
                                                            <li>Network Forensics</li>
                                                            <li>Timeline Analysis</li>
                                                        </ul>
                                                        <div class="skill-resources">
                                                            <a href="https://www.sans.org/digital-forensics/" target="_blank" class="btn btn-sm btn-outline-info">SANS</a>
                                                            <a href="https://www.volatilityfoundation.org/" target="_blank" class="btn btn-sm btn-outline-primary">Volatility</a>
                                                        </div>
                                                    </div>

                                                    <div class="skill-item">
                                                        <div class="skill-icon">
                                                            <i class="bi bi-shield-fill-check"></i>
                                                        </div>
                                                        <h5>Gestión de Crisis</h5>
                                                        <ul>
                                                            <li>Incident Command</li>
                                                            <li>Team Coordination</li>
                                                            <li>Communication</li>
                                                            <li>Documentation</li>
                                                        </ul>
                                                        <div class="skill-resources">
                                                            <a href="https://www.nist.gov/cyberframework" target="_blank" class="btn btn-sm btn-outline-info">NIST</a>
                                                            <a href="https://www.incidentresponse.com/" target="_blank" class="btn btn-sm btn-outline-primary">IR.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="skill-category">
                                                <h4><i class="bi bi-graph-up"></i> Análisis Avanzado</h4>
                                                <div class="skill-list">
                                                    <div class="skill-item">
                                                        <div class="skill-icon">
                                                            <i class="bi bi-bug"></i>
                                                        </div>
                                                        <h5>Malware Analysis</h5>
                                                        <ul>
                                                            <li>Static Analysis</li>
                                                            <li>Dynamic Analysis</li>
                                                            <li>Behavioral Analysis</li>
                                                            <li>Reverse Engineering</li>
                                                        </ul>
                                                        <div class="skill-resources">
                                                            <a href="https://www.virustotal.com/" target="_blank" class="btn btn-sm btn-outline-info">VirusTotal</a>
                                                            <a href="https://any.run/" target="_blank" class="btn btn-sm btn-outline-primary">ANY.RUN</a>
                                                        </div>
                                                    </div>

                                                    <div class="skill-item">
                                                        <div class="skill-icon">
                                                            <i class="bi bi-binoculars"></i>
                                                        </div>
                                                        <h5>Threat Hunting</h5>
                                                        <ul>
                                                            <li>IOC Analysis</li>
                                                            <li>SIEM Management</li>
                                                            <li>Threat Intelligence</li>
                                                            <li>Pattern Recognition</li>
                                                        </ul>
                                                        <div class="skill-resources">
                                                            <a href="https://www.threathunting.net/" target="_blank" class="btn btn-sm btn-outline-info">TH.net</a>
                                                            <a href="https://www.splunk.com/" target="_blank" class="btn btn-sm btn-outline-primary">Splunk</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Herramientas -->
                                    <div class="tab-pane fade" id="incidentresponder-tools">
                                        <div class="tools-header mb-4">
                                            <h3>Herramientas Esenciales</h3>
                                            <p class="lead">Software y recursos para respuesta a incidentes</p>
                                        </div>

                                        <div class="tools-grid">
                                            <div class="tool-category">
                                                <h4><i class="bi bi-tools"></i> Análisis Forense</h4>
                                                <div class="tool-list">
                                                    <div class="tool-item">
                                                        <img src="assets/tools/volatility.png" alt="Volatility">
                                                        <h5>Volatility</h5>
                                                        <p>Análisis de memoria RAM</p>
                                                        <div class="tool-links">
                                                            <a href="https://www.volatilityfoundation.org/docs" target="_blank" class="btn btn-sm btn-outline-info">Docs</a>
                                                            <a href="https://github.com/volatilityfoundation/volatility" target="_blank" class="btn btn-sm btn-outline-primary">GitHub</a>
                                                        </div>
                                                    </div>

                                                    <div class="tool-item">
                                                        <img src="assets/tools/autopsy.png" alt="Autopsy">
                                                        <h5>Autopsy</h5>
                                                        <p>Análisis forense de discos</p>
                                                        <div class="tool-links">
                                                            <a href="https://www.autopsy.com/documentation/" target="_blank" class="btn btn-sm btn-outline-info">Manual</a>
                                                            <a href="https://www.autopsy.com/download/" target="_blank" class="btn btn-sm btn-outline-primary">Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tool-category">
                                                <h4><i class="bi bi-shield-check"></i> Monitoreo y Detección</h4>
                                                <div class="tool-list">
                                                    <div class="tool-item">
                                                        <img src="assets/tools/splunk.png" alt="Splunk">
                                                        <h5>Splunk Enterprise Security</h5>
                                                        <p>SIEM y análisis de seguridad</p>
                                                        <div class="tool-links">
                                                            <a href="https://docs.splunk.com/Documentation" target="_blank" class="btn btn-sm btn-outline-info">Docs</a>
                                                            <a href="https://www.splunk.com/en_us/training.html" target="_blank" class="btn btn-sm btn-outline-primary">Training</a>
                                                        </div>
                                                    </div>

                                                    <div class="tool-item">
                                                        <img src="assets/tools/elk.png" alt="ELK Stack">
                                                        <h5>ELK Stack</h5>
                                                        <p>Log analysis y visualización</p>
                                                        <div class="tool-links">
                                                            <a href="https://www.elastic.co/guide" target="_blank" class="btn btn-sm btn-outline-info">Guía</a>
                                                            <a href="https://www.elastic.co/training" target="_blank" class="btn btn-sm btn-outline-primary">Cursos</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tool-category">
                                                <h4><i class="bi bi-search"></i> Análisis de Malware</h4>
                                                <div class="tool-list">
                                                    <div class="tool-item">
                                                        <img src="assets/tools/ida.png" alt="IDA Pro">
                                                        <h5>IDA Pro</h5>
                                                        <p>Desensamblador y debugger</p>
                                                        <div class="tool-links">
                                                            <a href="https://hex-rays.com/ida-pro/" target="_blank" class="btn btn-sm btn-outline-info">Web</a>
                                                            <a href="https://hex-rays.com/tutorials/" target="_blank" class="btn btn-sm btn-outline-primary">Tutoriales</a>
                                                        </div>
                                                    </div>

                                                    <div class="tool-item">
                                                        <img src="assets/tools/cuckoo.png" alt="Cuckoo">
                                                        <h5>Cuckoo Sandbox</h5>
                                                        <p>Análisis automatizado de malware</p>
                                                        <div class="tool-links">
                                                            <a href="https://cuckoo.sh/docs/" target="_blank" class="btn btn-sm btn-outline-info">Docs</a>
                                                            <a href="https://github.com/cuckoosandbox/cuckoo" target="_blank" class="btn btn-sm btn-outline-primary">GitHub</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Certificaciones -->
                                    <div class="tab-pane fade" id="incidentresponder-certs">
                                        <div class="cert-header mb-4">
                                            <h3>Certificaciones Recomendadas</h3>
                                            <p class="lead">Certificaciones profesionales para Incident Response</p>
                                        </div>

                                        <div class="cert-category">
                                            <h4><i class="bi bi-trophy"></i> Certificaciones Fundamentales</h4>
                                            <div class="cert-list">
                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/comptia.png" alt="Security+">
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
                                                        <img src="assets/certs/ecih.png" alt="EC-Council">
                                                        <h4>ECIH</h4>
                                                    </div>
                                                    <p>EC-Council Certified Incident Handler</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 3-4 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $999</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Incident Handling</span>
                                                            <span>Response</span>
                                                        </div>
                                                        <a href="https://www.eccouncil.org/programs/ec-council-certified-incident-handler-ecih/" class="btn btn-outline-primary mt-2">Más Info</a>
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
                                                            <span>Incident Response</span>
                                                            <span>Handling</span>
                                                        </div>
                                                        <a href="https://www.giac.org/certification/certified-incident-handler-gcih" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>

                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/gcfa.png" alt="GCFA">
                                                        <h4>GCFA</h4>
                                                    </div>
                                                    <p>GIAC Certified Forensic Analyst</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 4-6 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $7,270</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Forensics</span>
                                                            <span>Analysis</span>
                                                        </div>
                                                        <a href="https://www.giac.org/certification/certified-forensic-analyst-gcfa" class="btn btn-outline-primary mt-2">Más Info</a>
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