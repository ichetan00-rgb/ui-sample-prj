// Enhanced Payment data with city information and detailed stages
const paymentsData = [
  {
    "paymentId": "PAY-2024-001234",
    "amount": 2500000,
    "currency": "USD",
    "beneficiary": "ABC Corporation Ltd",
    "beneficiaryBank": "JPMorgan Chase Bank",
    "swiftCode": "CHASUS33",
    "status": "Success",
    "initiationDate": "2024-01-15T09:30:00Z",
    "completionDate": "2024-01-15T11:45:00Z",
    "currentStage": "Completed",
    "swiftReference": "FT24015CHASUS33001234",
    "originCity": "Beijing",
    "destinationCity": "New York",
    "stages": [
      {"stage": 1, "name": "Payment Initiation", "status": "completed", "timestamp": "2024-01-15T09:30:00Z", "city": "Beijing"},
      {"stage": 2, "name": "Compliance Checks", "status": "completed", "timestamp": "2024-01-15T09:32:00Z", "city": "Beijing"},
      {"stage": 3, "name": "Formatting & Enrichment", "status": "completed", "timestamp": "2024-01-15T09:35:00Z", "city": "Beijing"},
      {"stage": 4, "name": "Routing Decision", "status": "completed", "timestamp": "2024-01-15T09:40:00Z", "city": "Beijing"},
      {"stage": 5, "name": "First Bank Processing", "status": "completed", "timestamp": "2024-01-15T09:45:00Z", "city": "Beijing"},
      {"stage": 6, "name": "Intermediary Bank 1", "status": "completed", "timestamp": "2024-01-15T10:15:00Z", "city": "Delhi"},
      {"stage": 7, "name": "Currency Conversion", "status": "completed", "timestamp": "2024-01-15T10:20:00Z", "city": "Delhi"},
      {"stage": 8, "name": "Intermediary Bank 2", "status": "completed", "timestamp": "2024-01-15T10:45:00Z", "city": "London"},
      {"stage": 9, "name": "Beneficiary Bank Receipt", "status": "completed", "timestamp": "2024-01-15T11:00:00Z", "city": "New York"},
      {"stage": 10, "name": "Final Validation", "status": "completed", "timestamp": "2024-01-15T11:10:00Z", "city": "New York"},
      {"stage": 11, "name": "Settlement Preparation", "status": "completed", "timestamp": "2024-01-15T11:20:00Z", "city": "New York"},
      {"stage": 12, "name": "Settlement Execution", "status": "completed", "timestamp": "2024-01-15T11:30:00Z", "city": "New York"},
      {"stage": 13, "name": "Confirmation Generation", "status": "completed", "timestamp": "2024-01-15T11:35:00Z", "city": "New York"},
      {"stage": 14, "name": "Notification Dispatch", "status": "completed", "timestamp": "2024-01-15T11:40:00Z", "city": "New York"},
      {"stage": 15, "name": "Reconciliation", "status": "completed", "timestamp": "2024-01-15T11:42:00Z", "city": "New York"},
      {"stage": 16, "name": "Reporting & Audit", "status": "completed", "timestamp": "2024-01-15T11:44:00Z", "city": "New York"},
      {"stage": 17, "name": "Completion", "status": "completed", "timestamp": "2024-01-15T11:45:00Z", "city": "New York"}
    ]
  },
  {
    "paymentId": "PAY-2024-001235",
    "amount": 1800000,
    "currency": "EUR",
    "beneficiary": "Deutsche Manufacturing GmbH",
    "beneficiaryBank": "Deutsche Bank AG",
    "swiftCode": "DEUTDEFF",
    "status": "Failed",
    "initiationDate": "2024-01-15T14:20:00Z",
    "failureReason": "Insufficient funds in correspondent account",
    "currentStage": "Failed at Stage 8",
    "swiftReference": "FT24015DEUTDEFF001235",
    "originCity": "London",
    "destinationCity": "Delhi",
    "stages": [
      {"stage": 1, "name": "Payment Initiation", "status": "completed", "timestamp": "2024-01-15T14:20:00Z", "city": "London"},
      {"stage": 2, "name": "Compliance Checks", "status": "completed", "timestamp": "2024-01-15T14:22:00Z", "city": "London"},
      {"stage": 3, "name": "Formatting & Enrichment", "status": "completed", "timestamp": "2024-01-15T14:25:00Z", "city": "London"},
      {"stage": 4, "name": "Routing Decision", "status": "completed", "timestamp": "2024-01-15T14:30:00Z", "city": "London"},
      {"stage": 5, "name": "First Bank Processing", "status": "completed", "timestamp": "2024-01-15T14:35:00Z", "city": "London"},
      {"stage": 6, "name": "Intermediary Bank 1", "status": "completed", "timestamp": "2024-01-15T15:05:00Z", "city": "New York"},
      {"stage": 7, "name": "Currency Conversion", "status": "completed", "timestamp": "2024-01-15T15:10:00Z", "city": "New York"},
      {"stage": 8, "name": "Intermediary Bank 2", "status": "failed", "timestamp": "2024-01-15T15:35:00Z", "city": "Delhi", "error": "Insufficient funds in correspondent account"}
    ]
  },
  {
    "paymentId": "PAY-2024-001236",
    "amount": 3200000,
    "currency": "GBP",
    "beneficiary": "London Financial Services",
    "beneficiaryBank": "Barclays Bank PLC",
    "swiftCode": "BARCGB22",
    "status": "In Progress",
    "initiationDate": "2024-01-15T16:10:00Z",
    "currentStage": "Processing at Intermediary Bank",
    "swiftReference": "FT24015BARCGB22001236",
    "estimatedCompletion": "2024-01-16T10:00:00Z",
    "originCity": "New York",
    "destinationCity": "London",
    "stages": [
      {"stage": 1, "name": "Payment Initiation", "status": "completed", "timestamp": "2024-01-15T16:10:00Z", "city": "New York"},
      {"stage": 2, "name": "Compliance Checks", "status": "completed", "timestamp": "2024-01-15T16:12:00Z", "city": "New York"},
      {"stage": 3, "name": "Formatting & Enrichment", "status": "completed", "timestamp": "2024-01-15T16:15:00Z", "city": "New York"},
      {"stage": 4, "name": "Routing Decision", "status": "completed", "timestamp": "2024-01-15T16:20:00Z", "city": "New York"},
      {"stage": 5, "name": "First Bank Processing", "status": "completed", "timestamp": "2024-01-15T16:25:00Z", "city": "New York"},
      {"stage": 6, "name": "Intermediary Bank 1", "status": "current", "timestamp": "2024-01-15T16:55:00Z", "city": "Delhi"}
    ]
  }
];

// City metrics data
const cityMetrics = {
  "totalPayments": {"Beijing": 156, "Delhi": 234, "London": 189, "New York": 321},
  "totalValue": {"Beijing": 45600000, "Delhi": 67800000, "London": 78900000, "New York": 123400000},
  "inProgress": {"Beijing": 12, "Delhi": 18, "London": 15, "New York": 25},
  "failed": {"Beijing": 3, "Delhi": 7, "London": 4, "New York": 9}
};

// Stage definitions with sub-stages
const stageDefinitions = {
  1: {
    name: "Payment Initiation",
    subStages: ["Request Validation", "Account Verification", "Amount Check"]
  },
  2: {
    name: "Compliance Checks",
    subStages: ["AML Screening", "Sanctions Check"]
  },
  3: {
    name: "Formatting & Enrichment",
    subStages: ["SWIFT Format", "Field Validation"]
  },
  4: {
    name: "Routing Decision",
    subStages: ["Path Selection", "Bank Selection", "Route Optimization"]
  },
  5: {
    name: "First Bank Processing",
    subStages: ["Queue Entry", "Initial Processing"]
  },
  6: {
    name: "Intermediary Bank 1",
    subStages: ["Receipt", "Validation", "Forward"]
  },
  7: {
    name: "Currency Conversion",
    subStages: ["Rate Application", "Amount Conversion"]
  },
  8: {
    name: "Intermediary Bank 2",
    subStages: ["Receipt", "Processing", "Forward"]
  },
  9: {
    name: "Beneficiary Bank Receipt",
    subStages: ["Message Receipt", "Initial Validation"]
  },
  10: {
    name: "Final Validation",
    subStages: ["Account Check", "Beneficiary Verification", "Limit Check"]
  },
  11: {
    name: "Settlement Preparation",
    subStages: ["Settlement Queue", "Pre-processing"]
  },
  12: {
    name: "Settlement Execution",
    subStages: ["Debit Source", "Credit Target", "Balance Update"]
  },
  13: {
    name: "Confirmation Generation",
    subStages: ["Receipt Creation", "Status Update"]
  },
  14: {
    name: "Notification Dispatch",
    subStages: ["Internal Notification", "Customer Notification", "Bank Notification"]
  },
  15: {
    name: "Reconciliation",
    subStages: ["Transaction Matching", "Record Update"]
  },
  16: {
    name: "Reporting & Audit",
    subStages: ["Transaction Logging", "Audit Trail", "Compliance Report"]
  },
  17: {
    name: "Completion",
    subStages: ["Final Status Update", "Archive"]
  }
};

class EnhancedPaymentDashboard {
  constructor() {
    this.filteredPayments = [...paymentsData];
    this.currentSection = 'dashboard';
    this.darkMode = false;
    this.charts = {};
    this.init();
  }

  init() {
    this.setupThemeToggle();
    this.setupNavigation();
    this.setupSearch();
    this.setupFilters();
    this.setupModals();
    this.setupForm();
    this.setupMetricCards();
    this.setupPaymentHistory();
    this.renderPayments();
    this.updateMetrics();
  }

  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
    
    this.setTheme(initialTheme);

    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.darkMode = !this.darkMode;
      const newTheme = this.darkMode ? 'dark' : 'light';
      this.setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  setTheme(theme) {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    if (theme === 'dark') {
      body.setAttribute('data-color-scheme', 'dark');
      this.darkMode = true;
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.classList.add('dark-mode');
      }
    } else {
      body.setAttribute('data-color-scheme', 'light');
      this.darkMode = false;
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.classList.remove('dark-mode');
      }
    }

    // Refresh charts if they exist
    setTimeout(() => {
      Object.values(this.charts).forEach(chart => {
        if (chart && typeof chart.update === 'function') {
          chart.update();
        }
      });
    }, 100);
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const breadcrumb = document.querySelector('.breadcrumb-item.current');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetSection = link.dataset.section;
        
        console.log('Navigating to:', targetSection);
        
        // Update active nav link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Hide all sections first
        sections.forEach(s => {
          s.classList.remove('active');
          s.style.display = 'none';
        });
        
        // Show target section
        const targetElement = document.getElementById(targetSection);
        if (targetElement) {
          targetElement.classList.add('active');
          targetElement.style.display = 'block';
          this.currentSection = targetSection;
          
          // Update breadcrumb
          const sectionNames = {
            'dashboard': 'Dashboard',
            'new-payment': 'New Payment',
            'payment-history': 'Payment History',
            'reports': 'Reports'
          };
          if (breadcrumb) {
            breadcrumb.textContent = sectionNames[targetSection];
          }
          
          // Handle section-specific logic
          if (targetSection === 'dashboard') {
            this.renderPayments();
          } else if (targetSection === 'payment-history') {
            this.renderPaymentHistory();
          } else if (targetSection === 'reports') {
            setTimeout(() => this.initializeReports(), 100);
          }
        }
      });
    });
  }

  setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        e.stopPropagation();
        this.filterPayments();
      });
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.stopPropagation();
          this.filterPayments();
        }
      });
    }
  }

  setupFilters() {
    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) {
      statusFilter.addEventListener('change', (e) => {
        e.stopPropagation();
        this.filterPayments();
      });
    }
  }

  setupMetricCards() {
    const metricCards = document.querySelectorAll('.metric-card.clickable');
    metricCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const metric = card.dataset.metric;
        console.log('Clicked metric card:', metric);
        this.showCityBreakdown(metric);
      });
    });
  }

  showCityBreakdown(metricType) {
    const modal = document.getElementById('city-breakdown-modal');
    const title = document.getElementById('breakdown-title');
    const content = document.getElementById('city-breakdown-content');
    
    if (!modal || !title || !content) {
      console.error('City breakdown modal elements not found');
      return;
    }

    const metricTitles = {
      'totalPayments': 'Total Payments by City',
      'totalValue': 'Total Value by City', 
      'inProgress': 'In Progress Payments by City',
      'failed': 'Failed Payments by City'
    };

    title.textContent = metricTitles[metricType] || 'City Breakdown';
    
    const cities = ['Beijing', 'Delhi', 'London', 'New York'];
    content.innerHTML = cities.map(city => {
      const value = cityMetrics[metricType][city];
      const formattedValue = metricType === 'totalValue' 
        ? this.formatCurrency(value, 'USD')
        : value.toString();
      
      return `
        <div class="city-card">
          <div class="city-name">${city}</div>
          <div class="city-value">${formattedValue}</div>
          <a href="#" class="city-details-link" data-city="${city}" data-metric="${metricType}">
            <i class="fas fa-eye"></i>
            View Payment Details
          </a>
        </div>
      `;
    }).join('');

    // Add click listeners to city detail links
    content.querySelectorAll('.city-details-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const city = link.dataset.city;
        const metric = link.dataset.metric;
        alert(`Showing ${metricTitles[metric]} details for ${city}`);
      });
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  setupModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
      const closeButtons = modal.querySelectorAll('.modal-close, .modal-overlay');
      closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          modal.classList.add('hidden');
          document.body.style.overflow = 'auto';
        });
      });
    });

    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modals.forEach(modal => {
          if (!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
          }
        });
      }
    });
  }

  setupPaymentHistory() {
    // Date range filters
    const dateFilters = document.querySelectorAll('.date-filter');
    dateFilters.forEach(filter => {
      filter.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dateFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        this.filterPaymentHistory(filter.dataset.range);
      });
    });

    // Advanced filters
    const historyStatusFilter = document.getElementById('history-status-filter');
    const historyCurrencyFilter = document.getElementById('history-currency-filter');
    
    if (historyStatusFilter) {
      historyStatusFilter.addEventListener('change', (e) => {
        e.stopPropagation();
        this.renderPaymentHistory();
      });
    }
    
    if (historyCurrencyFilter) {
      historyCurrencyFilter.addEventListener('change', (e) => {
        e.stopPropagation();
        this.renderPaymentHistory();
      });
    }

    // Export functionality
    const exportBtn = document.getElementById('export-history');
    if (exportBtn) {
      exportBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.exportPaymentHistory();
      });
    }
  }

  filterPaymentHistory(range) {
    console.log('Filtering payment history for range:', range);
    this.renderPaymentHistory();
  }

  renderPaymentHistory() {
    const tbody = document.getElementById('history-tbody');
    const countEl = document.getElementById('history-count');
    const totalEl = document.getElementById('history-total');
    const successRateEl = document.getElementById('history-success-rate');
    
    if (!tbody) return;

    // For demo purposes, using the same data
    const historyData = [...paymentsData];
    
    tbody.innerHTML = historyData.map(payment => {
      const statusClass = payment.status.toLowerCase().replace(' ', '-');
      const formattedAmount = this.formatCurrency(payment.amount, payment.currency);
      const formattedDate = this.formatDate(payment.initiationDate);

      return `
        <tr>
          <td><code>${payment.paymentId}</code></td>
          <td><strong>${formattedAmount}</strong></td>
          <td>
            <div>
              <div style="font-weight: 500;">${payment.beneficiary}</div>
              <div style="font-size: 12px; color: var(--color-text-secondary);">${payment.beneficiaryBank}</div>
            </div>
          </td>
          <td>
            <span class="status-badge ${statusClass}">${payment.status}</span>
          </td>
          <td>${formattedDate}</td>
          <td>
            <button class="action-btn view-journey" data-payment-id="${payment.paymentId}">
              View Journey
            </button>
          </td>
        </tr>
      `;
    }).join('');

    // Update summary stats
    const totalValue = historyData.reduce((sum, p) => sum + p.amount, 0);
    const successCount = historyData.filter(p => p.status === 'Success').length;
    const successRate = historyData.length > 0 ? (successCount / historyData.length * 100).toFixed(1) : '0';

    if (countEl) countEl.textContent = historyData.length.toString();
    if (totalEl) totalEl.textContent = this.formatCurrency(totalValue, 'USD');
    if (successRateEl) successRateEl.textContent = `${successRate}%`;

    // Add click listeners to view journey buttons
    document.querySelectorAll('.view-journey').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const paymentId = btn.dataset.paymentId;
        console.log('Viewing journey for payment:', paymentId);
        this.showPaymentJourney(paymentId);
      });
    });
  }

  exportPaymentHistory() {
    // Simulate CSV export
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Payment ID,Amount,Currency,Beneficiary,Status,Date\n"
      + paymentsData.map(p => 
          `${p.paymentId},${p.amount},${p.currency},${p.beneficiary},${p.status},${p.initiationDate}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "payment_history.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  filterPayments() {
    const searchInput = document.getElementById('search-input');
    const statusFilter = document.getElementById('status-filter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const statusFilterValue = statusFilter ? statusFilter.value : '';

    this.filteredPayments = paymentsData.filter(payment => {
      const matchesSearch = !searchTerm || 
        payment.paymentId.toLowerCase().includes(searchTerm) ||
        payment.beneficiary.toLowerCase().includes(searchTerm) ||
        payment.beneficiaryBank.toLowerCase().includes(searchTerm);
      
      const matchesStatus = !statusFilterValue || payment.status === statusFilterValue;
      
      return matchesSearch && matchesStatus;
    });

    this.renderPayments();
  }

  renderPayments() {
    const tbody = document.getElementById('payments-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    if (this.filteredPayments.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
            No payments found matching your criteria
          </td>
        </tr>
      `;
      return;
    }

    this.filteredPayments.forEach(payment => {
      const row = document.createElement('tr');
      row.innerHTML = this.createPaymentRow(payment);
      tbody.appendChild(row);
    });

    // Add click listeners to view journey buttons
    document.querySelectorAll('.view-payment').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const paymentId = btn.dataset.paymentId;
        console.log('Viewing payment journey for:', paymentId);
        this.showPaymentJourney(paymentId);
      });
    });
  }

  createPaymentRow(payment) {
    const statusClass = payment.status.toLowerCase().replace(' ', '-');
    const formattedAmount = this.formatCurrency(payment.amount, payment.currency);
    const formattedDate = this.formatDate(payment.initiationDate);

    return `
      <td><code>${payment.paymentId}</code></td>
      <td><strong>${formattedAmount}</strong></td>
      <td>
        <div>
          <div style="font-weight: 500;">${payment.beneficiary}</div>
          <div style="font-size: 12px; color: var(--color-text-secondary);">${payment.beneficiaryBank}</div>
        </div>
      </td>
      <td>
        <span class="status-badge ${statusClass}">${payment.status}</span>
      </td>
      <td>
        <div class="progress-indicator">
          ${payment.status === 'In Progress' ? '<div class="progress-dot"></div>' : ''}
          <span>${payment.currentStage}</span>
        </div>
      </td>
      <td>${formattedDate}</td>
      <td>
        <button class="action-btn view-payment" data-payment-id="${payment.paymentId}">
          View Journey
        </button>
      </td>
    `;
  }

  showPaymentJourney(paymentId) {
    const payment = paymentsData.find(p => p.paymentId === paymentId);
    if (!payment) {
      console.error('Payment not found:', paymentId);
      return;
    }

    const modal = document.getElementById('payment-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) {
      console.error('Payment modal elements not found');
      return;
    }

    console.log('Showing payment journey for:', payment.paymentId);
    modalBody.innerHTML = this.createPaymentJourneyHTML(payment);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Add click listeners to stage cards with a small delay to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll('.stage-card').forEach(card => {
        card.addEventListener('click', (e) => {
          e.stopPropagation();
          const stageNum = parseInt(card.dataset.stage);
          console.log('Clicked stage:', stageNum);
          this.showStageDetails(payment, stageNum);
        });
      });
    }, 100);
  }

  createPaymentJourneyHTML(payment) {
    const cityRoute = this.createCityRoute(payment);
    const stagesHTML = this.createStagesHTML(payment);

    return `
      <div class="payment-journey">
        <div class="journey-header">
          <div class="journey-info">
            <div class="journey-info-label">Payment ID</div>
            <div class="journey-info-value">${payment.paymentId}</div>
          </div>
          <div class="journey-info">
            <div class="journey-info-label">Amount</div>
            <div class="journey-info-value">${this.formatCurrency(payment.amount, payment.currency)}</div>
          </div>
          <div class="journey-info">
            <div class="journey-info-label">Beneficiary</div>
            <div class="journey-info-value">${payment.beneficiary}</div>
          </div>
          <div class="journey-info">
            <div class="journey-info-label">Status</div>
            <div class="journey-info-value">
              <span class="status-badge ${payment.status.toLowerCase().replace(' ', '-')}">${payment.status}</span>
            </div>
          </div>
        </div>

        ${cityRoute}

        <div class="stages-container">
          ${stagesHTML}
        </div>
      </div>
    `;
  }

  createCityRoute(payment) {
    const cities = [payment.originCity];
    if (payment.originCity !== 'Delhi') cities.push('Delhi');
    if (payment.originCity !== 'London' && payment.destinationCity !== 'London') cities.push('London');
    if (payment.destinationCity !== cities[cities.length - 1]) cities.push(payment.destinationCity);

    return `
      <div class="city-route">
        ${cities.map((city, index) => `
          <div class="city-node">
            <div class="city-icon">${city.substring(0, 2).toUpperCase()}</div>
            <div class="city-name">${city}</div>
          </div>
          ${index < cities.length - 1 ? '<i class="fas fa-arrow-right route-arrow"></i>' : ''}
        `).join('')}
      </div>
    `;
  }

  createStagesHTML(payment) {
    return Array.from({length: 17}, (_, i) => i + 1).map(stageNum => {
      const stageDef = stageDefinitions[stageNum];
      const paymentStage = payment.stages.find(s => s.stage === stageNum);
      
      let status = 'pending';
      let timestamp = null;
      let city = payment.originCity;
      let errorMsg = null;

      if (paymentStage) {
        status = paymentStage.status;
        timestamp = paymentStage.timestamp;
        city = paymentStage.city;
        errorMsg = paymentStage.error;
      } else if (payment.status === 'In Progress' && stageNum === payment.stages.length + 1) {
        status = 'current';
      }

      const subStagesHTML = stageDef.subStages.map((subStage, index) => {
        let subStatus = 'pending';
        if (status === 'completed') {
          subStatus = 'completed';
        } else if (status === 'current' && index === 0) {
          subStatus = 'current';
        } else if (status === 'failed') {
          subStatus = index === 0 ? 'failed' : 'pending';
        }

        return `
          <div class="sub-stage">
            <div class="sub-stage-dot ${subStatus}"></div>
            <span>${subStage}</span>
          </div>
        `;
      }).join('');

      return `
        <div class="stage-card ${status}" data-stage="${stageNum}">
          <div class="stage-number">${stageNum}</div>
          <div class="stage-title">${stageDef.name}</div>
          <div class="stage-city"><i class="fas fa-map-marker-alt"></i> ${city}</div>
          ${timestamp ? `<div class="stage-time">${this.formatDateTime(timestamp)}</div>` : ''}
          ${errorMsg ? `<div class="stage-error" style="color: var(--color-error); font-size: var(--font-size-xs); margin-top: var(--space-4);">${errorMsg}</div>` : ''}
          <div class="stage-status ${status}">
            <i class="fas fa-${status === 'completed' ? 'check-circle' : status === 'current' ? 'clock' : status === 'failed' ? 'times-circle' : 'circle'}"></i>
            ${status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
          <div class="sub-stages">
            ${subStagesHTML}
          </div>
        </div>
      `;
    }).join('');
  }

  showStageDetails(payment, stageNum) {
    const stageDef = stageDefinitions[stageNum];
    const paymentStage = payment.stages.find(s => s.stage === stageNum);
    
    const modal = document.getElementById('stage-modal');
    const title = document.getElementById('stage-title');
    const body = document.getElementById('stage-body');
    
    if (!modal || !title || !body) {
      console.error('Stage modal elements not found');
      return;
    }

    console.log('Showing details for stage:', stageNum);
    title.textContent = `Stage ${stageNum}: ${stageDef.name}`;
    
    body.innerHTML = `
      <div class="stage-details">
        <div class="detail-row">
          <span class="detail-label">Stage:</span>
          <span class="detail-value">${stageNum} of 17</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Status:</span>
          <span class="detail-value">
            <span class="status-badge ${paymentStage ? paymentStage.status : 'pending'}">
              ${paymentStage ? paymentStage.status.charAt(0).toUpperCase() + paymentStage.status.slice(1) : 'Pending'}
            </span>
          </span>
        </div>
        <div class="detail-row">
          <span class="detail-label">City:</span>
          <span class="detail-value">${paymentStage ? paymentStage.city : payment.originCity}</span>
        </div>
        ${paymentStage && paymentStage.timestamp ? `
          <div class="detail-row">
            <span class="detail-label">Timestamp:</span>
            <span class="detail-value">${this.formatDateTime(paymentStage.timestamp)}</span>
          </div>
        ` : ''}
        ${paymentStage && paymentStage.error ? `
          <div class="detail-row">
            <span class="detail-label">Error:</span>
            <span class="detail-value" style="color: var(--color-error);">${paymentStage.error}</span>
          </div>
        ` : ''}
        
        <h4 style="margin: 20px 0 12px 0;">Sub-stages:</h4>
        <div class="sub-stages">
          ${stageDef.subStages.map((subStage, index) => {
            let subStatus = 'pending';
            if (paymentStage && paymentStage.status === 'completed') {
              subStatus = 'completed';
            } else if (paymentStage && paymentStage.status === 'current' && index === 0) {
              subStatus = 'current';
            } else if (paymentStage && paymentStage.status === 'failed') {
              subStatus = index === 0 ? 'failed' : 'pending';
            }
            
            return `
              <div class="sub-stage">
                <div class="sub-stage-dot ${subStatus}"></div>
                <span>${subStage}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  setupForm() {
    const form = document.getElementById('payment-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      alert('Payment initiated successfully! You will be redirected to the dashboard.');
      
      // Switch to dashboard
      const dashboardLink = document.querySelector('[data-section="dashboard"]');
      if (dashboardLink) {
        dashboardLink.click();
      }
      
      form.reset();
    });
  }

  updateMetrics() {
    // Calculate metrics from city data
    const totalPayments = Object.values(cityMetrics.totalPayments).reduce((a, b) => a + b, 0);
    const totalValue = Object.values(cityMetrics.totalValue).reduce((a, b) => a + b, 0);
    const inProgress = Object.values(cityMetrics.inProgress).reduce((a, b) => a + b, 0);
    const failed = Object.values(cityMetrics.failed).reduce((a, b) => a + b, 0);

    // Update the metric values in the DOM
    const totalPaymentsEl = document.getElementById('total-payments-value');
    const totalValueEl = document.getElementById('total-value-value');
    const inProgressEl = document.getElementById('in-progress-value');
    const failedEl = document.getElementById('failed-value');

    if (totalPaymentsEl) totalPaymentsEl.textContent = totalPayments.toString();
    if (totalValueEl) totalValueEl.textContent = this.formatCurrency(totalValue, 'USD');
    if (inProgressEl) inProgressEl.textContent = inProgress.toString();
    if (failedEl) failedEl.textContent = failed.toString();
  }

  initializeReports() {
    console.log('Initializing reports for section:', this.currentSection);
    // Only initialize charts when reports section is active
    if (this.currentSection !== 'reports') return;

    // Clear existing charts
    Object.values(this.charts).forEach(chart => {
      if (chart && typeof chart.destroy === 'function') {
        chart.destroy();
      }
    });
    this.charts = {};

    setTimeout(() => {
      this.createVolumeChart();
      this.createSuccessRateChart();
      this.createCityPerformanceChart();
      this.createProcessingTimeChart();
      this.createFailureAnalysisChart();
    }, 200);
  }

  createVolumeChart() {
    const ctx = document.getElementById('volume-chart');
    if (!ctx || this.charts.volume) return;

    try {
      this.charts.volume = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          datasets: [{
            label: 'Payment Volume',
            data: [65, 78, 90, 81, 96, 108, 134, 142],
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } catch (error) {
      console.error('Error creating volume chart:', error);
    }
  }

  createSuccessRateChart() {
    const ctx = document.getElementById('success-rate-chart');
    if (!ctx || this.charts.successRate) return;

    try {
      this.charts.successRate = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Beijing-NY', 'London-Delhi', 'NY-London', 'Delhi-Beijing'],
          datasets: [{
            label: 'Success Rate %',
            data: [97.4, 95.8, 98.2, 94.6],
            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100
            }
          }
        }
      });
    } catch (error) {
      console.error('Error creating success rate chart:', error);
    }
  }

  createCityPerformanceChart() {
    const ctx = document.getElementById('city-performance-chart');
    if (!ctx || this.charts.cityPerformance) return;

    try {
      this.charts.cityPerformance = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Beijing', 'Delhi', 'London', 'New York'],
          datasets: [{
            data: [156, 234, 189, 321],
            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    } catch (error) {
      console.error('Error creating city performance chart:', error);
    }
  }

  createProcessingTimeChart() {
    const ctx = document.getElementById('processing-time-chart');
    if (!ctx || this.charts.processingTime) return;

    try {
      this.charts.processingTime = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Stage 1-5', 'Stage 6-10', 'Stage 11-15', 'Stage 16-17'],
          datasets: [{
            label: 'Average Time (minutes)',
            data: [45, 120, 85, 25],
            backgroundColor: '#5D878F'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } catch (error) {
      console.error('Error creating processing time chart:', error);
    }
  }

  createFailureAnalysisChart() {
    const ctx = document.getElementById('failure-analysis-chart');
    if (!ctx || this.charts.failureAnalysis) return;

    try {
      this.charts.failureAnalysis = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Insufficient Funds', 'Invalid Account', 'Network Timeout', 'Compliance Issues', 'Other'],
          datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: ['#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    } catch (error) {
      console.error('Error creating failure analysis chart:', error);
    }
  }

  formatCurrency(amount, currency) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  formatDateTime(dateString) {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }
}

// Initialize the enhanced dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing enhanced dashboard...');
  
  // Initialize dashboard
  const dashboard = new EnhancedPaymentDashboard();
  
  // Ensure dashboard is visible by default
  const dashboardSection = document.getElementById('dashboard');
  const otherSections = document.querySelectorAll('.content-section:not(#dashboard)');
  
  if (dashboardSection) {
    dashboardSection.classList.add('active');
    dashboardSection.style.display = 'block';
  }
  
  otherSections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });
  
  // Add smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth';
  
  console.log('Enhanced dashboard initialized successfully');
});