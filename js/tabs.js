(() => {
  const firstParams = {
    tabsbtnClass: "js-tab-btn",
    wrap: "js-tabs-wrap",
    content: "js-tab-content",
    active: "active"
  };

  function setTabs(params) {
    const tabBtns = document.querySelectorAll(`.${params.tabsbtnClass}`);

    function onTabClick(e) {
      const path = e.target.dataset.path;
      const wrap = e.target.closest(`.${params.wrap}`);
      const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
      const contents = wrap.querySelectorAll(`.${params.content}`);

      contents.forEach((el) => {
        el.classList.remove(params.active);
      });

      currentContent.classList.add(params.active);

      tabBtns.forEach((el) => {
        el.classList.remove(params.active);
      });

      this.classList.add(params.active);
    }

    tabBtns.forEach(function (el) {
      el.addEventListener("click", onTabClick);
    });
  }

  setTabs(firstParams);
})() ;
