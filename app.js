// Honeymoon Gift List JavaScript - Thiago & Juliana

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeAnimations();
    initializeInteractions();
    initializePixCopy();
    initializeModal();
});

// Initialize card animations with staggered delays
function initializeAnimations() {
    const cards = document.querySelectorAll('.experience-card');
    
    cards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });

    // Add intersection observer for smoother animations on scroll
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    }
}

// Initialize card interactions and hover effects
function initializeInteractions() {
    const cards = document.querySelectorAll('.experience-card');
    
    cards.forEach(card => {
        // Add smooth hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add smooth scroll behavior to any anchor links (but exclude external links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize modal functionality
function initializeModal() {
    const modal = document.getElementById('thankYouModal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalOkBtn = document.getElementById('modalOkBtn');
    const experienceCards = document.querySelectorAll('.experience-card');

    // Add click event to all experience cards ONLY
    experienceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Make sure we're not clicking on a link or button inside the card
            if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
                openModal();
            }
        });
    });

    // Close modal when clicking OK button
    modalOkBtn.addEventListener('click', function() {
        closeModal();
    });

    // Close modal when clicking overlay
    modalOverlay.addEventListener('click', function() {
        closeModal();
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Open modal function
    function openModal() {
        modal.classList.remove('hidden');
        // Small delay to ensure CSS transitions work properly
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        
        // Focus on the OK button for accessibility
        setTimeout(() => {
            modalOkBtn.focus();
        }, 300);
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove('show');
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Initialize PIX key copy functionality
function initializePixCopy() {
    const pixKeys = document.querySelectorAll('.pix-key, .modal-pix-key');
    
    pixKeys.forEach(pixKey => {
        // Make PIX key clickable
        pixKey.style.cursor = 'pointer';
        pixKey.title = 'Clique para copiar a chave PIX';
        
        // Add copy functionality
        pixKey.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent modal from opening if clicked in footer
            copyPixKey(this.textContent.trim());
        });

        // Add visual feedback on hover
        pixKey.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
        });

        pixKey.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Ensure iCasei button works correctly
function initializeIcaseiButton() {
    const icaseiButton = document.querySelector('.btn-icasei');
    if (icaseiButton) {
        // Ensure the button opens in a new tab and doesn't trigger modal
        icaseiButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent any other event handlers
            // The href attribute will handle the navigation
            return true;
        });
    }
}

// Copy PIX key to clipboard
async function copyPixKey(pixKey) {
    try {
        await navigator.clipboard.writeText(pixKey);
        showCopyFeedback('Chave PIX copiada! ✓');
    } catch (err) {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(pixKey);
    }
}

// Fallback copy method for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyFeedback('Chave PIX copiada! ✓');
        } else {
            showCopyFeedback('Erro ao copiar. Tente selecionar manualmente.');
        }
    } catch (err) {
        showCopyFeedback('Erro ao copiar. Tente selecionar manualmente.');
    }

    document.body.removeChild(textArea);
}

// Show copy feedback to user
function showCopyFeedback(message) {
    // Remove any existing feedback first
    const existingFeedback = document.querySelector('.copy-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = 'copy-feedback';
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--color-accent-gold);
        color: var(--color-text-primary);
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 500;
        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
        z-index: 2000;
        animation: fadeInOut 2s ease-in-out forwards;
        pointer-events: none;
    `;

    // Add animation keyframes if not already present
    if (!document.querySelector('#copy-feedback-styles')) {
        const style = document.createElement('style');
        style.id = 'copy-feedback-styles';
        style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                20%, 80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(feedback);

    // Remove feedback after animation
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 2000);
}

// Initialize heart animation on scroll
function initializeHeartAnimation() {
    const heart = document.querySelector('.heart-decoration');
    if (heart) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heart.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.1}deg)`;
        });
    }
}

// Add loading animation
function addLoadingAnimation() {
    const body = document.body;
    body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        body.style.transition = 'opacity 0.5s ease-in-out';
        body.style.opacity = '1';
        // Initialize iCasei button after page loads
        initializeIcaseiButton();
    });
}

// Add category filtering functionality (optional enhancement)
function initializeCategoryFilter() {
    const categories = ['Todos', 'Passeios Românticos','Conforto', 'Gastronomia', 'Bem-Estar', 'Aventura','Cerimônia','Diversão','Serviço','Educação','Festa','Bem-Estar'];
    const filterContainer = document.createElement('div');
    filterContainer.className = 'category-filter';
    filterContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 12px;
        margin: 24px 0;
        flex-wrap: wrap;
    `;

    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = `filter-btn ${category === 'Todos' ? 'active' : ''}`;
        button.style.cssText = `
            padding: 8px 16px;
            background: transparent;
            border: 1px solid var(--color-border-light);
            border-radius: 20px;
            color: var(--color-text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
        `;

        button.addEventListener('click', (e) => {
            e.stopPropagation();
            filterByCategory(category, button);
        });
        filterContainer.appendChild(button);
    });

    // Insert filter before the grid
    const grid = document.querySelector('.experiences-grid');
    if (grid) {
        grid.parentNode.insertBefore(filterContainer, grid);
    }
}

// Filter cards by category
function filterByCategory(category, button) {
    const cards = document.querySelectorAll('.experience-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = 'transparent';
        btn.style.color = 'var(--color-text-secondary)';
    });
    
    button.classList.add('active');
    button.style.background = 'var(--color-accent-gold)';
    button.style.color = 'var(--color-text-primary)';

    // Filter cards
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (category === 'Todos' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize all enhancements
addLoadingAnimation();
initializeHeartAnimation();