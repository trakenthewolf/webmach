function showCloudSecurityRoadmap() {
    const roadmapModal = document.createElement('div');
    roadmapModal.className = 'modal fade';
    roadmapModal.id = 'cloudSecurityModal';
    roadmapModal.innerHTML = `
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content cyber-modal">
                <div class="modal-header">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-cloud-check fs-3 me-2"></i>
                        <h5 class="modal-title mb-0">Cloud Security</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body p-0">
                    <div class="container-fluid">
                        <div class="row">
                            <!-- Sidebar -->
                            <div class="col-md-3 p-0">
                                <div class="nav flex-column nav-pills">
                                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#cloudsecurity-overview">
                                        <i class="bi bi-info-circle"></i> Descripción
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#cloudsecurity-skills">
                                        <i class="bi bi-diagram-3"></i> Habilidades
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#cloudsecurity-tools">
                                        <i class="bi bi-tools"></i> Herramientas
                                    </button>
                                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#cloudsecurity-certs">
                                        <i class="bi bi-award"></i> Certificaciones
                                    </button>
                                </div>
                            </div>

                            <!-- Contenido Principal -->
                            <div class="col-md-9">
                                <div class="tab-content p-4">
                                    <!-- Vista General -->
                                    <div class="tab-pane fade show active" id="cloudsecurity-overview">
                                        <div class="overview-header mb-4">
                                            <h3>Cloud Security Engineer</h3>
                                            <p class="lead">Especialista en protección de infraestructuras y servicios cloud</p>
                                            
                                            <div class="cyber-info-card mt-4">
                                                <h4>Descripción del Rol</h4>
                                                <p>El ingeniero de seguridad cloud es responsable de diseñar, implementar y mantener la seguridad de los servicios e infraestructuras en la nube. Este rol combina conocimientos de arquitectura cloud, seguridad tradicional y metodologías DevSecOps para proteger los activos digitales en entornos cloud.</p>
                                                
                                                <h5>Responsabilidades Principales:</h5>
                                                <ul>
                                                    <li>Diseñar arquitecturas seguras en la nube</li>
                                                    <li>Implementar controles de seguridad cloud-native</li>
                                                    <li>Gestionar identidades y accesos en la nube</li>
                                                    <li>Monitorizar y responder a amenazas cloud</li>
                                                    <li>Asegurar compliance en entornos multi-cloud</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="overview-stats row g-4 mb-4">
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-graph-up"></i>
                                                    <h4>Salario Promedio</h4>
                                                    <p>$95,000 - $180,000</p>
                                                    <small>Varía según ubicación y experiencia</small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-clock-history"></i>
                                                    <h4>Experiencia Necesaria</h4>
                                                    <p>3-5 años en IT Security</p>
                                                    <small>2+ años en tecnologías cloud</small>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="cyber-info-card">
                                                    <i class="bi bi-bar-chart"></i>
                                                    <h4>Demanda Laboral</h4>
                                                    <p>Muy Alta</p>
                                                    <small>Crecimiento proyectado: 35% anual</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Vista de Habilidades -->
                                    <div class="tab-pane fade" id="cloudsecurity-skills">
                                        <h3 class="mb-4">Habilidades Necesarias</h3>
                                        
                                        <div class="row g-4">
                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-cloud"></i>
                                                    </div>
                                                    <h4>Plataformas Cloud</h4>
                                                    <ul>
                                                        <li>AWS (VPC, IAM, KMS, CloudTrail)</li>
                                                        <li>Azure (NSG, Key Vault, Sentinel)</li>
                                                        <li>GCP (VPC, IAM, Cloud Armor)</li>
                                                        <li>Estrategias Multi-Cloud</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-shield-check"></i>
                                                    </div>
                                                    <h4>Seguridad Cloud Nativa</h4>
                                                    <ul>
                                                        <li>Docker Security</li>
                                                        <li>Kubernetes Security</li>
                                                        <li>Serverless Security</li>
                                                        <li>Service Mesh Security</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-code-square"></i>
                                                    </div>
                                                    <h4>DevSecOps</h4>
                                                    <ul>
                                                        <li>CI/CD Security Integration</li>
                                                        <li>Infrastructure as Code (IaC)</li>
                                                        <li>Security as Code</li>
                                                        <li>Automatización de Seguridad</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-file-text"></i>
                                                    </div>
                                                    <h4>Compliance y Gobierno</h4>
                                                    <ul>
                                                        <li>Cloud Compliance Frameworks</li>
                                                        <li>GDPR, HIPAA, PCI DSS</li>
                                                        <li>Risk Assessment</li>
                                                        <li>Security Policies</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-shield-lock"></i>
                                                    </div>
                                                    <h4>Seguridad de Datos</h4>
                                                    <ul>
                                                        <li>Encryption at Rest/Transit</li>
                                                        <li>Key Management</li>
                                                        <li>Data Loss Prevention</li>
                                                        <li>Secret Management</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="skill-item">
                                                    <div class="skill-icon">
                                                        <i class="bi bi-graph-up"></i>
                                                    </div>
                                                    <h4>Monitoreo y Respuesta</h4>
                                                    <ul>
                                                        <li>SIEM Cloud-Native</li>
                                                        <li>Cloud Logging</li>
                                                        <li>Threat Detection</li>
                                                        <li>Incident Response</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Vista de Herramientas -->
                                    <div class="tab-pane fade" id="cloudsecurity-tools">
                                        <h3 class="mb-4">Herramientas Esenciales</h3>
                                        
                                        <div class="row g-4">
                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>Seguridad Cloud Nativa</h5>
                                                    <ul>
                                                        <li>AWS GuardDuty</li>
                                                        <li>Azure Security Center</li>
                                                        <li>Google Cloud Security Command</li>
                                                        <li>Cloud Security Posture Management</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://aws.amazon.com/guardduty/" class="btn btn-outline-primary btn-sm">GuardDuty</a>
                                                        <a href="https://azure.microsoft.com/services/security-center/" class="btn btn-outline-primary btn-sm">Security Center</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>DevSecOps</h5>
                                                    <ul>
                                                        <li>HashiCorp Vault</li>
                                                        <li>Terraform</li>
                                                        <li>AWS CloudFormation</li>
                                                        <li>Azure Resource Manager</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://www.vaultproject.io/" class="btn btn-outline-primary btn-sm">Vault</a>
                                                        <a href="https://www.terraform.io/" class="btn btn-outline-primary btn-sm">Terraform</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>Seguridad de Contenedores</h5>
                                                    <ul>
                                                        <li>Aqua Security</li>
                                                        <li>Prisma Cloud (Twistlock)</li>
                                                        <li>Snyk Container</li>
                                                        <li>Trivy</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://www.aquasec.com/" class="btn btn-outline-primary btn-sm">Aqua</a>
                                                        <a href="https://www.paloaltonetworks.com/prisma/cloud" class="btn btn-outline-primary btn-sm">Prisma</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="tool-item">
                                                    <h5>Monitoreo y Compliance</h5>
                                                    <ul>
                                                        <li>AWS Config</li>
                                                        <li>Azure Policy</li>
                                                        <li>Cloud Custodian</li>
                                                        <li>Lacework</li>
                                                    </ul>
                                                    <div class="tool-links">
                                                        <a href="https://aws.amazon.com/config/" class="btn btn-outline-primary btn-sm">AWS Config</a>
                                                        <a href="https://www.lacework.com/" class="btn btn-outline-primary btn-sm">Lacework</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Certificaciones -->
                                    <div class="tab-pane fade" id="cloudsecurity-certs">
                                        <h3 class="mb-4">Certificaciones Recomendadas</h3>

                                        <div class="cert-category">
                                            <h4><i class="bi bi-bookmark-star"></i> Certificaciones Fundamentales</h4>
                                            <div class="cert-list">
                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/ccsp.png" alt="CCSP">
                                                        <h4>CCSP</h4>
                                                    </div>
                                                    <p>Certified Cloud Security Professional</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 3-6 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $599</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Cloud Security</span>
                                                            <span>Governance</span>
                                                        </div>
                                                        <a href="https://www.isc2.org/Certifications/CCSP" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>

                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/aws-security.png" alt="AWS Security">
                                                        <h4>AWS Security Specialty</h4>
                                                    </div>
                                                    <p>AWS Certified Security - Specialty</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 2-3 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $300</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>AWS Security</span>
                                                            <span>Cloud Defense</span>
                                                        </div>
                                                        <a href="https://aws.amazon.com/certification/certified-security-specialty/" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="cert-category mt-4">
                                            <h4><i class="bi bi-stars"></i> Certificaciones Avanzadas</h4>
                                            <div class="cert-list">
                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/azure-security.png" alt="Azure Security">
                                                        <h4>Azure Security Engineer</h4>
                                                    </div>
                                                    <p>Microsoft Certified: Azure Security Engineer Associate</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 2-3 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $165</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>Azure Security</span>
                                                            <span>Identity & Access</span>
                                                        </div>
                                                        <a href="https://docs.microsoft.com/learn/certifications/azure-security-engineer" class="btn btn-outline-primary mt-2">Más Info</a>
                                                    </div>
                                                </div>

                                                <div class="cert-item">
                                                    <div class="cert-header">
                                                        <img src="assets/certs/gcp-security.png" alt="GCP Security">
                                                        <h4>Google Cloud Security</h4>
                                                    </div>
                                                    <p>Google Cloud Professional Security Engineer</p>
                                                    <div class="cert-details">
                                                        <div class="cert-info">
                                                            <span><i class="bi bi-clock"></i> 2-3 meses</span>
                                                            <span><i class="bi bi-currency-dollar"></i> $200</span>
                                                        </div>
                                                        <div class="cert-skills">
                                                            <span>GCP Security</span>
                                                            <span>Cloud Protection</span>
                                                        </div>
                                                        <a href="https://cloud.google.com/certification/cloud-security-engineer" class="btn btn-outline-primary mt-2">Más Info</a>
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