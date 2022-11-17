import { useEffect } from "react";

export default function BackToTop() {
  useEffect(() => {
    // Get the button
    const mybutton = document.getElementById("btn-back-to-top");
    if (mybutton == null) return;
    mybutton.style.display = "none";

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (mybutton == null) return;
      console.log(document.body.scrollTop);
      console.log(document.documentElement.scrollTop);
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
      console.log("clicked");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, []);
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="p-3 bg-grey text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-dark-green hover:shadow-lg bottom-5 right-5 fixed z-50"
      id="btn-back-to-top"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        className="w-4 h-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        ></path>
      </svg>
    </button>
  );
}
