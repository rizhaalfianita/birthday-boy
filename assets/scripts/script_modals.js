const modalContents = [
  {
    title: "So, you choose this",
    content: "Sorry... you are",
    contentSpan: "GAY",
  },
  {
    title: "Hmm...",
    content: "You are",
    contentSpan: "Narcist",
  },
  {
    title: "Thanks...",
    content: "You just admit that",
    contentSpan: "I'am smarter than you",
  },
  {
    title: "Too bad,",
    content: "You're the",
    contentSpan: "Tukang Turu, get up you punk!",
  },
  {
    title: "Well..",
    content: "Racist boy..",
    contentSpan: "when will you get it right?",
  },
  {
    title: "Yoo!!",
    content: "I'am the",
    contentSpan: "Rendra Hitler",
  },
  {
    title: "Hei, hei, hei",
    content: "Isn't it",
    contentSpan: "Enggar bestie?",
  },
];

function showModal() {
  const modal = document.querySelector(".modal");
  const titleModal = document.querySelector(".title-modal");
  const contentModal = document.querySelector(".content-modal");
  const spanModal = document.querySelector(".span-modal");

  titleModal.textContent = modalContents[0].title;
  contentModal.textContent = modalContents[0].content;
  spanModal.textContent = modalContents[0].contentSpan;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("hidden");
}

function showModal1() {
  const modal = document.querySelector(".modal-1");
  const titleModal = document.querySelector(".title-modal-1");
  const contentModal = document.querySelector(".content-modal-1");
  const spanModal = document.querySelector(".span-modal-1");

  titleModal.textContent = modalContents[1].title;
  contentModal.textContent = modalContents[1].content;
  spanModal.textContent = modalContents[1].contentSpan;
  modal.classList.remove("hidden");
}

function closeModal1() {
  const modal = document.querySelector(".modal-1");
  modal.classList.add("hidden");
}

function showModal2() {
  const modal = document.querySelector(".modal-2");
  const titleModal = document.querySelector(".title-modal-2");
  const contentModal = document.querySelector(".content-modal-2");
  const spanModal = document.querySelector(".span-modal-2");

  titleModal.textContent = modalContents[2].title;
  contentModal.textContent = modalContents[2].content;
  spanModal.textContent = modalContents[2].contentSpan;
  modal.classList.remove("hidden");
}

function closeModal2() {
  const modal = document.querySelector(".modal-2");
  modal.classList.add("hidden");
}

function showModal3() {
  const modal = document.querySelector(".modal-3");
  const titleModal = document.querySelector(".title-modal-3");
  const contentModal = document.querySelector(".content-modal-3");
  const spanModal = document.querySelector(".span-modal-3");

  titleModal.textContent = modalContents[3].title;
  contentModal.textContent = modalContents[3].content;
  spanModal.textContent = modalContents[3].contentSpan;
  modal.classList.remove("hidden");
}

function closeModal3() {
  const modal = document.querySelector(".modal-3");
  modal.classList.add("hidden");
}

function showModal4() {
  const modal = document.querySelector(".modal-4");
  const titleModal = document.querySelector(".title-modal-4");
  const contentModal = document.querySelector(".content-modal-4");
  const spanModal = document.querySelector(".span-modal-4");

  titleModal.textContent = modalContents[4].title;
  contentModal.textContent = modalContents[4].content;
  spanModal.textContent = modalContents[4].contentSpan;
  modal.classList.remove("hidden");
}

function closeModal4() {
  const modal = document.querySelector(".modal-4");
  modal.classList.add("hidden");
}

function showModal5() {
  const modal = document.querySelector(".modal-5");
  const titleModal = document.querySelector(".title-modal-5");
  const contentModal = document.querySelector(".content-modal-5");
  const spanModal = document.querySelector(".span-modal-5");

  titleModal.textContent = modalContents[5].title;
  contentModal.textContent = modalContents[5].content;
  spanModal.textContent = modalContents[5].contentSpan;
  modal.classList.remove("hidden");
}

function closeModal5() {
  const modal = document.querySelector(".modal-5");
  modal.classList.add("hidden");
}

function showModal6() {
  const modal = document.querySelector(".modal-6");
  modal.classList.remove("hidden");
}

function nextpage() {
  window.location.href = "../../views/chat.html";
}

function showModal7() {
  const modal = document.querySelector(".modal-7");
  const titleModal = document.querySelector(".title-modal-7");
  const contentModal = document.querySelector(".content-modal-7");
  const spanModal = document.querySelector(".span-modal-7");

  titleModal.textContent = modalContents[6].title;
  contentModal.textContent = modalContents[6].content;
  spanModal.textContent = modalContents[6].contentSpan;
  modal.classList.remove("hidden");
}

function closeModal7() {
  const modal = document.querySelector(".modal-7");
  modal.classList.add("hidden");
}
