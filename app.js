// Payment data
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
    "swiftReference": "FT24015CHASUS33001234"
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
    "currentStage": "Failed at Correspondent Bank",
    "swiftReference": "FT24015DEUTDEFF001235"
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
    "estimatedCompletion": "2024-01-16T10:00:00Z"
  },
  {
    "paymentId": "PAY-2024-001237",
    "amount": 950000,
    "currency": "USD",
    "beneficiary": "Tech Solutions Inc",
    "beneficiaryBank": "Bank of America NA",
    "swiftCode": "BOFAUS3N",
    "status": "In Progress",
    "initiationDate": "2024-01-15T17:45:00Z",
    "currentStage": "Awaiting SWIFT Confirmation",
    "swiftReference": "FT24015BOFAUS3N001237",
    "estimatedCompletion": "2024-01-16T08:30:00Z"
  },
  {
    "paymentId": "PAY-2024-001238",
    "amount": 4100000,
    "currency": "USD",
    "beneficiary": "Global Energy Partners",
    "beneficiaryBank": "Wells Fargo Bank NA",
    "swiftCode": "WFBIUS6S",
    "status": "Success",
    "initiationDate": "2024-01-14T11:15:00Z",
    "completionDate": "2024-01-14T13:22:00Z",
    "currentStage": "Completed",
    "swiftReference": "FT24014WFBIUS6S001238"
  }
];

class PaymentDashboard {
  constructor() {
    this.filteredPayments = [...paymentsData];
    this.currentSection = 'dashboard';
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupSearch();
    this.setupFilters();
    this.setupModal();
    this.setupForm();
    this.renderPayments();
    this.updateMetrics();
    this.setupSWIFTTracker();
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const breadcrumb = document.querySelector('.breadcrumb-item.current');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = link.dataset.section;
        
        console.log('Navigating to:', targetSection); // Debug log
        
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
            'swift-tracker': 'SWIFT Tracker',
            'reports': 'Reports',
            'settings': 'Settings'
          };
          breadcrumb.textContent = sectionNames[targetSection];
          
          // Re-render payments if navigating back to dashboard
          if (targetSection === 'dashboard') {
            this.renderPayments();
          }
        }
      });
    });
  }

  setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        console.log('Search triggered:', e.target.value); // Debug log
        this.filterPayments();
      });
      
      // Also trigger on Enter key
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.filterPayments();
        }
      });
    }
  }

  setupFilters() {
    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) {
      statusFilter.addEventListener('change', (e) => {
        console.log('Filter triggered:', e.target.value); // Debug log
        this.filterPayments();
      });
    }
  }

  filterPayments() {
    const searchInput = document.getElementById('search-input');
    const statusFilter = document.getElementById('status-filter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const statusFilterValue = statusFilter ? statusFilter.value : '';

    console.log('Filtering with:', searchTerm, statusFilterValue); // Debug log

    this.filteredPayments = paymentsData.filter(payment => {
      const matchesSearch = !searchTerm || 
        payment.paymentId.toLowerCase().includes(searchTerm) ||
        payment.beneficiary.toLowerCase().includes(searchTerm) ||
        payment.beneficiaryBank.toLowerCase().includes(searchTerm) ||
        payment.swiftCode.toLowerCase().includes(searchTerm);
      
      const matchesStatus = !statusFilterValue || payment.status === statusFilterValue;
      
      return matchesSearch && matchesStatus;
    });

    console.log('Filtered results:', this.filteredPayments.length); // Debug log
    this.renderPayments();
  }

  renderPayments() {
    const tbody = document.getElementById('payments-tbody');
    if (!tbody) {
      console.error('Could not find payments tbody element');
      return;
    }
    
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

    // Add click listeners to view buttons
    document.querySelectorAll('.view-payment').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const paymentId = btn.dataset.paymentId;
        console.log('Viewing payment:', paymentId); // Debug log
        this.showPaymentDetails(paymentId);
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
          View Details
        </button>
      </td>
    `;
  }

  setupModal() {
    const modal = document.getElementById('payment-modal');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');

    if (!modal || !modalClose || !modalOverlay) {
      console.error('Modal elements not found');
      return;
    }

    const closeModal = () => {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    const openModal = () => {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });

    this.openModal = openModal;
    this.closeModal = closeModal;
  }

  showPaymentDetails(paymentId) {
    const payment = paymentsData.find(p => p.paymentId === paymentId);
    if (!payment) {
      console.error('Payment not found:', paymentId);
      return;
    }

    const modalBody = document.getElementById('modal-body');
    if (!modalBody) {
      console.error('Modal body not found');
      return;
    }

    modalBody.innerHTML = this.createPaymentDetailsHTML(payment);
    this.openModal();
  }

  createPaymentDetailsHTML(payment) {
    const statusClass = payment.status.toLowerCase().replace(' ', '-');
    const timeline = this.createPaymentTimeline(payment);

    return `
      <div class="payment-details">
        <div class="detail-row">
          <span class="detail-label">Payment ID:</span>
          <span class="detail-value"><code>${payment.paymentId}</code></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Amount:</span>
          <span class="detail-value amount-display">${this.formatCurrency(payment.amount, payment.currency)}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Status:</span>
          <span class="detail-value"><span class="status-badge ${statusClass}">${payment.status}</span></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Beneficiary:</span>
          <span class="detail-value">${payment.beneficiary}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Beneficiary Bank:</span>
          <span class="detail-value">${payment.beneficiaryBank}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">SWIFT Code:</span>
          <span class="detail-value"><code>${payment.swiftCode}</code></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">SWIFT Reference:</span>
          <span class="detail-value"><code>${payment.swiftReference}</code></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Initiated:</span>
          <span class="detail-value">${this.formatDateTime(payment.initiationDate)}</span>
        </div>
        ${payment.completionDate ? `
          <div class="detail-row">
            <span class="detail-label">Completed:</span>
            <span class="detail-value">${this.formatDateTime(payment.completionDate)}</span>
          </div>
        ` : ''}
        ${payment.estimatedCompletion ? `
          <div class="detail-row">
            <span class="detail-label">Est. Completion:</span>
            <span class="detail-value">${this.formatDateTime(payment.estimatedCompletion)}</span>
          </div>
        ` : ''}
        ${payment.failureReason ? `
          <div class="detail-row">
            <span class="detail-label">Failure Reason:</span>
            <span class="detail-value" style="color: var(--color-error);">${payment.failureReason}</span>
          </div>
        ` : ''}
      </div>
      
      <h4 style="margin: 24px 0 16px 0;">Payment Timeline</h4>
      ${timeline}
    `;
  }

  createPaymentTimeline(payment) {
    let timelineItems = [];

    // Add standard timeline items based on status
    if (payment.status === 'Success') {
      timelineItems = [
        { title: 'Payment Initiated', time: payment.initiationDate, status: 'completed' },
        { title: 'SWIFT Message Sent', time: payment.initiationDate, status: 'completed' },
        { title: 'Processing at Intermediary Bank', time: payment.initiationDate, status: 'completed' },
        { title: 'Funds Transferred', time: payment.completionDate, status: 'completed' },
        { title: 'Payment Completed', time: payment.completionDate, status: 'completed' }
      ];
    } else if (payment.status === 'Failed') {
      timelineItems = [
        { title: 'Payment Initiated', time: payment.initiationDate, status: 'completed' },
        { title: 'SWIFT Message Sent', time: payment.initiationDate, status: 'completed' },
        { title: 'Processing Failed', time: payment.initiationDate, status: 'failed' }
      ];
    } else if (payment.status === 'In Progress') {
      if (payment.currentStage === 'Awaiting SWIFT Confirmation') {
        timelineItems = [
          { title: 'Payment Initiated', time: payment.initiationDate, status: 'completed' },
          { title: 'Awaiting SWIFT Confirmation', time: null, status: 'current' },
          { title: 'Processing at Intermediary Bank', time: null, status: 'pending' },
          { title: 'Payment Completion', time: null, status: 'pending' }
        ];
      } else {
        timelineItems = [
          { title: 'Payment Initiated', time: payment.initiationDate, status: 'completed' },
          { title: 'SWIFT Message Sent', time: payment.initiationDate, status: 'completed' },
          { title: 'Processing at Intermediary Bank', time: null, status: 'current' },
          { title: 'Payment Completion', time: null, status: 'pending' }
        ];
      }
    }

    return `
      <div class="payment-timeline">
        ${timelineItems.map(item => `
          <div class="timeline-item">
            <div class="timeline-dot ${item.status}"></div>
            <div class="timeline-content">
              <div class="timeline-title">${item.title}</div>
              ${item.time ? `<div class="timeline-time">${this.formatDateTime(item.time)}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  setupForm() {
    const form = document.getElementById('payment-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const paymentData = {
        amount: formData.get('amount'),
        currency: formData.get('currency'),
        beneficiary: formData.get('beneficiary'),
        beneficiaryBank: formData.get('beneficiaryBank'),
        swiftCode: formData.get('swiftCode'),
        purpose: formData.get('purpose')
      };
      
      // Validate required fields
      if (!paymentData.amount || !paymentData.currency || !paymentData.beneficiary) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Simulate form submission
      alert('Payment initiated successfully! You will be redirected to the dashboard.');
      
      // Switch to dashboard
      const dashboardLink = document.querySelector('[data-section="dashboard"]');
      if (dashboardLink) {
        dashboardLink.click();
      }
      
      // Reset form
      form.reset();
    });
  }

  setupSWIFTTracker() {
    // Generate SWIFT details for the tracker section
    const swiftDetails = document.getElementById('swift-details');
    if (!swiftDetails) return;
    
    const samplePayment = paymentsData[0]; // Use first payment as sample
    
    swiftDetails.innerHTML = `
      <h3>SWIFT Message Details</h3>
      <div class="payment-details">
        <div class="detail-row">
          <span class="detail-label">Reference:</span>
          <span class="detail-value"><code>${samplePayment.swiftReference}</code></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Message Type:</span>
          <span class="detail-value">MT103 - Single Customer Credit Transfer</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Sender:</span>
          <span class="detail-value">CORPBANKXX</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Receiver:</span>
          <span class="detail-value">${samplePayment.swiftCode}</span>
        </div>
      </div>
      
      <h4 style="margin: 24px 0 12px 0;">SWIFT Message Content</h4>
      <div class="swift-message">{1:F01CORPBANKXX0000000000}{2:I103${samplePayment.swiftCode}N}{3:{108:${samplePayment.swiftReference}}}{4:
:20:${samplePayment.paymentId}
:23B:CRED
:32A:${this.formatSWIFTDate(samplePayment.initiationDate)}${samplePayment.currency}${samplePayment.amount.toFixed(2)}
:50K:Corporate Banking Ltd
123 Banking Street
New York, NY 10001
:59:/${samplePayment.beneficiary}
${samplePayment.beneficiaryBank}
:70:Payment for services rendered
:71A:SHA
-}</div>
    `;
  }

  updateMetrics() {
    // Update metric values with actual data
    const totalPayments = paymentsData.length;
    const totalValue = paymentsData.reduce((sum, payment) => {
      // Convert all to USD for simplification
      let usdAmount = payment.amount;
      if (payment.currency === 'EUR') usdAmount *= 1.1;
      if (payment.currency === 'GBP') usdAmount *= 1.25;
      return sum + usdAmount;
    }, 0);
    
    const inProgress = paymentsData.filter(p => p.status === 'In Progress').length;
    const failed = paymentsData.filter(p => p.status === 'Failed').length;
    const success = paymentsData.filter(p => p.status === 'Success').length;

    // Update the metric values in the DOM
    const metricCards = document.querySelectorAll('.metric-card');
    if (metricCards.length >= 4) {
      metricCards[0].querySelector('.metric-value').textContent = totalPayments.toString();
      metricCards[1].querySelector('.metric-value').textContent = this.formatCurrency(totalValue, 'USD');
      metricCards[2].querySelector('.metric-value').textContent = inProgress.toString();
      metricCards[3].querySelector('.metric-value').textContent = failed.toString();
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

  formatSWIFTDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }
}

// Global dashboard instance
let dashboardInstance;

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing dashboard...');
  dashboardInstance = new PaymentDashboard();
  
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
  
  // Add smooth scrolling for better UX
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Alt + D for Dashboard
    if (e.altKey && e.key === 'd') {
      e.preventDefault();
      document.querySelector('[data-section="dashboard"]').click();
    }
    // Alt + N for New Payment
    if (e.altKey && e.key === 'n') {
      e.preventDefault();
      document.querySelector('[data-section="new-payment"]').click();
    }
    // Alt + S for SWIFT Tracker
    if (e.altKey && e.key === 's') {
      e.preventDefault();
      document.querySelector('[data-section="swift-tracker"]').click();
    }
  });
});