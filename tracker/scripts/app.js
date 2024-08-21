const HABIT_KEY = "HABIT_KEY";

let habits = [];
let globalActiveHabitId;

/* page */
const page = {
  menu: document.querySelector(".menu__list"),
  header: {
    h1: document.querySelector(".h1"),
    progressPercent: document.querySelector(".progress__percent"),
    progressCoverBar: document.querySelector(".progress__cover-bar"),
  },
  content: {
    habitWrapper: document.querySelector(".habbit__wrapper"),
    habitForm: document.querySelector(".habbit__form"),
    habitDay: document.querySelector(".habbit__day"),
  },
  popup: {
    index: document.querySelector(".cover"),
    iconField: document.querySelector(".popup__form [name=icon]"),
    form: document.querySelector(".popup__form"),
  },
};

/* utils */
function loadData() {
  const habitString = localStorage.getItem(HABIT_KEY);
  const habitArray = JSON.parse(habitString);

  if (Array.isArray(habitArray)) {
    habits = habitArray;
  }
}

function togglePopup() {
  page.popup.index.classList.toggle("cover_hidden");
}

function saveData() {
  localStorage.setItem(HABIT_KEY, JSON.stringify(habits));
}

function resetForm(form) {
  Object.values(form).forEach((element) => {
    element.value = "";
  });
}

function validateForm(form, fields) {
  const formData = new FormData(form);
  const res = {};

  fields.forEach((field) => {
    const value = formData.get(field);
    if (!value) {
      form[field].classList.add("error");
    } else {
      form[field].classList.remove("error");
    }
    res[field] = value;
  });

  let isValid = true;
  Object.values(res).forEach((value) => {
    if (!value) {
      isValid = false;
    }
  });

  if (!isValid) {
    return false;
  }

  return res;
}

/* render */
function renderMenu(activeHabit) {
  if (!activeHabit) {
    return;
  }

  for (const habit of habits) {
    const existed = document.querySelector(`[menu-habit-id="${habit.id}"]`);
    if (!existed) {
      const element = document.createElement("button");
      element.setAttribute("menu-habit-id", habit.id);
      element.classList.add("menu__item");

      element.addEventListener("click", () => rerender(habit.id));

      element.insertAdjacentHTML(
        "beforeend",
        `<img src="./assets/icons/${habit.icon}.svg" alt=${habit.name} />`
      );

      if (activeHabit.id === habit.id) {
        element.classList.add("menu__item_active");
      }

      page.menu.appendChild(element);

      continue;
    }
    if (activeHabit.id === habit.id) {
      existed.classList.add("menu__item_active");
    } else {
      existed.classList.remove("menu__item_active");
    }
  }
}

function renderHead(activeHabit) {
  if (!activeHabit) {
    return;
  }

  page.header.h1.innerText = activeHabit.name;
  const progress =
    activeHabit.days.length / activeHabit.target > 1
      ? 100
      : (activeHabit.days.length / activeHabit.target) * 100;

  page.header.progressPercent.innerText = `${progress.toFixed(0)}%`;
  page.header.progressCoverBar.style.width = `${progress}%`;
}

function renderContent(activeHabit) {
  page.content.habitWrapper.innerHTML = "";

  activeHabit.days.forEach((day, i) => {
    const element = document.createElement("div");
    element.classList.add("habbit");

    element.insertAdjacentHTML(
      "beforeend",
      `
        <div class="habbit__day">День ${i + 1}</div>
        <div class="habbit__comment">
          ${day.comment}
        </div>
        <button class="habbit__delete" day_id=${i} onclick=deleteDay(${i})>
          <img src="./assets/icons/delete.svg" alt="Удалить" />
        </button>
      `
    );

    page.content.habitWrapper.appendChild(element);
  });

  page.content.habitDay.innerText = `День ${activeHabit.days.length + 1}`;
}

function rerender(activeHabitId) {
  const activeHabit = habits.find((habit) => habit.id === activeHabitId);
  globalActiveHabitId = activeHabitId;

  if (!activeHabit) {
    return;
  }

  document.location.hash = activeHabit.id;

  renderMenu(activeHabit);
  renderHead(activeHabit);
  renderContent(activeHabit);
}

/* event */
function addDays(e) {
  e.preventDefault();
  const form = e.target;

  const { comment } = validateForm(form, ["comment"]);

  if (!comment) {
    return;
  }

  habits = habits.map((habit) => {
    return habit.id === globalActiveHabitId
      ? { ...habit, days: [...habit.days, { comment }] }
      : habit;
  });
  form.reset();

  rerender(globalActiveHabitId);
}

function addHabit(e) {
  e.preventDefault();

  const { name, target, icon } = validateForm(page.popup.form, [
    "name",
    "target",
    "icon",
  ]);
  if (!name || !target || !icon) {
    return;
  }

  const id = crypto.randomUUID();

  const newHabit = {
    id,
    name,
    target,
    icon,
    days: [],
  };

  page.popup.form.reset();
  habits = [...habits, newHabit];
  rerender(id);
  togglePopup();
  saveData();
}

function deleteDay(index) {
  habits = habits.map((habit) => {
    return habit.id === globalActiveHabitId
      ? { ...habit, days: habit.days.filter((_, i) => index !== i) }
      : habit;
  });

  rerender(globalActiveHabitId);
  saveData();
}

function selectIcon(context, icon) {
  page.popup.iconField.value = icon;
  const activeIcon = document.querySelector(".icon.icon_active");
  activeIcon.classList.remove("icon_active");
  context.classList.add("icon_active");
}

/* init */
(() => {
  loadData();
  const hash = document.location.hash.slice(1);
  const habit = habits.find((habit) => habit.id == hash);

  console.log(habit);

  if (habit) {
    rerender(habit.id);
  } else {
    rerender(habits[0].id);
  }
})();
