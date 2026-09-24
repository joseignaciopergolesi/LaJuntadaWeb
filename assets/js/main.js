// =============================================================================
// La Juntada - Script de Interacciones Web Ligeras (Cero dependencias)
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú Móvil Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar al tocar cualquier enlace del menú móvil
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Acordeón de FAQ
  const faqButtons = document.querySelectorAll('.faq-toggle');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const icon = button.querySelector('.faq-icon');
      const isOpen = !content.classList.contains('hidden');

      // Cerrar otros acordeones abiertos
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.faq-content')?.classList.add('hidden');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (isOpen) {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // 3. Copiar Email de Sponsors al Portapapeles
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailTextEl = document.getElementById('sponsor-email-text');
  const copyFeedback = document.getElementById('copy-feedback');

  if (copyEmailBtn && emailTextEl) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = emailTextEl.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        if (copyFeedback) {
          copyFeedback.classList.remove('opacity-0', 'pointer-events-none');
          copyFeedback.classList.add('opacity-100');
          setTimeout(() => {
            copyFeedback.classList.remove('opacity-100');
            copyFeedback.classList.add('opacity-0', 'pointer-events-none');
          }, 2500);
        }
      } catch (err) {
        // Fallback básico si clipboard API falla
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        if (copyFeedback) {
          copyFeedback.classList.remove('opacity-0', 'pointer-events-none');
          copyFeedback.classList.add('opacity-100');
          setTimeout(() => {
            copyFeedback.classList.remove('opacity-100');
            copyFeedback.classList.add('opacity-0', 'pointer-events-none');
          }, 2500);
        }
      }
    });
  }

  // 4. Smooth Scroll para enlaces ancla
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
