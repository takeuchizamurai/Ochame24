document.addEventListener('DOMContentLoaded', () => {
    
    // 1. スクロール連動フェードイン（リッチな質感の演出）
    // IntersectionObserverを使い、要素が画面に入った瞬間にクラスを付与
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 一度発火したら監視を解除
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // 2. 言語切り替えロジック
    // 現在のURLパスから /ja/ と /en/ を置換してリダイレクト
    const langToggleBtn = document.getElementById('lang-toggle');
    
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentPath = window.location.pathname;
            
            if (currentPath.includes('/ja/')) {
                window.location.href = currentPath.replace('/ja/', '/en/');
            } else if (currentPath.includes('/en/')) {
                window.location.href = currentPath.replace('/en/', '/ja/');
            } else {
                // ルートにいる場合などのフォールバック
                window.location.href = '/en/';
            }
        });
    }
});