function showSOCAnalystRoadmap() {
    const roadmapModal = document.createElement('div');
    roadmapModal.className = 'modal fade';
    roadmapModal.id = 'socAnalystModal';
    roadmapModal.innerHTML = `
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content cyber-modal" id="socanalyst-content">
                <div class="modal-header" id="socanalyst-header">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-display fs-3 me-2"></i>
                        <h5 class="modal-title mb-0">SOC Analyst</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body p-0">
                    <div class="container-fluid">
                        <div class="row">
                            <!-- Sidebar -->
                            <div class="col-md-3 p-0" id="socanalyst-sidebar">
                                <div class="nav flex-column nav-pills" role="tablist">
                                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#socanalyst-overview">
                                        <i class="bi bi-info-circle"></i>
                                        <span>Descripción</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#socanalyst-skills">
                                        <i class="bi bi-diagram-3"></i>
                                        <span>Habilidades</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#socanalyst-tools">
                                        <i class="bi bi-tools"></i>
                                        <span>Herramientas</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#socanalyst-certs">
                                        <i class="bi bi-award"></i>
                                        <span>Certificaciones</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Contenido Principal -->
                            <div class="col-md-9" id="socanalyst-maincontent">
                                <div class="tab-content p-4">
                                    <!-- Vista General -->
                                    <div class="tab-pane fade show active" id="socanalyst-overview">
                                        <div class="overview-header mb-4">
                                            <h3>SOC Analyst</h3>
                                            <p class="lead">Analista de Seguridad en Centro de Operaciones de Seguridad</p>
                                        </div>

                                        <div class="overview-stats row g-4 mb-4">
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-graph-up"></i>
                                                    <h4>Salario Promedio</h4>
                                                    <p>$45,000 - $95,000</p>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-clock-history"></i>
                                                    <h4>Experiencia Necesaria</h4>
                                                    <p>1-2 años</p>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-bar-chart"></i>
                                                    <h4>Demanda Laboral</h4>
                                                    <p>Alta</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="overview-description">
                                            <h4 class="mb-3">Ruta de Aprendizaje</h4>
                                            
                                            <div class="learning-path">
                                                <div class="path-section">
                                                    <h5><i class="bi bi-1-circle"></i> Fundamentos (2-3 meses)</h5>
                                                    <ul>
                                                        <li><i class="bi bi-check-circle"></i> Redes y Protocolos
                                                            <ul>
                                                                <li>TCP/IP</li>
                                                                <li>DNS, HTTP/S</li>
                                                                <li>Firewalls</li>
                                                            </ul>
                                                        </li>
                                                        <li><i class="bi bi-check-circle"></i> Sistemas Operativos
                                                            <ul>
                                                                <li>Linux Básico</li>
                                                                <li>Windows Server</li>
                                                                <li>Logs y Eventos</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="path-section">
                                                    <h5><i class="bi bi-2-circle"></i> Monitoreo y Detección (3-4 meses)</h5>
                                                    <ul>
                                                        <li><i class="bi bi-check-circle"></i> SIEM
                                                            <ul>
                                                                <li>Splunk</li>
                                                                <li>QRadar</li>
                                                                <li>Correlación de Eventos</li>
                                                            </ul>
                                                        </li>
                                                        <li><i class="bi bi-check-circle"></i> IDS/IPS
                                                            <ul>
                                                                <li>Snort</li>
                                                                <li>Suricata</li>
                                                                <li>Reglas y Alertas</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="path-section">
                                                    <h5><i class="bi bi-3-circle"></i> Análisis de Amenazas (3-4 meses)</h5>
                                                    <ul>
                                                        <li><i class="bi bi-check-circle"></i> Threat Intelligence
                                                            <ul>
                                                                <li>IOCs</li>
                                                                <li>TTPs</li>
                                                                <li>MITRE ATT&CK</li>
                                                            </ul>
                                                        </li>
                                                        <li><i class="bi bi-check-circle"></i> Malware Analysis
                                                            <ul>
                                                                <li>Análisis Estático</li>
                                                                <li>Sandboxing</li>
                                                                <li>Reversing Básico</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="path-section">
                                                    <h5><i class="bi bi-4-circle"></i> Respuesta a Incidentes</h5>
                                                    <ul>
                                                        <li><i class="bi bi-check-circle"></i> Gestión de Incidentes</li>
                                                        <li><i class="bi bi-check-circle"></i> Forensics Básico</li>
                                                        <li><i class="bi bi-check-circle"></i> Documentación</li>
                                                        <li><i class="bi bi-check-circle"></i> Playbooks</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Habilidades -->
                                    <div class="tab-pane fade" id="socanalyst-skills">
                                        <div class="skills-header mb-4">
                                            <h3>Habilidades Necesarias</h3>
                                            <p class="lead">Competencias clave para un SOC Analyst</p>
                                        </div>

                                        <div class="skills-grid">
                                            <div class="skill-category">
                                                <h4><i class="bi bi-braces"></i> Fundamentos Técnicos</h4>
                                                <div class="skill-list">
                                                    <div class="skill-item">
                                                        <div class="skill-icon">
                                                            <i class="bi bi-hdd-network"></i>
                                                        </div>
                                                        <h5>Redes y Protocolos</h5>
                                                        <ul>
                                                            <li>TCP/IP Stack</li>
                                                            <li>Network Services</li>
                                                            <li>Packet Analysis</li>
                                                            <li>Network Security</li>
                                                        </ul>
                                                        <div class="skill-resources">
                                                            <a href="https://www.coursera.org/learn/packet-analysis" target="_blank" class="btn btn-sm btn-outline-info">Curso</a>
                                                            <a href="https://www.wireshark.org/docs/" target="_blank" class="btn btn-sm btn-outline-primary">Práctica</a>
                                                        </div>
                                                    </div>

                                                    <div class="skill-item">
                                                        <div class="skill-icon">
                                                            <i class="bi bi-terminal"></i>
                                                        </div>
                                                        <h5>Sistemas Operativos</h5>
                                                        <ul>
                                                            <li>Windows Security</li>
                                                            <li>Linux Administration</li>
                                                            <li>Log Analysis</li>
                                                            <li>System Hardening</li>
                                                        </ul>
                                                        <div class="skill-resources">
                                                            <a href="https://www.cybrary.it/course/linux-security" target="_blank" class="btn btn-sm btn-outline-info">Linux</a>
                                                            <a href="https://docs.microsoft.com/en-us/windows-server/security/security-and-assurance" target="_blank" class="btn btn-sm btn-outline-primary">Windows</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="skill-category">
                                                <h4><i class="bi bi-shield-check"></i> Seguridad Operacional</h4>
                                                <div class="skill-list">
                                                    <div class="skill-item">
                                                        <div class="skill-icon">
                                                            <i class="bi bi-eye"></i>
                                                        </div>
                                                        <h5>Monitoreo y Detección</h5>
                                                        <ul>
                                                            <li>SIEM Management</li>
                                                            <li>Alert Triage</li>
                                                            <li>Threat Detection</li>
                                                            <li>Incident Response</li>
                                                        </ul>
                                                        <div class="skill-resources">
                                                            <a href="https://www.splunk.com/en_us/training/free-courses" target="_blank" class="btn btn-sm btn-outline-info">SIEM</a>
                                                            <a href="https://www.sans.org/blog/the-soc-analysts-three-questions/" target="_blank" class="btn btn-sm btn-outline-primary">Guía</a>
                                                        </div>
                                                    </div>

                                                    <div class="skill-item">
                                                        <div class="skill-icon">
                                                            <i class="bi bi-graph-up"></i>
                                                        </div>
                                                        <h5>Threat Intelligence</h5>
                                                        <ul>
                                                            <li>IOC Analysis</li>
                                                            <li>Threat Hunting</li>
                                                            <li>Malware Analysis</li>
                                                            <li>TTP Recognition</li>
                                                        </ul>
                                                        <div class="skill-resources">
                                                            <a href="https://www.misp-project.org/training/" target="_blank" class="btn btn-sm btn-outline-info">MISP</a>
                                                            <a href="https://otx.alienvault.com/" target="_blank" class="btn btn-sm btn-outline-primary">OTX</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="skill-category">
                                                <h4><i class="bi bi-people"></i> Habilidades Profesionales</h4>
                                                <div class="skill-list">
                                                    <div class="skill-item">
                                                        <div class="skill-icon">
                                                            <i class="bi bi-chat-text"></i>
                                                        </div>
                                                        <h5>Comunicación</h5>
                                                        <ul>
                                                            <li>Incident Reports</li>
                                                            <li>Technical Writing</li>
                                                            <li>Team Collaboration</li>
                                                            <li>Stakeholder Updates</li>
                                                        </ul>
                                                        <div class="skill-resources">
                                                            <a href="https://www.sans.org/blog/writing-better-incident-reports/" target="_blank" class="btn btn-sm btn-outline-info">Reportes</a>
                                                            <a href="https://www.pluralsight.com/courses/technical-writing-software-documentation" target="_blank" class="btn btn-sm btn-outline-primary">Writing</a>
                                                        </div>
                                                    </div>

                                                    <div class="skill-item">
                                                        <div class="skill-icon">
                                                            <i class="bi bi-lightbulb"></i>
                                                        </div>
                                                        <h5>Análisis y Decisión</h5>
                                                        <ul>
                                                            <li>Critical Thinking</li>
                                                            <li>Problem Solving</li>
                                                            <li>Incident Prioritization</li>
                                                            <li>Risk Assessment</li>
                                                        </ul>
                                                        <div class="skill-resources">
                                                            <a href="https://www.mindtools.com/pages/article/critical-thinking-skills.htm" target="_blank" class="btn btn-sm btn-outline-info">Guía</a>
                                                            <a href="https://www.coursera.org/learn/critical-thinking-skills" target="_blank" class="btn btn-sm btn-outline-primary">Curso</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Herramientas -->
                                    <div class="tab-pane fade" id="socanalyst-tools">
                                        <h3 class="mb-4">Herramientas Esenciales</h3>
                                        
                                        <div class="tools-grid">
                                            <div class="tool-category">
                                                <h4><i class="bi bi-search"></i> SIEM y Monitoreo</h4>
                                                <div class="tool-list">
                                                    <div class="tool-item">
                                                        <img src="assets/tools/splunk.png" alt="Splunk">
                                                        <h5>Splunk</h5>
                                                        <p>SIEM y análisis de datos</p>
                                                        <div class="tool-links">
                                                            <a href="https://www.splunk.com/learn" target="_blank" class="btn btn-sm btn-outline-info">Aprende</a>
                                                            <a href="https://www.splunk.com/en_us/training/free-courses/splunk-fundamentals-1.html" target="_blank" class="btn btn-sm btn-outline-primary">Curso Gratis</a>
                                                        </div>
                                                    </div>
                                                    <div class="tool-item">
                                                        <img src="assets/tools/qradar.png" alt="QRadar">
                                                        <h5>QRadar</h5>
                                                        <p>SIEM empresarial de IBM</p>
                                                        <div class="tool-links">
                                                            <a href="https://www.ibm.com/qradar" target="_blank" class="btn btn-sm btn-outline-info">Documentación</a>
                                                            <a href="https://www.ibm.com/training/qradar" target="_blank" class="btn btn-sm btn-outline-primary">Training</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tool-category">
                                                <h4><i class="bi bi-shield"></i> Detección y Respuesta</h4>
                                                <div class="tool-list">
                                                    <div class="tool-item">
                                                        <img src="assets/tools/wireshark.png" alt="Wireshark">
                                                        <h5>Wireshark</h5>
                                                        <p>Análisis de tráfico de red</p>
                                                        <div class="tool-links">
                                                            <a href="https://www.wireshark.org/docs/" target="_blank" class="btn btn-sm btn-outline-info">Docs</a>
                                                            <a href="https://www.wireshark.org/training/" target="_blank" class="btn btn-sm btn-outline-primary">Training</a>
                                                        </div>
                                                    </div>
                                                    <div class="tool-item">
                                                        <img src="assets/tools/suricata.png" alt="Suricata">
                                                        <h5>Suricata</h5>
                                                        <p>IDS/IPS de código abierto</p>
                                                        <div class="tool-links">
                                                            <a href="https://suricata.io/documentation/" target="_blank" class="btn btn-sm btn-outline-info">Manual</a>
                                                            <a href="https://suricata.io/getting-started/" target="_blank" class="btn btn-sm btn-outline-primary">Inicio</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tool-category">
                                                <h4><i class="bi bi-graph-up"></i> Threat Intelligence</h4>
                                                <div class="tool-list">
                                                    <div class="tool-item">
                                                        <img src="assets/tools/misp.png" alt="MISP">
                                                        <h5>MISP</h5>
                                                        <p>Plataforma de threat intelligence</p>
                                                        <div class="tool-links">
                                                            <a href="https://www.misp-project.org/documentation/" target="_blank" class="btn btn-sm btn-outline-info">Docs</a>
                                                            <a href="https://www.misp-project.org/training/" target="_blank" class="btn btn-sm btn-outline-primary">Training</a>
                                                        </div>
                                                    </div>
                                                    <div class="tool-item">
                                                        <img src="assets/tools/virustotal.png" alt="VirusTotal">
                                                        <h5>VirusTotal</h5>
                                                        <p>Análisis de malware y URLs</p>
                                                        <div class="tool-links">
                                                            <a href="https://support.virustotal.com/" target="_blank" class="btn btn-sm btn-outline-info">Guías</a>
                                                            <a href="https://developers.virustotal.com/" target="_blank" class="btn btn-sm btn-outline-primary">API</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Certificaciones -->
                                    <div class="tab-pane fade" id="socanalyst-certs">
                                        <div class="certs-header mb-4">
                                            <h3>Certificaciones Recomendadas</h3>
                                            <p class="lead">Ruta de certificación para SOC Analyst</p>
                                        </div>

                                        <div class="cert-category">
                                            <h4><i class="bi bi-bookmark"></i> Certificaciones Fundamentales</h4>
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
                                                    <p>CompTIA Cybersecurity Analyst</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 3-4 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $370</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Análisis</span>
                                                            <span>Threat Hunting</span>
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
                                                            <span>Incident Response</span>
                                                            <span>Handling</span>
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
                                                            <span>Network Defense</span>
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