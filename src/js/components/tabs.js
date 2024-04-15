import GraphTabs from 'graph-tabs';

const tabs_1 = new GraphTabs('popup-1', {
	isChanged: (tabs) => {

		tabs.tabsBtns.forEach(el => {
      if (el.classList.contains('tabs__nav-btn--disabled')) {
        el.classList.remove('tabs__nav-btn--active');
        el.setAttribute('tabindex', '-1');
      }
    });
	}
});

const tabs_2 = new GraphTabs('popup-2', {
	isChanged: (tabs) => {

		tabs.tabsBtns.forEach(el => {
      if (el.classList.contains('tabs__nav-btn--disabled')) {
        el.classList.remove('tabs__nav-btn--active');
        el.setAttribute('tabindex', '-1');
      }
    });
	}
});

const tabs_3 = new GraphTabs('popup-3', {
	isChanged: (tabs) => {

		tabs.tabsBtns.forEach(el => {
      if (el.classList.contains('tabs__nav-btn--disabled')) {
        el.classList.remove('tabs__nav-btn--active');
        el.setAttribute('tabindex', '-1');
      }
    });
	}
});

const tabs_4 = new GraphTabs('popup-4', {
	isChanged: (tabs) => {

		tabs.tabsBtns.forEach(el => {
      if (el.classList.contains('tabs__nav-btn--disabled')) {
        el.classList.remove('tabs__nav-btn--active');
        el.setAttribute('tabindex', '-1');
      }
    });
	}
});

const tabs_5 = new GraphTabs('popup-5', {
	isChanged: (tabs) => {

		tabs.tabsBtns.forEach(el => {
      if (el.classList.contains('tabs__nav-btn--disabled')) {
        el.classList.remove('tabs__nav-btn--active');
        el.setAttribute('tabindex', '-1');
      }
    });
	}
});

