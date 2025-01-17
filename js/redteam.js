function showRedTeamRoadmap() {
    const roadmapModal = document.createElement('div');
    roadmapModal.className = 'modal fade';
    roadmapModal.id = 'redTeamModal';
    roadmapModal.innerHTML = `
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content cyber-modal" id="redteam-content">
                <div class="modal-header" id="redteam-header">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-shield-slash fs-3 me-2"></i>
                        <h5 class="modal-title mb-0">Red Team</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body p-0">
                    <div class="container-fluid">
                        <div class="row">
                            <!-- Sidebar -->
                            <div class="col-md-3 p-0" id="redteam-sidebar">
                                <div class="nav flex-column nav-pills" role="tablist">
                                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#redteam-overview">
                                        <i class="bi bi-info-circle"></i>
                                        <span>Descripción</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#redteam-skills">
                                        <i class="bi bi-diagram-3"></i>
                                        <span>Habilidades</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#redteam-tools">
                                        <i class="bi bi-tools"></i>
                                        <span>Herramientas</span>
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#redteam-certs">
                                        <i class="bi bi-award"></i>
                                        <span>Certificaciones</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Contenido Principal -->
                            <div class="col-md-9" id="redteam-maincontent">
                                <div class="tab-content p-4">
                                    <!-- Vista General -->
                                    <div class="tab-pane fade show active" id="redteam-overview">
                                        <div class="overview-header mb-4">
                                            <h3>Red Team Operator</h3>
                                            <p class="lead">Especialista en simulación de amenazas avanzadas y evaluación de seguridad ofensiva.</p>
                                        </div>

                                        <div class="overview-stats row g-4 mb-4">
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-graph-up"></i>
                                                    <h4>Nivel de Entrada</h4>
                                                    <p>Avanzado</p>
                                                    <small>Requiere 3-5 años de experiencia en ciberseguridad</small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-clock"></i>
                                                    <h4>Tiempo de Desarrollo</h4>
                                                    <p>2-3 años</p>
                                                    <small>Dedicación completa + práctica continua</small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-currency-dollar"></i>
                                                    <h4>Rango Salarial</h4>
                                                    <p>$80k - $150k</p>
                                                    <small>Varía según ubicación y experiencia</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="roadmap-section mb-4">
                                            <h4><i class="bi bi-map"></i> Ruta de Aprendizaje Detallada</h4>
                                            
                                            <div class="phase mb-4">
                                                <h5 class="cyber-text">Fase 1: Fundamentos (4-6 meses)</h5>
                                                <div class="phase-content">
                                                    <ul class="detailed-list">
                                                        <li>
                                                            <strong>Arquitectura de Sistemas</strong>
                                                            <ul>
                                                                <li>Windows Internals</li>
                                                                <li>Linux Architecture</li>
                                                                <li>Memory Management</li>
                                                                <li>Process Execution Flow</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Redes Avanzadas</strong>
                                                            <ul>
                                                                <li>TCP/IP Stack</li>
                                                                <li>Network Protocols</li>
                                                                <li>Routing & Switching</li>
                                                                <li>Network Security Controls</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Programación</strong>
                                                            <ul>
                                                                <li>Python para Red Team</li>
                                                                <li>PowerShell Avanzado</li>
                                                                <li>C para Exploits</li>
                                                                <li>Assembly Basics</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="phase mb-4">
                                                <h5 class="cyber-text">Fase 2: Técnicas Ofensivas (6-8 meses)</h5>
                                                <div class="phase-content">
                                                    <ul class="detailed-list">
                                                        <li>
                                                            <strong>OSINT y Reconocimiento</strong>
                                                            <ul>
                                                                <li>Passive Information Gathering</li>
                                                                <li>Active Reconnaissance</li>
                                                                <li>Social Engineering</li>
                                                                <li>OSINT Frameworks</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Initial Access</strong>
                                                            <ul>
                                                                <li>Phishing Campaigns</li>
                                                                <li>Web Exploitation</li>
                                                                <li>External Service Exploitation</li>
                                                                <li>Physical Security Bypass</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="phase">
                                                <h5 class="cyber-text">Fase 3: Operaciones Avanzadas (6+ meses)</h5>
                                                <div class="phase-content">
                                                    <ul class="detailed-list">
                                                        <li>
                                                            <strong>Command & Control</strong>
                                                            <ul>
                                                                <li>C2 Infrastructure Setup</li>
                                                                <li>Custom C2 Development</li>
                                                                <li>Traffic Tunneling</li>
                                                                <li>Domain Fronting</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Evasión</strong>
                                                            <ul>
                                                                <li>AV/EDR Evasion</li>
                                                                <li>AMSI Bypass</li>
                                                                <li>Custom Malware Development</li>
                                                                <li>Process Injection Techniques</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Habilidades -->
                                    <div class="tab-pane fade" id="redteam-skills">
                                        <h3 class="mb-4">Habilidades Esenciales</h3>
                                        <div class="skills-grid">
                                            <div class="skill-category mb-4">
                                                <h4><i class="bi bi-terminal"></i> Hacking Técnico</h4>
                                                <div class="skill-content">
                                                    <div class="skill-item">
                                                        <h5>Explotación de Sistemas</h5>
                                                        <ul>
                                                            <li><a href="https://www.offensive-security.com/metasploit-unleashed/">Buffer Overflows y Exploits</a></li>
                                                            <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings">Inyección de Código</a></li>
                                                            <li><a href="https://owasp.org/www-project-web-security-testing-guide/">Vulnerabilidades Web</a></li>
                                                            <li><a href="https://attack.mitre.org/matrices/enterprise/">MITRE ATT&CK Framework</a></li>
                                                        </ul>
                                                        <div class="progress">
                                                            <div class="progress-bar" style="width: 90%"></div>
                                                        </div>
                                                    </div>

                                                    <div class="skill-item">
                                                        <h5>Post-Explotación</h5>
                                                        <ul>
                                                            <li><a href="https://www.harmj0y.net/blog/">Active Directory Attacks</a></li>
                                                            <li><a href="https://www.ired.team/">Lateral Movement</a></li>
                                                            <li><a href="https://github.com/yeyintminthuhtut/Awesome-Red-Teaming">Persistence Techniques</a></li>
                                                            <li><a href="https://github.com/infosecn1nja/Red-Teaming-Toolkit">Data Exfiltration</a></li>
                                                        </ul>
                                                        <div class="progress">
                                                            <div class="progress-bar" style="width: 85%"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="skill-category mb-4">
                                                <h4><i class="bi bi-code-square"></i> Desarrollo y Scripting</h4>
                                                <div class="skill-content">
                                                    <div class="skill-item">
                                                        <h5>Lenguajes de Programación</h5>
                                                        <ul>
                                                            <li><a href="https://docs.python.org/3/">Python para Automatización</a></li>
                                                            <li><a href="https://docs.microsoft.com/en-us/powershell/">PowerShell para Post-Explotación</a></li>
                                                            <li><a href="https://www.gnu.org/software/bash/">Bash Scripting</a></li>
                                                            <li><a href="https://docs.microsoft.com/en-us/cpp/">C/C++ para Exploits</a></li>
                                                        </ul>
                                                        <div class="progress">
                                                            <div class="progress-bar" style="width: 80%"></div>
                                                        </div>
                                                    </div>

                                                    <div class="skill-item">
                                                        <h5>Desarrollo de Malware</h5>
                                                        <ul>
                                                            <li><a href="https://github.com/vxunderground/MalwareSourceCode">Shellcode Development</a></li>
                                                            <li><a href="https://www.malwaretech.com/">Malware Analysis & RE</a></li>
                                                            <li><a href="https://github.com/topics/av-evasion">AV Evasion Techniques</a></li>
                                                            <li><a href="https://www.virustotal.com/">Sandbox Evasion</a></li>
                                                        </ul>
                                                        <div class="progress">
                                                            <div class="progress-bar" style="width: 75%"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="skill-category">
                                                <h4><i class="bi bi-people"></i> Habilidades Operacionales</h4>
                                                <div class="skill-content">
                                                    <div class="skill-item">
                                                        <h5>OPSEC</h5>
                                                        <ul>
                                                            <li><a href="https://github.com/bluscreenofjeff/Red-Team-Infrastructure-Wiki">Infrastructure Setup</a></li>
                                                            <li><a href="https://www.cobaltstrike.com/training">C2 Operations</a></li>
                                                            <li><a href="https://github.com/mantvydasb/RedTeaming-Tactics-and-Techniques">TTPs Development</a></li>
                                                            <li><a href="https://www.social-engineer.org/">Social Engineering</a></li>
                                                        </ul>
                                                        <div class="progress">
                                                            <div class="progress-bar" style="width: 85%"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Herramientas -->
                                    <div class="tab-pane fade" id="redteam-tools">
                                        <h3 class="mb-4">Arsenal de Herramientas</h3>
                                        <div class="tools-grid">
                                            <div class="tool-category mb-4">
                                                <h4><i class="bi bi-search"></i> Reconocimiento</h4>
                                                <div class="tool-list">
                                                    <div class="tool-item">
                                                        <a href="https://nmap.org/" class="tool-name">Nmap</a>
                                                        <p>Network Discovery y Security Scanning</p>
                                                        <div class="tool-tags">
                                                            <span class="badge bg-danger">Esencial</span>
                                                            <span class="badge bg-secondary">Networking</span>
                                                        </div>
                                                    </div>
                                                    <div class="tool-item">
                                                        <a href="https://github.com/OWASP/Amass" class="tool-name">OWASP Amass</a>
                                                        <p>Network Mapping of Attack Surfaces</p>
                                                        <div class="tool-tags">
                                                            <span class="badge bg-danger">OSINT</span>
                                                            <span class="badge bg-secondary">Reconocimiento</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tool-category mb-4">
                                                <h4><i class="bi bi-lightning"></i> Explotación</h4>
                                                <div class="tool-list">
                                                    <div class="tool-item">
                                                        <a href="https://www.metasploit.com/" class="tool-name">Metasploit Framework</a>
                                                        <p>Framework de penetración y desarrollo de exploits</p>
                                                        <div class="tool-tags">
                                                            <span class="badge bg-danger">Esencial</span>
                                                            <span class="badge bg-secondary">Explotación</span>
                                                        </div>
                                                        <div class="tool-resources">
                                                            <a href="https://docs.metasploit.com/" target="_blank">Documentación</a>
                                                            <a href="https://www.offensive-security.com/metasploit-unleashed/" target="_blank">Tutorial</a>
                                                        </div>
                                                    </div>
                                                    <div class="tool-item">
                                                        <a href="https://www.cobaltstrike.com/" class="tool-name">Cobalt Strike</a>
                                                        <p>Plataforma de operaciones post-explotación</p>
                                                        <div class="tool-tags">
                                                            <span class="badge bg-danger">Avanzado</span>
                                                            <span class="badge bg-secondary">C2</span>
                                                        </div>
                                                        <div class="tool-resources">
                                                            <a href="https://www.cobaltstrike.com/help-beacon" target="_blank">Beacon Guide</a>
                                                            <a href="https://www.cobaltstrike.com/training" target="_blank">Training</a>
                                                        </div>
                                                    </div>
                                                    <div class="tool-item">
                                                        <a href="https://github.com/BloodHoundAD/BloodHound" class="tool-name">BloodHound</a>
                                                        <p>Análisis de Active Directory</p>
                                                        <div class="tool-tags">
                                                            <span class="badge bg-danger">AD</span>
                                                            <span class="badge bg-secondary">Grafos</span>
                                                        </div>
                                                        <div class="tool-resources">
                                                            <a href="https://bloodhound.readthedocs.io/" target="_blank">Docs</a>
                                                            <a href="https://github.com/BloodHoundAD/BloodHound/wiki" target="_blank">Wiki</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tool-category mb-4">
                                                <h4><i class="bi bi-shield-slash"></i> Post-Explotación</h4>
                                                <div class="tool-list">
                                                    <div class="tool-item">
                                                        <a href="https://github.com/PowerShellMafia/PowerSploit" class="tool-name">PowerSploit</a>
                                                        <p>Framework de post-explotación en PowerShell</p>
                                                        <div class="tool-tags">
                                                            <span class="badge bg-danger">Windows</span>
                                                            <span class="badge bg-secondary">PowerShell</span>
                                                        </div>
                                                    </div>
                                                    <div class="tool-item">
                                                        <a href="https://github.com/carlospolop/PEASS-ng" class="tool-name">PEASS-ng</a>
                                                        <p>Scripts de enumeración privilegiada</p>
                                                        <div class="tool-tags">
                                                            <span class="badge bg-danger">Privesc</span>
                                                            <span class="badge bg-secondary">Enumeración</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tool-category mb-4">
                                                <h4><i class="bi bi-eye-slash"></i> Evasión y Persistencia</h4>
                                                <div class="tool-list">
                                                    <div class="tool-item">
                                                        <a href="https://github.com/hfiref0x/UACME" class="tool-name">UACME</a>
                                                        <p>Bypass de UAC en Windows</p>
                                                        <div class="tool-tags">
                                                            <span class="badge bg-danger">UAC</span>
                                                            <span class="badge bg-secondary">Windows</span>
                                                        </div>
                                                    </div>
                                                    <div class="tool-item">
                                                        <a href="https://github.com/danielbohannon/Invoke-Obfuscation" class="tool-name">Invoke-Obfuscation</a>
                                                        <p>Ofuscación de PowerShell</p>
                                                        <div class="tool-tags">
                                                            <span class="badge bg-danger">Evasión</span>
                                                            <span class="badge bg-secondary">PowerShell</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Certificaciones -->
                                    <div class="tab-pane fade" id="redteam-certs">
                                        <h3 class="mb-4">Certificaciones Profesionales</h3>
                                        <div class="cert-grid">
                                            <div class="cert-category mb-4">
                                                <h4><i class="bi bi-star"></i> Certificaciones Fundamentales</h4>
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
                                                                <span>Pentesting</span>
                                                                <span>Explotación</span>
                                                                <span>Informes</span>
                                                            </div>
                                                            <a href="https://www.offensive-security.com/pwk-oscp/" class="btn btn-outline-danger mt-2">Más Info</a>
                                                        </div>
                                                    </div>

                                                    <div class="cert-item">
                                                        <div class="cert-header">
                                                            <img src="assets/certs/crto.png" alt="CRTO">
                                                            <h4>CRTO</h4>
                                                        </div>
                                                        <p>Certified Red Team Operator</p>
                                                        <div class="cert-details">
                                                            <div class="cert-info">
                                                                <span><i class="bi bi-clock"></i> 2-4 meses</span>
                                                                <span><i class="bi bi-currency-dollar"></i> $1499</span>
                                                            </div>
                                                            <div class="cert-skills">
                                                                <span>C2</span>
                                                                <span>OPSEC</span>
                                                                <span>AD</span>
                                                            </div>
                                                            <a href="https://www.zeropointsecurity.co.uk/red-team-ops" class="btn btn-outline-danger mt-2">Más Info</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="cert-category">
                                                <h4><i class="bi bi-stars"></i> Certificaciones Avanzadas</h4>
                                                <div class="cert-list">
                                                    <div class="cert-item">
                                                        <div class="cert-header">
                                                            <img src="assets/certs/osep.png" alt="OSEP">
                                                            <h4>OSEP</h4>
                                                        </div>
                                                        <p>Offensive Security Experienced Penetration Tester</p>
                                                        <div class="cert-details">
                                                            <div class="cert-info">
                                                                <span><i class="bi bi-clock"></i> 5-8 meses</span>
                                                                <span><i class="bi bi-currency-dollar"></i> $1299</span>
                                                            </div>
                                                            <div class="cert-skills">
                                                                <span>Evasión AV</span>
                                                                <span>Desarrollo</span>
                                                                <span>Advanced Web</span>
                                                            </div>
                                                            <a href="https://www.offensive-security.com/pen300-osep/" class="btn btn-outline-danger mt-2">Más Info</a>
                                                        </div>
                                                    </div>

                                                    <div class="cert-item">
                                                        <div class="cert-header">
                                                            <img src="assets/certs/gxpn.png" alt="GXPN">
                                                            <h4>GXPN</h4>
                                                        </div>
                                                        <p>GIAC Exploit Researcher and Advanced Penetration Tester</p>
                                                        <div class="cert-details">
                                                            <div class="cert-info">
                                                                <span><i class="bi bi-clock"></i> 4-6 meses</span>
                                                                <span><i class="bi bi-currency-dollar"></i> $7,270</span>
                                                            </div>
                                                            <div class="cert-skills">
                                                                <span>Exploits</span>
                                                                <span>RCE</span>
                                                                <span>Advanced</span>
                                                            </div>
                                                            <a href="https://www.giac.org/certification/exploit-researcher-advanced-penetration-tester-gxpn" class="btn btn-outline-danger mt-2">Más Info</a>
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
        </div>
    `;

    document.body.appendChild(roadmapModal);
    const modal = new bootstrap.Modal(roadmapModal);
    modal.show();

    roadmapModal.addEventListener('hidden.bs.modal', function () {
        document.body.removeChild(roadmapModal);
    });
} 