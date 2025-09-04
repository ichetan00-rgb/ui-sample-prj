// Corporate Banking App JavaScript

class CorporateBankingApp {
    constructor() {
        this.currentUser = null;
        this.currentTransaction = null;
        this.zoomLevel = 1;
        this.transactions = this.loadSampleData();
        this.isDarkMode = localStorage.getItem('theme') === 'dark' || 
                         (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.applyTheme();
        this.showLoginPage();
    }

    setupEventListeners() {
        // Theme toggle
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        }

        // Login form
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });

        // Search functionality
        const searchBtn = document.getElementById('search-btn');
        const searchInput = document.getElementById('transaction-search');
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.handleSearch());
        }
        
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleSearch();
            });
        }

        // Quick action buttons
        document.querySelectorAll('.quick-action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleQuickSearch(e));
        });

        // File upload
        const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-upload');
        
        if (uploadArea && fileInput) {
            uploadArea.addEventListener('click', () => fileInput.click());
            uploadArea.addEventListener('dragover', (e) => this.handleDragOver(e));
            uploadArea.addEventListener('drop', (e) => this.handleFileDrop(e));
            fileInput.addEventListener('change', (e) => this.handleFileUpload(e));
        }

        // Summary cards
        document.querySelectorAll('.summary-card').forEach(card => {
            card.addEventListener('click', (e) => this.handleSummaryCardClick(e));
        });

        // Modal close
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => this.closeModal(e.target.closest('.modal')));
        });

        // Journey controls
        const backToDashboard = document.getElementById('back-to-dashboard');
        const backToHome = document.getElementById('back-to-home');
        const zoomIn = document.getElementById('zoom-in');
        const zoomOut = document.getElementById('zoom-out');
        const fitScreen = document.getElementById('fit-screen');
        
        if (backToDashboard) backToDashboard.addEventListener('click', () => this.showDashboard());
        if (backToHome) backToHome.addEventListener('click', () => this.showHomePage());
        if (zoomIn) zoomIn.addEventListener('click', () => this.adjustZoom(1.2));
        if (zoomOut) zoomOut.addEventListener('click', () => this.adjustZoom(0.8));
        if (fitScreen) fitScreen.addEventListener('click', () => this.fitToScreen());

        // Stage details panel close
        const panelClose = document.querySelector('.panel-close');
        if (panelClose) {
            panelClose.addEventListener('click', () => this.closeStageDetails());
        }

        // Logout
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
    }

    loadSampleData() {
        return {
            "transactions": [
                {
                    "id": "TXN-2024-00000001",
                    "accountHolder": "Morgan Stanley Corp",
                    "debtorName": "JP Morgan Chase",
                    "amount": 5000000,
                    "currency": "USD",
                    "status": "completed",
                    "currentStage": 17,
                    "totalStages": 17,
                    "initiationTime": "2024-09-01T09:30:00Z",
                    "completionTime": "2024-09-01T15:45:00Z",
                    "route": ["Beijing", "Delhi", "London", "New York"],
                    "stages": [
                        {"id": 1, "name": "Payment Initiation", "status": "completed", "city": "Beijing", "timestamp": "2024-09-01T09:30:00Z"},
                        {"id": 2, "name": "Format Validation", "status": "completed", "city": "Beijing", "timestamp": "2024-09-01T09:35:00Z"},
                        {"id": 3, "name": "Compliance Check", "status": "completed", "city": "Beijing", "timestamp": "2024-09-01T09:45:00Z"},
                        {"id": 4, "name": "Routing Decision", "status": "completed", "city": "Beijing", "timestamp": "2024-09-01T10:00:00Z"},
                        {"id": 5, "name": "SWIFT Message Creation", "status": "completed", "city": "Beijing", "timestamp": "2024-09-01T10:15:00Z"},
                        {"id": 6, "name": "Network Transmission", "status": "completed", "city": "Delhi", "timestamp": "2024-09-01T11:00:00Z"},
                        {"id": 7, "name": "Intermediary Bank Processing", "status": "completed", "city": "Delhi", "timestamp": "2024-09-01T11:30:00Z"},
                        {"id": 8, "name": "Correspondent Bank Review", "status": "completed", "city": "Delhi", "timestamp": "2024-09-01T12:00:00Z"},
                        {"id": 9, "name": "Route Optimization", "status": "completed", "city": "London", "timestamp": "2024-09-01T13:00:00Z"},
                        {"id": 10, "name": "Final Bank Processing", "status": "completed", "city": "London", "timestamp": "2024-09-01T13:30:00Z"},
                        {"id": 11, "name": "Account Verification", "status": "completed", "city": "New York", "timestamp": "2024-09-01T14:00:00Z"},
                        {"id": 12, "name": "Final Compliance Check", "status": "completed", "city": "New York", "timestamp": "2024-09-01T14:15:00Z"},
                        {"id": 13, "name": "Fund Settlement", "status": "completed", "city": "New York", "timestamp": "2024-09-01T14:30:00Z"},
                        {"id": 14, "name": "Confirmation Generation", "status": "completed", "city": "New York", "timestamp": "2024-09-01T15:00:00Z"},
                        {"id": 15, "name": "Status Update", "status": "completed", "city": "New York", "timestamp": "2024-09-01T15:15:00Z"},
                        {"id": 16, "name": "Customer Notification", "status": "completed", "city": "New York", "timestamp": "2024-09-01T15:30:00Z"},
                        {"id": 17, "name": "Archive & Reconciliation", "status": "completed", "city": "New York", "timestamp": "2024-09-01T15:45:00Z"}
                    ]
                },
                {
                    "id": "TXN-2024-00000002",
                    "accountHolder": "Goldman Sachs International",
                    "debtorName": "Deutsche Bank AG",
                    "amount": 25000000,
                    "currency": "EUR",
                    "status": "in_progress",
                    "currentStage": 8,
                    "totalStages": 50,
                    "initiationTime": "2024-09-02T08:00:00Z",
                    "completionTime": null,
                    "route": ["London", "Delhi", "Beijing", "New York"],
                    "stages": [
                        {"id": 1, "name": "Payment Initiation", "status": "completed", "city": "London", "timestamp": "2024-09-02T08:00:00Z"},
                        {"id": 2, "name": "Initial Validation", "status": "completed", "city": "London", "timestamp": "2024-09-02T08:05:00Z"},
                        {"id": 3, "name": "Risk Assessment", "status": "completed", "city": "London", "timestamp": "2024-09-02T08:15:00Z"},
                        {"id": 4, "name": "Regulatory Check", "status": "completed", "city": "London", "timestamp": "2024-09-02T08:30:00Z"},
                        {"id": 5, "name": "Multi-currency Validation", "status": "completed", "city": "London", "timestamp": "2024-09-02T08:45:00Z"},
                        {"id": 6, "name": "Enhanced Compliance", "status": "completed", "city": "Delhi", "timestamp": "2024-09-02T09:30:00Z"},
                        {"id": 7, "name": "Cross-border Verification", "status": "completed", "city": "Delhi", "timestamp": "2024-09-02T10:00:00Z"},
                        {"id": 8, "name": "Intermediary Bank Review", "status": "in_progress", "city": "Delhi", "timestamp": "2024-09-02T10:30:00Z"}
                    ]
                },
                {
                    "id": "TXN-2024-00000003",
                    "accountHolder": "Citibank N.A.",
                    "debtorName": "HSBC Holdings",
                    "amount": 750000,
                    "currency": "GBP",
                    "status": "failed",
                    "currentStage": 5,
                    "totalStages": 12,
                    "initiationTime": "2024-09-03T11:20:00Z",
                    "completionTime": null,
                    "route": ["New York", "London"],
                    "failureReason": "Insufficient funds in debtor account",
                    "stages": [
                        {"id": 1, "name": "Payment Initiation", "status": "completed", "city": "New York", "timestamp": "2024-09-03T11:20:00Z"},
                        {"id": 2, "name": "Format Validation", "status": "completed", "city": "New York", "timestamp": "2024-09-03T11:25:00Z"},
                        {"id": 3, "name": "Account Verification", "status": "completed", "city": "New York", "timestamp": "2024-09-03T11:30:00Z"},
                        {"id": 4, "name": "Fund Availability Check", "status": "completed", "city": "New York", "timestamp": "2024-09-03T11:35:00Z"},
                        {"id": 5, "name": "Final Authorization", "status": "failed", "city": "New York", "timestamp": "2024-09-03T11:40:00Z", "error": "Insufficient funds"}
                    ]
                },
                {
                    "id": "TXN-2024-00000004",
                    "accountHolder": "Bank of America Corp",
                    "debtorName": "Wells Fargo & Company",
                    "amount": 1200000,
                    "currency": "USD",
                    "status": "completed",
                    "currentStage": 3,
                    "totalStages": 3,
                    "initiationTime": "2024-09-04T14:10:00Z",
                    "completionTime": "2024-09-04T14:25:00Z",
                    "route": ["New York"],
                    "stages": [
                        {"id": 1, "name": "Payment Initiation", "status": "completed", "city": "New York", "timestamp": "2024-09-04T14:10:00Z"},
                        {"id": 2, "name": "Direct Processing", "status": "completed", "city": "New York", "timestamp": "2024-09-04T14:15:00Z"},
                        {"id": 3, "name": "Settlement Complete", "status": "completed", "city": "New York", "timestamp": "2024-09-04T14:25:00Z"}
                    ]
                }
            ]
        };
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }

    applyTheme() {
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            if (this.isDarkMode) {
                document.documentElement.setAttribute('data-color-scheme', 'dark');
                themeIcon.textContent = '☀️';
            } else {
                document.documentElement.setAttribute('data-color-scheme', 'light');
                themeIcon.textContent = '🌙';
            }
        }
    }

    handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Allow any non-empty credentials for demo purposes
        if (username && password) {
            this.currentUser = { username };
            this.showToast('Login successful!', 'success');
            setTimeout(() => {
                this.showMainApp();
            }, 500);
        } else {
            this.showToast('Please enter valid credentials', 'error');
        }
    }

    logout() {
        this.currentUser = null;
        this.showLoginPage();
        this.showToast('Logged out successfully', 'info');
    }

    showLoginPage() {
        const loginPage = document.getElementById('login-page');
        const mainApp = document.getElementById('main-app');
        
        if (loginPage && mainApp) {
            loginPage.classList.remove('hidden');
            mainApp.classList.add('hidden');
        }
    }

    showMainApp() {
        const loginPage = document.getElementById('login-page');
        const mainApp = document.getElementById('main-app');
        
        if (loginPage && mainApp) {
            loginPage.classList.add('hidden');
            mainApp.classList.remove('hidden');
            this.showHomePage();
        }
    }

    handleNavigation(e) {
        e.preventDefault();
        const page = e.target.dataset.page;
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');

        switch (page) {
            case 'home':
                this.showHomePage();
                break;
            case 'dashboard':
                this.showDashboard();
                break;
            case 'search':
                this.showSearchResults([]);
                break;
            case 'reports':
                this.showToast('Reports feature coming soon!', 'info');
                break;
        }
    }

    showHomePage() {
        this.hideAllPages();
        const homePage = document.getElementById('home-page');
        if (homePage) {
            homePage.classList.remove('hidden');
        }
    }

    showDashboard() {
        this.hideAllPages();
        const dashboardPage = document.getElementById('dashboard-page');
        if (dashboardPage) {
            dashboardPage.classList.remove('hidden');
            this.populateDashboard();
        }
    }

    showSearchResults(results) {
        this.hideAllPages();
        const searchResultsPage = document.getElementById('search-results-page');
        if (searchResultsPage) {
            searchResultsPage.classList.remove('hidden');
            this.populateSearchResults(results);
        }
    }

    showPaymentJourney(transactionId) {
        this.hideAllPages();
        const transaction = this.transactions.transactions.find(t => t.id === transactionId);
        if (transaction) {
            this.currentTransaction = transaction;
            const journeyPage = document.getElementById('journey-page');
            if (journeyPage) {
                journeyPage.classList.remove('hidden');
                this.populatePaymentJourney(transaction);
            }
        }
    }

    hideAllPages() {
        document.querySelectorAll('.page-content').forEach(page => page.classList.add('hidden'));
    }

    handleSearch() {
        const searchInput = document.getElementById('transaction-search');
        if (searchInput) {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                const results = this.searchTransactions(searchTerm);
                if (results.length === 1) {
                    this.showPaymentJourney(results[0].id);
                } else {
                    this.showSearchResults(results);
                }
            }
        }
    }

    handleQuickSearch(e) {
        const txnId = e.target.dataset.txn;
        if (txnId) {
            this.showPaymentJourney(txnId);
        }
    }

    searchTransactions(term) {
        return this.transactions.transactions.filter(t => 
            t.id.toLowerCase().includes(term.toLowerCase()) ||
            t.accountHolder.toLowerCase().includes(term.toLowerCase()) ||
            t.debtorName.toLowerCase().includes(term.toLowerCase())
        );
    }

    handleDragOver(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    handleFileDrop(e) {
        e.preventDefault();
        e.target.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            this.processFile(files[0]);
        }
    }

    handleFileUpload(e) {
        const file = e.target.files[0];
        if (file) {
            this.processFile(file);
        }
    }

    processFile(file) {
        this.showToast(`Processing file: ${file.name}`, 'info');
        // Simulate file processing
        setTimeout(() => {
            this.showToast('File processed successfully!', 'success');
            this.showSearchResults(this.transactions.transactions);
        }, 2000);
    }

    populateDashboard() {
        const transactions = this.transactions.transactions;
        
        // Calculate summary statistics
        const totalCount = transactions.length;
        const totalValue = transactions.reduce((sum, t) => sum + t.amount, 0);
        const successCount = transactions.filter(t => t.status === 'completed').length;
        const successValue = transactions.filter(t => t.status === 'completed').reduce((sum, t) => sum + t.amount, 0);
        const progressCount = transactions.filter(t => t.status === 'in_progress').length;
        const progressValue = transactions.filter(t => t.status === 'in_progress').reduce((sum, t) => sum + t.amount, 0);
        const failedCount = transactions.filter(t => t.status === 'failed').length;
        const failedValue = transactions.filter(t => t.status === 'failed').reduce((sum, t) => sum + t.amount, 0);

        // Update summary cards
        const totalCountEl = document.getElementById('total-count');
        const totalValueEl = document.getElementById('total-value');
        const successCountEl = document.getElementById('success-count');
        const successValueEl = document.getElementById('success-value');
        const progressCountEl = document.getElementById('progress-count');
        const progressValueEl = document.getElementById('progress-value');
        const failedCountEl = document.getElementById('failed-count');
        const failedValueEl = document.getElementById('failed-value');

        if (totalCountEl) totalCountEl.textContent = totalCount;
        if (totalValueEl) totalValueEl.textContent = this.formatCurrency(totalValue, 'USD');
        if (successCountEl) successCountEl.textContent = successCount;
        if (successValueEl) successValueEl.textContent = this.formatCurrency(successValue, 'USD');
        if (progressCountEl) progressCountEl.textContent = progressCount;
        if (progressValueEl) progressValueEl.textContent = this.formatCurrency(progressValue, 'EUR');
        if (failedCountEl) failedCountEl.textContent = failedCount;
        if (failedValueEl) failedValueEl.textContent = this.formatCurrency(failedValue, 'GBP');

        // Populate payments table
        this.populatePaymentsTable();
    }

    populatePaymentsTable() {
        const tbody = document.getElementById('payments-table-body');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        this.transactions.transactions.forEach(transaction => {
            const row = document.createElement('tr');
            const progress = Math.round((transaction.currentStage / transaction.totalStages) * 100);
            
            row.innerHTML = `
                <td>${transaction.id}</td>
                <td>${transaction.accountHolder}</td>
                <td>${transaction.debtorName}</td>
                <td>${this.formatCurrency(transaction.amount, transaction.currency)}</td>
                <td><span class="status status--${this.getStatusClass(transaction.status)}">${this.formatStatus(transaction.status)}</span></td>
                <td>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <small>${transaction.currentStage}/${transaction.totalStages}</small>
                </td>
                <td><button class="view-details-btn" data-txn="${transaction.id}">View Details</button></td>
            `;
            tbody.appendChild(row);
        });

        // Add event listeners to view details buttons
        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const txnId = e.target.dataset.txn;
                this.showPaymentJourney(txnId);
            });
        });
    }

    populateSearchResults(results) {
        const tbody = document.getElementById('search-results-body');
        const count = document.getElementById('results-count');
        
        if (count) {
            count.textContent = `Found ${results.length} transaction${results.length !== 1 ? 's' : ''}`;
        }
        
        if (tbody) {
            tbody.innerHTML = '';

            results.forEach(transaction => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${transaction.id}</td>
                    <td>${transaction.accountHolder}</td>
                    <td>${this.formatCurrency(transaction.amount, transaction.currency)}</td>
                    <td><span class="status status--${this.getStatusClass(transaction.status)}">${this.formatStatus(transaction.status)}</span></td>
                    <td>${transaction.route.join(' → ')}</td>
                    <td><button class="view-details-btn" data-txn="${transaction.id}">View Journey</button></td>
                `;
                tbody.appendChild(row);
            });

            // Add event listeners to view details buttons
            document.querySelectorAll('.view-details-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const txnId = e.target.dataset.txn;
                    this.showPaymentJourney(txnId);
                });
            });
        }
    }

    populatePaymentJourney(transaction) {
        // Update payment details
        const paymentId = document.getElementById('payment-id');
        const paymentAmount = document.getElementById('payment-amount');
        const paymentParties = document.getElementById('payment-parties');
        const statusBadge = document.getElementById('payment-status-badge');
        const paymentProgress = document.getElementById('payment-progress');

        if (paymentId) paymentId.textContent = transaction.id;
        if (paymentAmount) paymentAmount.textContent = this.formatCurrency(transaction.amount, transaction.currency);
        if (paymentParties) paymentParties.textContent = `${transaction.accountHolder} → ${transaction.debtorName}`;
        
        if (statusBadge) {
            statusBadge.textContent = this.formatStatus(transaction.status);
            statusBadge.className = `status status--${this.getStatusClass(transaction.status)}`;
        }
        
        if (paymentProgress) {
            paymentProgress.textContent = `Stage ${transaction.currentStage} of ${transaction.totalStages}`;
        }

        // Render journey visualization
        this.renderJourneyVisualization(transaction);
    }

    renderJourneyVisualization(transaction) {
        const canvas = document.getElementById('journey-canvas');
        if (!canvas) return;
        
        canvas.innerHTML = '';

        const timeline = document.createElement('div');
        timeline.className = 'journey-timeline';
        
        const stageWidth = Math.max(100, 800 / transaction.totalStages);
        timeline.style.minWidth = `${stageWidth * transaction.totalStages}px`;

        transaction.stages.forEach((stage, index) => {
            const stageElement = document.createElement('div');
            stageElement.className = 'journey-stage';
            stageElement.style.width = `${stageWidth}px`;
            
            const node = document.createElement('div');
            node.className = `stage-node ${stage.status}`;
            node.textContent = stage.id;
            
            const name = document.createElement('div');
            name.className = 'stage-name';
            name.textContent = stage.name;
            
            const city = document.createElement('div');
            city.className = 'stage-city';
            city.textContent = stage.city;

            stageElement.appendChild(node);
            stageElement.appendChild(name);
            stageElement.appendChild(city);

            // Add connector line (except for last stage)
            if (index < transaction.stages.length - 1) {
                const connector = document.createElement('div');
                connector.className = `stage-connector ${stage.status === 'completed' ? 'completed' : ''}`;
                stageElement.appendChild(connector);
            }

            // Add click event listener
            stageElement.addEventListener('click', () => {
                this.showStageDetails(stage);
            });

            timeline.appendChild(stageElement);
        });

        canvas.appendChild(timeline);
        this.zoomLevel = 1;
    }

    showStageDetails(stage) {
        const panel = document.getElementById('stage-details-panel');
        const stageName = document.getElementById('stage-name');
        const stageStatus = document.getElementById('stage-status');
        const stageCity = document.getElementById('stage-city');
        const stageTimestamp = document.getElementById('stage-timestamp');
        const errorElement = document.getElementById('stage-error');
        const stageErrorText = document.getElementById('stage-error-text');
        
        if (stageName) stageName.textContent = stage.name;
        if (stageStatus) stageStatus.textContent = this.formatStatus(stage.status);
        if (stageCity) stageCity.textContent = stage.city;
        if (stageTimestamp) stageTimestamp.textContent = this.formatTimestamp(stage.timestamp);
        
        if (errorElement && stageErrorText) {
            if (stage.error) {
                stageErrorText.textContent = stage.error;
                errorElement.classList.remove('hidden');
            } else {
                errorElement.classList.add('hidden');
            }
        }

        if (panel) {
            panel.classList.add('visible');
        }
    }

    closeStageDetails() {
        const panel = document.getElementById('stage-details-panel');
        if (panel) {
            panel.classList.remove('visible');
        }
    }

    adjustZoom(factor) {
        this.zoomLevel *= factor;
        const canvas = document.querySelector('.journey-timeline');
        if (canvas) {
            canvas.style.transform = `scale(${this.zoomLevel})`;
            canvas.style.transformOrigin = 'left center';
        }
    }

    fitToScreen() {
        const canvas = document.querySelector('.journey-timeline');
        const container = document.getElementById('journey-canvas');
        if (canvas && container) {
            const containerWidth = container.offsetWidth;
            const canvasWidth = canvas.scrollWidth;
            this.zoomLevel = Math.min(1, containerWidth / canvasWidth);
            canvas.style.transform = `scale(${this.zoomLevel})`;
            canvas.style.transformOrigin = 'left center';
        }
    }

    handleSummaryCardClick(e) {
        const section = e.currentTarget.dataset.section;
        if (section) {
            this.showCityBreakdown(section);
        }
    }

    showCityBreakdown(section) {
        const modal = document.getElementById('city-breakdown-modal');
        const title = document.getElementById('breakdown-title');
        const content = document.getElementById('city-breakdown-content');
        
        if (title) {
            title.textContent = `${section.charAt(0).toUpperCase() + section.slice(1)} Payments by City`;
        }
        
        if (content) {
            // Generate city breakdown data
            const cities = ['London', 'New York', 'Delhi', 'Beijing'];
            const breakdown = cities.map(city => {
                const cityTransactions = this.transactions.transactions.filter(t => {
                    if (section === 'total') return t.route.includes(city);
                    return t.route.includes(city) && (
                        (section === 'success' && t.status === 'completed') ||
                        (section === 'progress' && t.status === 'in_progress') ||
                        (section === 'failed' && t.status === 'failed')
                    );
                });
                
                return {
                    city,
                    count: cityTransactions.length,
                    value: cityTransactions.reduce((sum, t) => sum + t.amount, 0)
                };
            });

            content.innerHTML = breakdown.map(item => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px; background: var(--color-bg-1); border-radius: 6px;">
                    <span><strong>${item.city}</strong></span>
                    <span>${item.count} transactions (${this.formatCurrency(item.value, 'USD')})</span>
                </div>
            `).join('');
        }

        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    formatCurrency(amount, currency) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    }

    formatStatus(status) {
        const statusMap = {
            'completed': 'Completed',
            'in_progress': 'In Progress',
            'failed': 'Failed'
        };
        return statusMap[status] || status;
    }

    getStatusClass(status) {
        const classMap = {
            'completed': 'success',
            'in_progress': 'warning',
            'failed': 'error'
        };
        return classMap[status] || 'info';
    }

    formatTimestamp(timestamp) {
        return new Date(timestamp).toLocaleString();
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        container.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (container.contains(toast)) {
                    container.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CorporateBankingApp();
});